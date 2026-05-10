# 状态页 skill

## 页面入口

- 路由：`/status`
- 页面文件：`src/pages/status.astro`
- 状态详情组件：`src/components/status/StatusDetails.astro`

## 页面能力

- 展示站点前端、Dev Orchestrator API 和 Docker 服务状态。
- 第一版为静态状态。
- 每个服务都有状态详情卡，避免页面只有入口卡片。
- 后续可接入 API 健康检查、Docker 状态和部署状态。

## 使用数据和组件

- 数据：`src/data/hub.ts` 中的 `services`。
- 组件：`HubHero`、`ItemGrid`、`StatusDetails`、`Reveal`。

## 维护约定

动态状态逻辑应拆入 `src/components/status` 或 `src/lib/status.ts`，页面文件只负责展示编排。锚点 ID 应和服务链接保持一致。
