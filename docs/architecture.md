# personal-hub 架构约定

## 文件拆分原则

- `src/pages` 只负责路由和页面编排。
- `src/components` 负责 UI 展示和交互组件。
- `src/data` 负责静态数据。
- `src/config` 负责站点配置。
- `src/lib` 或 `src/utils` 负责通用工具函数。
- `src/content` 负责博客和 MDX 内容。
- `skills` 负责记录页面能力、入口和数据来源。

## 单文件行数约定

- 页面文件建议控制在 300 行以内。
- 普通组件文件建议控制在 300 行以内。
- 数据文件建议控制在 500 行以内。
- 单文件原则上不超过 1000 行。
- 当文件接近 500 行时，优先拆分组件、数据或工具函数。

## 页面扩展规则

每新增一个页面，应同步创建或更新：

1. `src/pages/xxx.astro`
2. `src/components/xxx` 或复用 `src/components/hub`
3. `src/data/xxx.ts` 或复用 `src/data/hub.ts`
4. `skills/xxx.md`

## 当前第一版页面

- `/`：个人集首页。
- `/bookmarks`：导航页。
- `/projects`：项目页。
- `/tools`：工具箱。
- `/lab`：前端实验室。
- `/status`：状态页。
