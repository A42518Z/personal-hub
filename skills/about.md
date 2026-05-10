# 关于页 skill

## 页面入口

- 路由：`/about`
- 页面文件：`src/pages/about.astro`
- 数据文件：`src/data/profile.ts`

## 当前能力

- 展示个人集定位和简介。
- 展示核心统计：核心页面、动效组件、中文文章、构建状态。
- 展示站点构建时间线。
- 展示当前关注的能力栈。
- 展示维护原则。

## 使用组件

- `Layout`
- `HubHero`
- `Reveal`

## 数据结构

`src/data/profile.ts` 当前导出：

- `profile`
- `profileStats`
- `timeline`
- `skills`
- `principles`

## 维护约定

关于页保持数据驱动。新增经历、技能或维护原则时，优先修改 `src/data/profile.ts`，不要直接在页面文件中堆内容。
