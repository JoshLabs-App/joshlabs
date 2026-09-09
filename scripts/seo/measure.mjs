/**
 * Measure current Google rankings for every watchword and append to rank-history.
 *
 * Usage:
 *   node scripts/seo/measure.mjs            # last 7 full days
 *   node scripts/seo/measure.mjs --days 28  # wider window (more stable for low-volume terms)
 *
 * Reads:  data/seo/watchwords.json
 * Writes: data/seo/rank-history.json  (append-only)
 *         data/seo/improvement-log.json (auto-updates observing → kept/reverted/achieved when reviewAt passed)
 * Prints a table to stdout.
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { searchAnalytics, isoDate, daysAgo, PROJECT_ROOT, SITE_URL } from "./gsc-client.mjs";

const DATA = path.join(PROJECT_ROOT, "data", "seo");
const args = process.argv.slice(2);
const days = Number(args[args.indexOf("--days") + 1]) || 7;

const watch = JSON.parse(readFileSync(path.join(DATA, "watchwords.json"), "utf8"));
const history = JSON.parse(readFileSync(path.join(DATA, "rank-history.json"), "utf8"));
const log = JSON.parse(readFileSync(path.join(DATA, "improvement-log.json"), "utf8"));

const endDate = isoDate(daysAgo(2));
const startDate = isoDate(daysAgo(2 + days - 1));

// One query per keyword (exact match on the query dimension), broken down by page
// so we can see whether Google ranks the intended targetPage or some other page.
const results = [];
for (const w of watch.words) {
  const rows = await searchAnalytics({
    startDate,
    endDate,
    dimensions: ["page"],
    dimensionFilterGroups: [
      { filters: [{ dimension: "query", operator: "equals", expression: w.keyword }] },
    ],
    rowLimit: 25,
  });
  const total = rows.reduce(
    (a, r) => ({ clicks: a.clicks + r.clicks, impressions: a.impressions + r.impressions }),
    { clicks: 0, impressions: 0 },
  );
  // Best (lowest) position among pages, plus which page holds it.
  const best = rows.length ? rows.reduce((a, r) => (r.position < a.position ? r : a)) : null;
  const targetRow = rows.find((r) => new URL(r.keys[0]).pathname === w.targetPage);
  results.push({
    keyword: w.keyword,
    targetPage: w.targetPage,
    status: w.status,
    position: best ? Math.round(best.position * 10) / 10 : null,
    rankingPage: best ? new URL(best.keys[0]).pathname : null,
    targetPosition: targetRow ? Math.round(targetRow.position * 10) / 10 : null,
    clicks: total.clicks,
    impressions: total.impressions,
  });
}

const run = {
  measuredAt: new Date().toISOString(),
  window: { startDate, endDate, days },
  site: SITE_URL,
  results,
};
history.runs.push(run);
writeFileSync(path.join(DATA, "rank-history.json"), JSON.stringify(history, null, 2) + "\n");

// Review improvements whose observation window has passed.
const today = isoDate(new Date());
let logChanged = false;
for (const e of log.entries) {
  if (e.status !== "observing" || e.reviewAt > today) continue;
  const now = results.find((r) => r.keyword === e.keyword);
  if (!now || now.position == null) continue;
  const before = e.positionBefore;
  e.positionAfter = now.position;
  e.reviewedAt = today;
  if (now.position <= 1.2) e.status = "achieved";
  else if (before == null || now.position < before) e.status = "kept";
  else e.status = "reverted";
  logChanged = true;
  const w = watch.words.find((x) => x.keyword === e.keyword);
  if (w) w.status = e.status === "achieved" ? "achieved" : "active";
}
if (logChanged) {
  writeFileSync(path.join(DATA, "improvement-log.json"), JSON.stringify(log, null, 2) + "\n");
  writeFileSync(path.join(DATA, "watchwords.json"), JSON.stringify(watch, null, 2) + "\n");
}

// Report
console.log(`Search Console ${SITE_URL}  window ${startDate} → ${endDate} (${days}d)\n`);
console.log("pos   imp   clk  status     keyword  →  ranking page");
for (const r of results.sort((a, b) => (a.position ?? 999) - (b.position ?? 999))) {
  const pos = r.position == null ? "  –  " : String(r.position).padStart(5);
  const mismatch = r.rankingPage && r.rankingPage !== r.targetPage ? `  (target ${r.targetPage})` : "";
  console.log(
    `${pos} ${String(r.impressions).padStart(5)} ${String(r.clicks).padStart(5)}  ${r.status.padEnd(9)}  ${r.keyword}  →  ${r.rankingPage ?? "not ranking"}${mismatch}`,
  );
}
if (results.every((r) => r.position == null)) {
  console.log(
    "\nNo data returned. If the property was verified recently, Search Console needs 1–3 days before data appears.",
  );
}
