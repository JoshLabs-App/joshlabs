---
name: seo-rank-watch
description: Weekly loop to push joshlabs.app keywords to Google #1 — measure Search Console rankings, pick one striking-distance keyword, make one focused on-page improvement, log it, and review after 7 days. Use for "check our rankings", "SEO 排名", "冲第一", "看看哪个词能上", or /seo-rank-watch.
---

# SEO Rank Watch — joshlabs.app

Goal: find keywords that can realistically reach #1, make **one** improvement that better satisfies the search intent, wait 7 days, measure, repeat. Data source is Google Search Console (service account `seo-rank-watch@joshkitchen-seo`, shared with joshkitchen.com; key in `.secrets/gsc-service-account.json` locally / `GSC_SERVICE_ACCOUNT_JSON` secret in CI). The site is `sc-domain:joshlabs.app` — set via `GSC_SITE_URL` (the workflow does this; locally run `GSC_SITE_URL=sc-domain:joshlabs.app node …`).

## Site facts

- Plain static HTML, no build step. Each product has `<name>/index.html`; the home page `index.html` is the tile grid. Deploys to Cloudflare Pages on every push to `main` (`.github/workflows/deploy.yml`).
- Subdomains (class.joshlabs.app, unlearn-eng.pages.dev) are separate deployments but `sc-domain:joshlabs.app` includes all `*.joshlabs.app` traffic, so their queries show up in candidates.
- `candidates.mjs` keeps only queries matching the app-name regex in `scripts/seo/candidates.mjs` (joshlabs, selah, photoporter, cabinet, joshmoney, unlearn, english, my class). Extend it when a new product launches.

## Data files (all in `data/seo/`)

| File | Purpose |
|---|---|
| `watchwords.json` | keyword → targetPage, priority, status (`active` / `observing` / `achieved`) |
| `rank-history.json` | append-only; one run per measurement, 7-day average positions |
| `improvement-log.json` | what was changed, when, positionBefore, `reviewAt` (+7 days), outcome |

## Workflow (run in this order)

1. **Measure** — `GSC_SITE_URL=sc-domain:joshlabs.app node scripts/seo/measure.mjs` (add `--days 28` if numbers are noisy). Appends to rank-history and auto-closes `observing` entries whose `reviewAt` has passed.
2. **Find candidates** — `GSC_SITE_URL=sc-domain:joshlabs.app node scripts/seo/candidates.mjs`. Prefer position 2–8 with the most impressions. `--add` appends the top 5 new ones. Max 5 additions per week.
3. **Pick ONE keyword** with status `active` (never touch `observing`).
4. **Diagnose the intent gap** on the target page: `<title>`, `<meta name="description">`, H1, first paragraph, screenshots/alt text, App Store / Play links, an FAQ. For app-name queries the page must state clearly what the app is, which platforms, and how to get it, within the first screen.
5. **Make the change** directly in the HTML. Commit as `SEO: <keyword> — <what changed>` and push; Pages deploys in about a minute.
6. **Log it** — append to `improvement-log.json`:
   ```json
   { "keyword": "...", "targetPage": "/...", "changedAt": "YYYY-MM-DD", "reviewAt": "YYYY-MM-DD(+7)", "positionBefore": 4.2, "change": "one-sentence description", "commit": "abc1234", "status": "observing" }
   ```
   and set that keyword's `status` to `observing` in `watchwords.json`. Commit the data files too.
7. **Stop.** One improvement per keyword per week.

## Rules

- Never edit a page whose keyword is `observing`.
- No keyword stuffing; every change must make the page more useful for that search.
- `rank-history.json` is append-only.
- A swing < 1.0 position is noise; judge on `reviewAt`.
- Site has very little traffic today; expect many "not ranking" rows. That is fine — the loop pays off as content grows.

## Weekly automation

`.github/workflows/seo-rank-watch.yml` runs `measure.mjs` every Monday, commits `data/seo/rank-history.json` with `[skip ci]` (no redeploy), and prints candidates in the job log.
