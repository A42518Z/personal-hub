# 实验室 skill

## 页面入口

- 路由：`/lab`
- 页面文件：`src/pages/lab.astro`
- 预览组件：`src/components/lab/LabPreviewGrid.astro`

## 页面能力

- 展示前端视觉和交互实验入口。
- 当前包含粒子背景、玻璃拟态、鼠标跟随光效和 3D 卡片。
- 每个实验都有对应锚点落点和视觉占位，避免点击后无内容。
- 后续可逐步替换为 Canvas、WebGL、Three.js 或 Motion 真实 Demo。

## 使用数据和组件

- 数据：`src/data/hub.ts` 中的 `labs`。
- 组件：`HubHero`、`ItemGrid`、`LabPreviewGrid`、`Reveal`。

## 维护约定

每个实验独立拆入 `src/components/lab`，不要把 Canvas 或动效逻辑直接堆在页面文件中。锚点 ID 应和 `labs` 中链接保持一致。
