# 00JoshLabs · 待办 / 待 Josh 决定

每条写清三件事：现状 / 影响 / 需要 Josh 决定什么（给推荐选项）。
做完的移到「已关闭」，注明日期，不要直接删。

## 待决

### ~~O-5~~ 使用分析页 /tj 上线前需要在 Cloudflare 设置两个环境变量（关闭于 2026-10-30）
已在 2026-10-30 完成 Google OAuth 改造并部署。见 O-6。

### O-6 /tj 分析页 Google 登录已上线（待清理旧变量）（2026-10-30）
- **现状**：/tj 已改为 Google Identity Services 登录（`josh.zeng.ca@gmail.com`）。Google Cloud `joshlabs` 项目已建 OAuth 同意屏幕（JoshLabs Admin，外部）和 Web Application Client ID。Cloudflare `joshlabs2026` 已加 `GOOGLE_CLIENT_ID` 文本变量。代码已提交推送部署。
- **凭据**：`/Users/joshua/Desktop/APP/00/google-oauth/joshlabs/client-id.txt`
- **待做（JOSHUA 手动）**：Cloudflare Pages `joshlabs2026` → Settings → 变量和秘密 → 删除 `JL_ADMIN_KEY`（旧密码变量，新代码不再使用）。`SW_ADMIN_KEY` 保留。
- **Google Cloud 待做**：OAuth 同意屏幕发布状态是「测试」，当前只有添加的测试用户能登录。只有自己用不需要改；若以后要其他人用，需要在 Google Cloud Console 把应用发布为「正式版」。

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
