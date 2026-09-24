import { createSign } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";

const SCOPE = "https://www.googleapis.com/auth/indexing";
const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
const INDEXING_ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish";
const ORIGIN = "https://seraphis-it.com";

const base64url = (input) =>
  Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

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

const createAccessToken = async (serviceAccount) => {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64url(
    JSON.stringify({
      iss: serviceAccount.client_email,
      scope: SCOPE,
      aud: TOKEN_ENDPOINT,
      iat: now,
      exp: now + 3600,
    }),
  );

  const unsigned = `${header}.${claim}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsigned);
  signer.end();
  const signature = signer
    .sign(serviceAccount.private_key, "base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  const assertion = `${unsigned}.${signature}`;

  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion,
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) {
    throw new Error(`OAuth token request failed (${response.status}): ${await response.text()}`);
  }

  const payload = await response.json();
  return payload.access_token;
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

const rawCredentials = process.env.GOOGLE_INDEXING_SERVICE_ACCOUNT_JSON;
if (!rawCredentials) {
  console.log("GOOGLE_INDEXING_SERVICE_ACCOUNT_JSON is not configured; skipping Google Indexing API notification.");
  process.exit(0);
}

let serviceAccount;
try {
  serviceAccount = JSON.parse(rawCredentials);
} catch {
  throw new Error("GOOGLE_INDEXING_SERVICE_ACCOUNT_JSON is not valid JSON.");
}

if (!serviceAccount.client_email || !serviceAccount.private_key) {
  throw new Error("Service-account JSON is missing client_email or private_key.");
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

const token = await createAccessToken(serviceAccount);
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
