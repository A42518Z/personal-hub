# 项目页 skill

## 页面入口

- 路由：`/projects`
- 页面文件：`src/pages/projects.astro`
- 展示组件：`src/components/project/ProjectShowcase.astro`

## 页面能力

- 展示个人项目、服务入口和前端实验入口。
- 展示作品集式项目详情卡。
- 每个项目包含截图占位、状态标签和复盘占位。
- 后续可扩展项目截图、技术栈、复盘文章和线上地址。

## 使用数据和组件

- 数据：`src/data/hub.ts` 中的 `projects`。
- 组件：`HubHero`、`ItemGrid`、`ProjectShowcase`、`Reveal`。

## 维护约定

项目列表先走数据驱动；当项目详情复杂时，再拆分 `src/data/projects.ts` 和更细的 `src/components/project` 子组件。
