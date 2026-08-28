# JoshLabs 门户 — AI 交接开发文档

> **后续 AI：先读本文件，再动手。**  
> 产品站：https://joshlabs.app  
> 本仓库是**静态门户**，不是各 App 的源码仓。

---

## 1. 一句话

`joshlabs.app` = Cloudflare Pages 上的静态站点：首页 App 目录 + 各产品介绍/隐私页 + **My Class** 完整 Web App + **PhotoPorter** 安卓 APK 直链。

无构建步骤（无 Vite/Next）。改 HTML/CSS/JS → 本地预览 → 用户明确要求后再 `wrangler pages deploy`。

---

## 2. 启动指令（给其它 AI）

1. 读本文件全文。
2. 遵守 JoshLabs Dev：`/Users/joshua/Desktop/APP/skills/joshlabs-dev/SKILL.md` → `references/core-dev-principles.md`。
3. 最小改动；未要求不上线、不 commit、不 push。
4. 动 My Class 功能/数据 → 去 **`../03MyClass`**，不要只在本仓 `my-class/` 改一版当真源。
5. 动门户文案/图标/产品页 → 改本仓对应路径，复用 `assets/styles.css` 与现有 page-hero 骨架。

---

## 3. 硬边界（不要做什么）

| 禁止 | 原因 |
|------|------|
| 未要求就 publish / deploy | 上线需用户明确说 |
| 把 `my-class/` 当唯一真源长期改 | 真源是 `03MyClass`；门户是同步产物 |
| 新建框架、打包器、组件库 | 保持纯静态 |
| 擅自加装饰动画/未请求的 UI 效果 | JoshLabs Dev UI 默认 |
| 改 AskBible 产品本体 | 首页只链到 `https://askbible.me` |
| 把 `scripts/` 当线上依赖 | 已被 `.gitignore` / `.cfignore` 排除 |

---

## 4. 仓库与线上

| 项 | 值 |
|----|-----|
| 本地路径 | `/Users/joshua/Desktop/APP/00JoshLabs` |
| Git remote | `https://github.com/askbibleme/joshlabs.git` |
| 默认分支 | `main` |
| 线上域名 | `https://joshlabs.app` |
| CF Account ID | `652050e08d4a384c7cbe975ea02fb52c` |
| CF Pages 项目名 | `joshlabs2026` |
| 联系邮箱 | `josh.zeng.ca@gmail.com` |

### 发布方式（优先 wrangler）

团队约定：**不要指望 git push 自动上线**。正式发布用本机 wrangler：

```bash
# 在本仓（需已 npx wrangler login）
npx wrangler@latest pages deploy . \
  --project-name=joshlabs2026 \
  --branch=main \
  --commit-dirty=true
```

或用本地脚本（**未进 git**，见 `scripts/publish.mjs`）：

```bash
node scripts/publish.mjs
```

从 My Class 一侧一键「同步 + 上线」：

```bash
cd /Users/joshua/Desktop/APP/03MyClass
npm run publish          # 同步 my-class/ 并 wrangler 整站
SKIP_UPDATE=1 npm run publish  # 不同步讲道数据更新
```

仓库里有 `.github/workflows/deploy.yml`（push `main` → Pages），但实践上以 **wrangler 本机发布** 为准；push 主要用于备份，不等于已上线。

`.cfignore` 排除：`.git/`、`.cursor/`、`scripts/`、`.venv-porkbun/`。

---

## 5. 目录地图

```
00JoshLabs/
├── AGENTS.md                 ← 本交接文档（AI 入口）
├── index.html                ← 首页目录（双语 EN/中文）
├── assets/
│   ├── styles.css            ← 全站共享样式
│   └── icons/                ← 各 App 图标 + joshlabs.*
├── site.webmanifest
├── _redirects                ← Cloudflare Pages 路由（含 My Class SPA）
├── 启动本地预览.command        ← python http.server :8080/8081
├── joshmoney/                ← 产品页 + privacy/ + terms/
├── cabinet-x/                ← 产品页 + privacy/
├── selah-my/                 ← 产品页 + privacy/
├── photo-porter/             ← 产品页 + privacy/ + download/*.apk
├── my-class/                 ← 讲道集 Web App（由 03MyClass 同步）
├── scripts/                  ← 本地工具（gitignored）：publish.mjs, porkbun_dns_setup.py
└── .github/workflows/deploy.yml
```

### 首页 App 磁贴（`index.html`）

| data-app | 状态属性 | 链向 |
|----------|----------|------|
| askbible | live | 外链 `https://askbible.me` |
| joshmoney | live | `/joshmoney/` |
| cabinet-x | review | `/cabinet-x/` |
| selah-my | review | `/selah-my/` |
| my-class | live | `/my-class/` |
| photo-porter | live | `/photo-porter/` |

双语：元素上 `data-en` / `data-zh`，`localStorage` key `joshlabs-lang`。

产品子页共享：`topbar` + `page-hero` + `../assets/styles.css`。新增产品页时复制现有页骨架，不要另起一套视觉系统。

---

## 6. My Class（真源与同步）

| | |
|--|--|
| **真源** | `/Users/joshua/Desktop/APP/03MyClass` |
| **门户副本** | `00JoshLabs/my-class/` |
| 线上 | `https://joshlabs.app/my-class/` |

