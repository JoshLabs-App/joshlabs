/**
 * Find "striking distance" keywords: queries where the site already ranks 2–15
 * with meaningful impressions. These are the cheapest wins to push to #1.
 *
 * Usage:
 *   node scripts/seo/candidates.mjs             # last 28 days, top 30
 *   node scripts/seo/candidates.mjs --days 90 --limit 50
 *   node scripts/seo/candidates.mjs --add       # append the top 5 new ones to watchwords.json as "active"
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { searchAnalytics, isoDate, daysAgo, PROJECT_ROOT } from "./gsc-client.mjs";

const DATA = path.join(PROJECT_ROOT, "data", "seo");
const args = process.argv.slice(2);
const opt = (name, def) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : def;
};
const days = Number(opt("--days", 28));
const limit = Number(opt("--limit", 30));
const add = args.includes("--add");

const watch = JSON.parse(readFileSync(path.join(DATA, "watchwords.json"), "utf8"));
const known = new Set(watch.words.map((w) => w.keyword.toLowerCase()));

const rows = await searchAnalytics({
  startDate: isoDate(daysAgo(2 + days - 1)),
  endDate: isoDate(daysAgo(2)),
  dimensions: ["query", "page"],
  rowLimit: 5000,
});

// Keep the best page per query.
const byQuery = new Map();
for (const r of rows) {
  const q = r.keys[0].toLowerCase();
  const cur = byQuery.get(q);
  if (!cur || r.position < cur.position) {
    byQuery.set(q, { query: q, page: new URL(r.keys[1]).pathname, position: r.position, clicks: r.clicks, impressions: r.impressions });
  }
}

const candidates = [...byQuery.values()]
  .filter((r) => r.position >= 1.5 && r.position <= 15 && r.impressions >= 10)
  .filter((r) => /joshlabs|selah|photoporter|photo porter|cabinet|kitchen design|joshmoney|josh money|tax|unlearn|别学|english|英语|my class|myclass/.test(r.query))
  .map((r) => ({
    ...r,
    // Opportunity score: impressions weighted toward positions 3–10 (page 1, not yet #1).
    score: Math.round(r.impressions * (r.position <= 10 ? 1.5 : 1) * (r.position <= 3 ? 1.5 : 1)),
    known: known.has(r.query),
  }))
  .sort((a, b) => b.score - a.score)
  .slice(0, limit);

console.log(`Striking-distance queries (pos 1.5–15, ≥10 impressions, last ${days}d)\n`);
console.log("score  pos   imp  clk  query  →  page");
for (const c of candidates) {
  console.log(
    `${String(c.score).padStart(5)} ${c.position.toFixed(1).padStart(5)} ${String(c.impressions).padStart(5)} ${String(c.clicks).padStart(4)}  ${c.known ? "* " : "  "}${c.query}  →  ${c.page}`,
  );
}
console.log("\n* = already in watchwords.json");

if (add) {
  const fresh = candidates.filter((c) => !c.known).slice(0, 5);
  const today = isoDate(new Date());
  for (const c of fresh) {
    watch.words.push({ keyword: c.query, targetPage: c.page, priority: 6, status: "active", addedAt: today, source: "candidates" });
  }
  writeFileSync(path.join(DATA, "watchwords.json"), JSON.stringify(watch, null, 2) + "\n");
  console.log(`\nAdded ${fresh.length} keyword(s) to watchwords.json`);
}
if (!rows.length) console.log("\nNo Search Console rows yet — check back in a day or two.");
