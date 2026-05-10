# 首页 Bento skill

## 组件入口

- 页面：`src/pages/index.astro`
- 组件：`src/components/home/BentoHub.astro`

## 当前能力

- 将 `quickLinks` 渲染为 Bento 风格快速入口。
- 首个入口使用更大的卡片面积，突出博客入口。
- 其余入口按网格自动排布。
- 卡片底层复用 `GlowCard`，保持动效统一。

## 使用数据

- `src/data/hub.ts` 中的 `quickLinks`。

## 维护约定

新增或调整首页入口时优先修改 `quickLinks`。如果 Bento 排版复杂化，再拆成更细的 `BentoTile` 或 `FeaturedTile` 组件。
