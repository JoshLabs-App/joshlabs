/**
 * Quick connectivity check: prints how many rows GSC returns for the last 28 days
 * and the top queries. Usage: node scripts/seo/gsc-probe.mjs
 */
import { searchAnalytics, isoDate, daysAgo, SITE_URL } from "./gsc-client.mjs";

const rows = await searchAnalytics({
  startDate: isoDate(daysAgo(30)),
  endDate: isoDate(daysAgo(2)),
  dimensions: ["query"],
  rowLimit: 25,
});
console.log(`site: ${SITE_URL}`);
console.log(`rows: ${rows.length}`);
for (const r of rows) {
  console.log(
    `${String(r.position.toFixed(1)).padStart(5)}  imp ${String(r.impressions).padStart(5)}  clk ${String(r.clicks).padStart(3)}  ${r.keys[0]}`,
  );
}
