import { promises as fs } from "node:fs";
import path from "node:path";

const ORIGIN = "https://seraphis-it.com";
const HOST = "seraphis-it.com";
const KEY = "97cbe91b1338e97ed4a45e81d955835f";
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

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

const currentSitemap = process.env.CURRENT_SITEMAP || path.resolve("public/sitemap.xml");
const previousSitemap = process.env.PREVIOUS_SITEMAP || "";

const currentJobs = new Set(await readJobUrls(currentSitemap));
const previousJobs = previousSitemap ? new Set(await readJobUrls(previousSitemap)) : new Set();
const deletedJobs = [...previousJobs].filter((url) => !currentJobs.has(url));
const urls = [...new Set([...currentJobs, ...deletedJobs])];

if (urls.length === 0) {
  console.log("No job URLs found for IndexNow.");
  process.exit(0);
}

const response = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }),
});

const body = await response.text();
if (![200, 202].includes(response.status)) {
  throw new Error(`IndexNow submission failed (${response.status}): ${body}`);
}

console.log(
  `IndexNow accepted ${urls.length} job URL(s) with HTTP ${response.status}${response.status === 202 ? " (key validation pending)" : ""}.`,
);
