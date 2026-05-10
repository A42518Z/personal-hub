# 首页 skill

## 页面入口

- 路由：`/`
- 文件：`src/pages/index.astro`

## 页面能力

- 展示个人集 Hero。
- 展示磁吸 CTA 链接。
- 展示 Building blocks 横向 Marquee 标签。
- 使用 Bento 布局展示博客、导航、项目、工具箱、实验室、状态页等快速入口。
- 展示精选项目。
- 展示服务状态摘要。

## 使用数据和组件

- 数据：`src/data/hub.ts` 中的 `quickLinks`、`projects`、`services`。
- 基础组件：`HubHero`、`ItemGrid`、`ItemCard`。
- 首页组件：`BentoHub`。
- 动效组件：`Reveal`、`Marquee`、`MagneticLink`、`GlowCard`。

## 维护约定

首页只负责页面编排，不直接堆叠大量卡片 HTML。新增入口应优先修改 `src/data/hub.ts`，复杂展示再拆入 `src/components/home`。
