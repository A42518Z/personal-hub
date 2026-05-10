# 导航 skill

## 文件入口

- 配置文件：`src/navigation.ts`
- 影响范围：站点 Header、Footer、RSS 链接和页脚分组。

## 当前能力

- Header 展示个人集主导航：首页、博客、导航、项目、工具箱、童年游戏、更多。
- 更多菜单包含前端实验室、状态页、关于和 RSS。
- Footer 按个人集、工具与实验、内容分类、站点信息分组。
- 工具与实验分组包含工具箱、前端实验室、童年游戏和状态页。
- 社交链接保留 RSS 和 GitHub 占位入口。
- GitHub 仓库地址当前使用 `#` 占位，等待绑定真实仓库。

## 使用数据或接口

- 使用 `getPermalink` 生成站内链接。
- 使用 `getBlogPermalink` 生成博客入口。
- 使用 `getAsset` 生成 RSS 静态资源链接。

## 维护约定

新增顶级页面时，应同步更新 Header 和 Footer。绑定真实仓库后，应将 `repositoryUrl` 从 `#` 替换为真实 GitHub 地址。导航配置保持轻量，不在这里写页面展示逻辑。
