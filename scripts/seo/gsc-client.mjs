/**
 * Minimal Google Search Console client (no npm deps).
 * Auth: service-account JSON → signed JWT → OAuth2 access token.
 *
 * Credentials are read from, in order:
 *   1. env GSC_SERVICE_ACCOUNT_JSON  (the JSON text itself, used in CI)
 *   2. env GSC_SERVICE_ACCOUNT_FILE  (path)
 *   3. .secrets/gsc-service-account.json (local default)
 */

import { createSign } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
export const SITE_URL = process.env.GSC_SITE_URL || "sc-domain:joshkitchen.com";

function loadCredentials() {
  if (process.env.GSC_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.GSC_SERVICE_ACCOUNT_JSON);
  }
  const file =
    process.env.GSC_SERVICE_ACCOUNT_FILE ||
    path.join(PROJECT_ROOT, ".secrets", "gsc-service-account.json");
  try {
    return JSON.parse(readFileSync(file, "utf8"));
  } catch {
    throw new Error(
      `Search Console credentials not found. Set GSC_SERVICE_ACCOUNT_JSON or put the key at ${file}`,
    );
  }
}

function b64url(input) {
  return Buffer.from(input).toString("base64url");
}

let cachedToken = null;

export async function getAccessToken() {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) return cachedToken.token;
  const creds = loadCredentials();
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(
    JSON.stringify({
      iss: creds.client_email,
      scope: "https://www.googleapis.com/auth/webmasters.readonly",
      aud: creds.token_uri,
      iat: now,
      exp: now + 3600,
    }),
  );
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claims}`);
  const signature = signer.sign(creds.private_key, "base64url");
  const assertion = `${header}.${claims}.${signature}`;

  const res = await fetch(creds.token_uri, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });
  if (!res.ok) throw new Error(`Token request failed: ${res.status} ${await res.text()}`);
  const json = await res.json();
  cachedToken = { token: json.access_token, expiresAt: Date.now() + json.expires_in * 1000 };
  return cachedToken.token;
}

/**
 * Run a Search Analytics query.
 * @param {object} body  e.g. { startDate, endDate, dimensions: ["query","page"], rowLimit }
 */
export async function searchAnalytics(body) {
  const token = await getAccessToken();
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ rowLimit: 5000, dataState: "final", ...body }),
  });
  if (!res.ok) throw new Error(`Search Analytics failed: ${res.status} ${await res.text()}`);
  const json = await res.json();
  return json.rows || [];
}

export function isoDate(d) {
  return d.toISOString().slice(0, 10);
}

export function daysAgo(n) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return d;
}
