import { promises as fs } from "node:fs";
import path from "node:path";

const INDEXING_ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish";
const ORIGIN = "https://seraphis-it.com";

const readJobUrls = async (filePath) => {
  try {
    const xml = await fs.readFile(filePath, "utf8");
    return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((match) => match[1].trim())
      .filter((url) => {
        try {
          const parsed = new URL(url);
          return (
            parsed.origin === ORIGIN &&
            parsed.pathname.startsWith("/careers/") &&
            parsed.pathname !== "/careers/general-application" &&
            parsed.pathname !== "/careers/application-received"
          );
        } catch {
          return false;
        }
      });
  } catch {
    return [];
  }
};

const notify = async (token, url, type) => {
  const response = await fetch(INDEXING_ENDPOINT, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ url, type }),
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`${type} failed for ${url} (${response.status}): ${text}`);
  }

  return text ? JSON.parse(text) : {};
};

const token = process.env.GOOGLE_OAUTH_ACCESS_TOKEN;
if (!token) {
  console.log("No Google OAuth access token is available; skipping Google Indexing API notification.");
  process.exit(0);
}

const currentSitemap = process.env.CURRENT_SITEMAP || path.resolve("public/sitemap.xml");
const previousSitemap = process.env.PREVIOUS_SITEMAP || "";

const currentJobs = new Set(await readJobUrls(currentSitemap));
const previousJobs = previousSitemap ? new Set(await readJobUrls(previousSitemap)) : new Set();

const deletedJobs = [...previousJobs].filter((url) => !currentJobs.has(url));
const updatedJobs = [...currentJobs];

if (updatedJobs.length === 0 && deletedJobs.length === 0) {
  console.log("No job URLs found to notify.");
  process.exit(0);
}

let failures = 0;

for (const url of updatedJobs) {
  try {
    await notify(token, url, "URL_UPDATED");
    console.log(`Google Indexing API accepted URL_UPDATED: ${url}`);
  } catch (error) {
    failures += 1;
    console.error(error.message);
  }
}

for (const url of deletedJobs) {
  try {
    await notify(token, url, "URL_DELETED");
    console.log(`Google Indexing API accepted URL_DELETED: ${url}`);
  } catch (error) {
    failures += 1;
    console.error(error.message);
  }
}

if (failures > 0) {
  process.exitCode = 1;
} else {
  console.log(`Submitted ${updatedJobs.length} active job update(s) and ${deletedJobs.length} removed job URL(s).`);
}
