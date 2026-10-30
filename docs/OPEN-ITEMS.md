# 00JoshLabs · 待办 / 待 Josh 决定

每条写清三件事：现状 / 影响 / 需要 Josh 决定什么（给推荐选项）。
做完的移到「已关闭」，注明日期，不要直接删。

## 待决

### O-5 使用分析页 /tj 上线前需要在 Cloudflare 设置两个环境变量（2026-10-30）
- **现状**：已建 `tj.html`（登录入口）+ `assets/tj.js`（仪表板）+ `functions/api/stats.js`（Pages Function 代取守望数据）+ `assets/world.json`（地图）。本地静态预览 UI 流程 OK；上线还差两步：① Cloudflare Pages 设 env vars，② 部署。
- **影响**：`/api/stats` 调用会 404，拿不到数据。
- **需要 JOSHUA 做**：
  1. 打开 Cloudflare Pages → `joshlabs` 项目 → Settings → Environment variables，加两个 Secret（Production + Preview 都选）：
     - `JL_ADMIN_KEY` = 你自己想的登录密码（访问 `/tj` 时浏览器输这个）
     - `SW_ADMIN_KEY` = 守望管理密钥（从 `/Users/joshua/Desktop/APP/03听到/守望资料/网站/.admin_key` 复制，48 字符那行）
  2. 在 Pages 仪表板触发一次重新部署（或 `npx wrangler pages deploy .`），让 Function 生效。
  3. 打开 `joshlabs.app/tj`，输入你刚设的 `JL_ADMIN_KEY`，看到守望统计即完成。
- **本地联调命令**（不想等部署）：
  ```bash
  npx wrangler pages dev . --binding JL_ADMIN_KEY=你的密码 --binding SW_ADMIN_KEY=$(cat /Users/joshua/Desktop/APP/03听到/守望资料/网站/.admin_key)
  ```

### O-4 好师傅的链接还是 vercel 临时地址（2026-10-01）
- **现状**：首页好师傅磁贴和说明链的是 `https://goodpro-alpha.vercel.app`；GoodPro 项目里只找到这一个地址，
  App Store / Google Play 上都没查到 `app.joshlabs.goodpro`。「听到」「150英语」在这个开发者账号下也没查到 iOS 版，首页没加商店链接。
- **影响**：对外入口是个带 alpha 字样的临时域名。
- **要 Josh 决定**：好师傅有正式域名或商店链接就给地址，Claude 换上；没有就保持现状。

## 已关闭

### O-3 首页 / 产品页的上架更新发布（关闭于 2026-10-01）
- D-3、D-4 的改动已用 `node scripts/publish.mjs` 发布上线并核对；截图译的首页说明条目也已补上（Josh「1发布 3补」）。
- 改动已随 D-5 一起提交。

### O-2 仓库和线上不一致（关闭于 2026-10-01）
- 按 D-5 处理：自动部署关掉、门户文件补提交并推送。遗留：`photo-porter/download/` 的 APK 改动和 `docs/` 仍未提交（原因见 D-5），
  `docs/` 等 O-1 密钥换完再提交。

### O-1 Google 服务账号密钥曾公开在线上（关闭于 2026-10-01）
- 泄露的旧密钥（ID `2ecac331…`）已由 Josh 用 `gcloud` 删除，新密钥（ID `64e12009…`）已换到四处：
  `00JoshLabs/.secrets/`、`02JoshKitchen/.secrets/`、GitHub `JoshLabs-App/joshlabs` 与 `JoshLabs-App/joshkitchen` 的 Secret `GSC_SERVICE_ACCOUNT_JSON`。
- 核对：服务账号下只剩新密钥；`node scripts/seo/gsc-probe.mjs` 用新密钥能读 `sc-domain:joshlabs.app`。
- 旧部署地址上残留的那份文件已是废密钥，没再删旧部署。发布脚本的排除清单和 `_redirects` 拦截保留（D-2）。
