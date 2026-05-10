# 童年游戏 skill

## 页面入口

- 列表路由：`/games`
- 本地播放器路由：`/games/local-rom`
- 内置游戏路由：`/games/[slug]`
- 列表页面文件：`src/pages/games.astro`
- 播放器页面文件：`src/pages/games/[slug].astro`
- 播放器组件：`src/components/games/NesPlayer.astro`
- 游戏数据：`src/data/games.ts`
- ROM 目录：`public/games/roms/`
- 封面目录：`public/games/covers/`

## 页面能力

- 展示童年游戏入口页和 50 款内置 NES 游戏。
- 列表页只渲染当前页 12 款游戏，搜索、筛选和分页由前端根据内嵌 JSON 数据渲染。
- 列表页使用统一像素风默认封面，不请求缺失的 `/games/covers/*.png`。
- 列表卡片展示类型、ROM 大小和已验证兼容性。
- 从列表进入游戏详情页使用 `data-astro-reload` 整页刷新，避免模拟器状态残留。
- 内置 ROM 不会在进入详情页时自动下载，必须点击“加载游戏”后才开始下载。
- 播放器支持下载进度：有 `Content-Length` 时显示百分比，无法获取总大小时显示不确定进度。
- 播放器采用单主按钮状态机：加载游戏、开始游戏、暂停、继续、重新加载。
- 支持用户选择本地 `.nes` 文件作为 fallback。
- 使用 Canvas 渲染 NES 画面，使用 Web Audio 输出模拟器音频。
- 第一版不提供移动端虚拟手柄和存档读档。

## 使用数据和接口

- 依赖：`jsnes`。
- 解压辅助依赖：`adm-zip`。
- 游戏数据来自 `src/data/games.ts`。
- 游戏数据字段包含 `sizeBytes`、`sizeLabel` 和 `compatibility`。
- 首页入口来自 `src/data/hub.ts` 中的 `quickLinks`。
- 导航入口来自 `src/navigation.ts`。
- 内置 ROM 通过静态路径 `/games/roms/{slug}.nes` 由浏览器在用户点击后按需 fetch。
- 本地 ROM 通过浏览器 File API 读取，不调用后端接口。

## 兼容性记录

当前内置 50 款 ROM 已通过 `jsnes.loadROM()` 批量验证。此前不兼容的 Mapper ROM 已从内置数据中替换，避免用户进入详情页后出现 `Unsupported mapper` 导致无法启动。

## 维护约定

后续新增游戏时，需要同步完成四件事：把合法 ROM 放入 `public/games/roms/`，封面截图放入 `public/games/covers/`，在 `src/data/games.ts` 新增条目，并更新本 skill。新增或替换 ROM 后，应先用 `jsnes.loadROM()` 批量验证兼容性，并同步维护 ROM 大小字段。不要热链第三方商业 ROM。模拟器逻辑保持在 `src/components/games` 下，页面文件只负责布局、数据读取和入口。
