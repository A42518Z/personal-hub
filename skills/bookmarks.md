# 导航页 skill

## 页面入口

- 路由：`/bookmarks`
- 页面文件：`src/pages/bookmarks.astro`
- 数据文件：`src/data/bookmarks.ts`
- 交互组件：`src/components/bookmark/BookmarkExplorer.astro`

## 页面能力

- 按分组展示常用网站。
- 支持关键词搜索，匹配名称、描述和 badge。
- 支持分类筛选。
- 当前分类包含：AI 工具、前端文档、设计灵感、组件库、3D 与 WebGL、主题参考。
- 已收录用户提供的参考站点和组件库链接。

## 使用组件

- `Layout`
- `HubHero`
- `Reveal`
- `BookmarkExplorer`
- `GlowCard`

## 数据结构

`src/data/bookmarks.ts` 导出 `bookmarkGroups`，结构复用 `HubGroup`：

- `title`
- `description`
- `items`
  - `title`
  - `description`
  - `href`
  - `badge`

## 维护约定

新增书签优先修改 `src/data/bookmarks.ts`。导航页只负责页面编排，搜索筛选逻辑集中维护在 `BookmarkExplorer.astro`。
