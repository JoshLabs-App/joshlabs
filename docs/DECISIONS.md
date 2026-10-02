# 00JoshLabs · 决定记录

讨论中一达成共识就当场写在这里，不要攒到收尾。每条三行：决定了什么 / 为什么 / 日期。
推翻的标「已作废 + 日期 + 新决定在哪」，不要删。

## 决定

### D-1 首页加「听到」「查到」，三个 App 的安卓下载一律链到各自的下载页（2026-10-01）
- **决定了什么**：原「My Class」磁贴改名「听到」（换成 App 图标，仍链 `class.joshlabs.app`），新增「查到」磁贴（没有网页版，直接链下载页）；
  说明区里 AskBible / 听到 / 查到 的「安卓下载」都链 `https://<桶>.joshlabs.app/download.html`（`askbible-media` / `my-class-media` / `chadao-media`），
  不链 APK 直链，也不把 APK 放进本仓。AskBible 原来链的是 `pub-….r2.dev` 直链，一并换掉。
- **为什么**：Josh「把听到、查到都放上去，并提供下载」「第一个 askbible 也提供下载」。下载页由 `~/bin/deploy_android.py` 每次发版自动更新，
  门户这边链接永远不用改；下载页上有版本号和更新说明，发给别人也用这个地址。
- **日期**：2026-10-01（已上线）

### D-2 发布只用 `node scripts/publish.mjs`，不再直接 `wrangler pages deploy .`（2026-10-01）
- **决定了什么**：发布脚本先把站点拷到临时目录（排除 `.secrets/`、`scripts/`、`docs/`、`.claude/`、`.github/`、`AGENTS.md`、`README.md` 等）再发那个目录；
  `_redirects` 末尾另有一组规则把这些路径跳回首页。
- **为什么**：wrangler 不认 `.cfignore`，直接发当前目录会把本地凭据和内部文档一起发到线上（见 OPEN-ITEMS O-1）。
  Pages 还会把旧部署里的文件保留一周、清缓存清不掉，所以要靠 `_redirects` 挡。
- **日期**：2026-10-01

### D-3 已上架 App Store 的 App，站内一律给真链接，不再写「上架中」（2026-10-01）
- **决定了什么**：Selah / Cabinet X / 截图译 三个产品页的 App Store 徽章从「上架中…」改成真链接；首页 Cabinet X、Selah、查到、
  English Game（= 别学英语）说明区加 App Store 链接，Cabinet X / 截图译 / Selah 磁贴状态点从 review 改 live。
  Cabinet X 的 Google Play 也已上架（`com.cabinetx.app`），同步改成真链接并去掉「Get notified」按钮。
  链接统一用不带地区的短格式 `https://apps.apple.com/app/id<ID>`。ID 表：
  AskBible 6771996188 · JoshMoney 6780067998 · Cabinet-X 6785025926 · Selah 6801122212 · PhotoPorter X 6805702109 ·
  PhotoPorter Desktop 6805962527 · 别学英语 6808794026 · 榴莲英语 6809924643 · 截图译 6812111067 · 查到 6815240486。
- **为什么**：Josh「我们的软件，都已经上架苹果商店了，所以都要更新里面的」。ID 来自 iTunes 查询接口
  （`https://itunes.apple.com/lookup?id=6771996190&entity=software&country=ca`，开发者账号下共 10 个），不是手抄的；以后新上架的也用这条查。
  Selah / 截图译 / 查到 / 别学英语 / 榴莲英语 的 Google Play 查过还是 404，所以那几个安卓徽章保持「上架中…」。
- **日期**：2026-10-01（本机已改，**尚未发布**，见 OPEN-ITEMS O-3）

### D-4 首页加榴莲英语；好师傅改「已上线」；Cabinet X 图标换成商店现行版（2026-10-01）
- **决定了什么**：
  1. 首页新增「榴莲英语 Durian English」磁贴（链官网 `https://durianenglish.joshlabs.app/`）和说明条目（官网 + App Store id6809924643），
     图标 `assets/icons/durian-english.png` 取自 App Store 现行图标。
  2. 好师傅 GoodPro：磁贴状态点 review → live，说明里去掉「内部测试版 / Internal test build」，加「网页版」链接。
     链接仍是 `https://goodpro-alpha.vercel.app`（GoodPro 项目里只找到这一个地址；App Store / Google Play 上都没查到 `app.joshlabs.goodpro`）。
  3. `assets/icons/cabinet-x.png` 换成 App Store 上的现行图标（和原来那张像素差很大，是旧版）；
     截图译、Selah 的站内图标和商店一致，好师傅的和线上网页版一致，没动。
- **为什么**：Josh「厨房设计 图译 selah 好师傅都已经上线的，所以图标与连接要更新」「榴莲英语 加上」。
  图标一律以商店 / 线上现行版为准，用像素差比对，不靠肉眼。
- **日期**：2026-10-01（本机已改，**尚未发布**，见 OPEN-ITEMS O-3）

### D-5 push 不再自动部署，只留手动触发；仓库补齐到和线上一致（2026-10-01）
- **决定了什么**：`.github/workflows/deploy.yml` 去掉 `push` 触发，只留 `workflow_dispatch`。上线只走本机 `node scripts/publish.mjs`（D-2）。
  同时把本机已上线但没提交的门户文件（首页、样式、图标、Cabinet X / Selah / JoshMoney / PhotoPorter 产品页、整个 `jietuyi/`、`cabinet-x/terms/`）一次提交并推送。
  **没提交的**：`photo-porter/download/` 下 APK 的增删改（别的会话的改动）、`docs/`（仓库公开，含 O-1 密钥细节，等密钥换完再提交）、`README.md` 里指向 docs 的那一行。
- **为什么**：仓库比线上旧一大截，原来任何一次不带 `[skip ci]` 的 push 都会用旧内容覆盖线上。Josh「你决定」。
  注意手动触发那个 workflow 仍是 `pages deploy .`（发整个仓库，不走 publish.mjs 的排除清单），平时别点。
- **日期**：2026-10-01

## 已作废

