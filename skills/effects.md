# 动效组件 skill

## 组件入口

- `src/components/effects/Reveal.astro`
- `src/components/effects/GlowCard.astro`
- `src/components/effects/Marquee.astro`
- `src/components/effects/MagneticLink.astro`

## 当前能力

- `Reveal`：滚动进入视口后执行淡入上移动画，支持 `prefers-reduced-motion`。
- `GlowCard`：鼠标跟随光晕卡片，适合导航、项目和首页 Bento。
- `Marquee`：轻量横向标签滚动，悬停暂停，减少动效时自动静态展示。
- `MagneticLink`：磁吸按钮效果，用于首页 CTA 或重点链接。

## 使用页面

- 首页：`src/pages/index.astro`
- Bento 入口：`src/components/home/BentoHub.astro`

## 技术说明

- 当前版本使用 Astro + Tailwind + 原生浏览器 API。
- 未引入 React、Framer Motion 或 Three.js，降低依赖风险。
- 复杂动效后续可以迁移为 React island，但页面文件仍只负责组合。

## 维护约定

每个动效保持独立组件，避免把交互脚本写入页面。新增动效时优先检查性能、可访问性和 `prefers-reduced-motion`。
