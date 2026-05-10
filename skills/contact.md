# 联系页 skill

## 页面入口

- 路由：`/contact`
- 页面文件：`src/pages/contact.astro`
- 数据文件：`src/data/contact.ts`

## 当前能力

- 展示 Personal Hub 的联系与反馈入口。
- 展示常用链接：GitHub 占位、RSS、博客、状态页。
- 展示适合反馈的方向：内容建议、工具需求、视觉实验、服务接入。
- 说明当前不提供无效表单，后续可接入真实反馈系统。

## 使用组件

- `Layout`
- `HubHero`
- `GlowCard`
- `Reveal`

## 数据结构

`src/data/contact.ts` 当前导出：

- `contactIntro`
- `contactLinks`
- `feedbackTopics`

## 维护约定

联系页保持静态入口优先。绑定真实仓库后，把 GitHub 链接从 `#` 替换为真实地址。接入表单前，应明确后端处理方式，例如 GitHub Issues、Formspree、Resend 或自建 API，避免产生无法处理的表单提交。