同步（在 `03MyClass`）：

```bash
npm run deploy                 # update 数据 + 拷贝到 00JoshLabs/my-class/
SKIP_UPDATE=1 npm run deploy     # 只拷贝，不跑 update
```

`deploy.mjs` 会：

- 清空并重写 `00JoshLabs/my-class/`
- 拷贝根文件：`index.html`, `app.js`, `install.js`, `base-path.js`, `styles.css`, `sunday-classify.js`, `theme.js`
- 拷贝：`public/sw.js`→`sw.js`（打 SW 版本戳）、`public/icons`, `public/data`, `public/worldview`, `public/strong-home`, `MEN`, `JOHN`
- 写 `my-class/_redirects`，并确保根 `_redirects` 含 `/my-class/*` SPA 规则

子路径：`/my-class/JOHN/`、`/MEN/`、`/worldview/`、`/strong-home/`（教材阅读器等）。

**改门户里的 my-class 而不回写 03MyClass，下次 deploy 会被覆盖。**

---

## 7. PhotoPorter（门户职责）

门户只负责：**介绍页、隐私页、sideload APK**。

| 项 | 说明 |
|----|------|
| 介绍 | `/photo-porter/` |
| 隐私 | `/photo-porter/privacy/` |
| 完整功能 APK | `/photo-porter/download/PhotoPorter-1.0.4.apk`（以目录内最新为准） |
| 说明 | `photo-porter/download/README.txt` |
| Play | `app.joshlabs.phonexfer` |
| iPhone | App Store id `6805702109` |
| Mac | App Store id `6805962527` |

Play 版权限更少；sideload APK 含 foreground transfer + 可选 ACK 后自动删除。换包时：放入 `download/`、改首页与产品页链接、更新 `README.txt` 版本号。

App 源码不在本仓（见本机 `手机传输` / PhotoPorter 工程）。

---

## 8. 本地预览

```bash
# 方式 A
open ./启动本地预览.command
# 方式 B
python3 -m http.server 8080
# 然后打开 http://localhost:8080
```

My Class 开发预览优先在 `03MyClass`：`npm run dev`。

---

## 9. 交接时工作区状态（2026-08-27）

**务必先跑 `git status`。** 交接时大致情况：

- **已推远程 / 已 commit 的 HEAD**：约 `e758914` — PhotoPorter **1.0.3** APK 等。
- **工作区有大量未提交改动**（勿假设等于线上），常见包括：
  - `index.html`、`assets/styles.css`、Cabinet X 图标
  - `joshmoney/` 文案页
  - `photo-porter/` → 链到 **1.0.4** APK（未跟踪的 `PhotoPorter-1.0.4.apk`）
  - 未跟踪：`selah-my/`、`assets/icons/selah.png`、根 `_redirects`
  - `my-class/` 大改 + 未跟踪子目录 `JOHN/`、`MEN/`、`worldview/`、`strong-home/`
- 产品页 eyebrow 可能仍写 `v1.0.3`，下载链已是 `1.0.4` — 改文案时对齐版本。

上线前：确认要发布的是**工作区当前文件**还是**干净 commit**；`wrangler pages deploy .` 会部署**磁盘上的当前目录**（含未 commit 文件）。

---

## 10. 常见任务怎么做

| 任务 | 做法 |
|------|------|
| 改首页简介/磁贴/双语 | 改 `index.html`（+ 必要时 `assets/styles.css`） |
| 改某 App 商店链/隐私文案 | 改对应 `*/index.html` 或 `*/privacy/` |
| 更新 My Class 功能或讲道数据 | 在 `03MyClass` 改 → `npm run deploy` 或 `publish` |
| 换 PhotoPorter APK | 放 `photo-porter/download/`，改链接与 README |
| 加新 App 入口 | 复制现有产品页骨架 + 首页磁贴 + `assets/icons/` 图标；状态用 `data-status` |
| 上线 | 用户明确要求后 wrangler（见 §4） |
| 备份到 GitHub | 用户要求 commit/push 时再做 |

---

## 11. 关联工程（不要搞混）

| 产品 | 真源工程（约） | 门户角色 |
|------|----------------|----------|
| AskBible | `01AskBible` / `01AskBible3` | 外链 |
| JoshMoney | `05JoshMoney` | 介绍 + 隐私 + 条款 |
| Cabinet X | `06Cabinet-X` | 介绍 + 隐私 |
| Selah | `02selah.my`（原生 `apps/selah-ios`） | 介绍 + 隐私 |
| My Class | `03MyClass` | **完整托管** Web App |
| PhotoPorter | `手机传输` 等 | 介绍 + 隐私 + APK |

跨项目记忆（人读，非代码真源）：`/Users/joshua/Documents/Cursor-Memory/项目/00JoshLabs.md`

---

## 12. 自检清单（改完再交）

- [ ] 只动了请求范围内的文件  
- [ ] My Class 改动是否应回 `03MyClass`？  
- [ ] 本地 `python3 -m http.server` 打开相关路径可看  
- [ ] 未擅自 deploy / commit / push  
- [ ] 版本号、APK 文件名、商店链接一致  

---

*文档生成：2026-08-27。若与用户最新口头指令冲突，以用户指令为准。*
