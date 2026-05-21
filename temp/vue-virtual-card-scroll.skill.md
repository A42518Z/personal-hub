# Vue 卡片虚拟分页实验

## 页面入口
- `/lab/vue-virtual-card-scroll`
- 源文件：`src/pages/lab/vue-virtual-card-scroll.astro`
- 实验室入口数据：`src/data/hub.ts` 的 `labs` 数组

## 页面能力
- 模拟从独立 Vue demo 迁入的卡片虚拟分页实验。
- 支持大页数虚拟滚动，默认 1000 页，每页 6 张卡片。
- 仅渲染当前可视区域附近页，降低 DOM 数量。
- 支持拖动 range 分页、输入页码跳转、上一页/下一页、第一页/中间页/最后页快捷跳转。
- 支持修改总页数并点击“应用页数”，同步 range 最大值、跳转页最大值、最后一页快捷按钮和当前状态；总页数输入框按 Enter 也可应用。
- 支持在虚拟视窗原生纵向滚动条轨道上点击直接跳页：点击轨道空白区域时按点击位置比例计算目标页；点击/拖动原生滑块本身时保留浏览器默认行为。
- 支持停稳后加载当前页附近数据，并维护缓存窗口。
- 支持模拟请求、请求中骨架屏、缓存页和 pending 页状态展示。
- 支持滚轮按速度计算跳页。
- 支持跟随站点深色模式。

## 原生滚动条跳页说明
- 不再使用自定义可视滚动条 DOM。
- 通过 `pointerdown` 捕获虚拟视窗右侧原生滚动条区域。
- 通过 `offsetWidth - clientWidth` 判断原生纵向滚动条宽度。
- 点击轨道空白区域时阻止默认 page scroll 行为，并使用 `clientY / viewportHeight` 计算比例后调用 `scrollToPage`。
- 如果点击位置落在原生滑块 thumb 上，则不阻止默认行为，允许用户继续拖动原生滚动条。
- 注意：原生滚动条事件在不同浏览器/系统滚动条样式下存在差异，当前实现以 Chromium/Windows 常见行为为主。

## 深色模式与层级说明
- 页面使用局部 CSS 变量，并通过 `:global(.dark) .lab-virtual-card` 覆盖深色模式变量。
- 虚拟视窗层级拆分为：
  - `--viewport-bg`：虚拟视窗最底层背景。
  - `--page-bg`：每一页虚拟块背景。
  - `--surface-card`：卡片、指标面板等内容块背景。
- 深色模式下已提高视窗、页块、卡片、边框的对比度。

## Astro scoped CSS 注意事项
- 页面内的卡片、页块、骨架屏、chip 是通过 JS `innerHTML` 动态生成的。
- Astro 默认 scoped CSS 会给静态模板节点加作用域属性，但动态 `innerHTML` 节点不会自动带这些属性。
- 因此动态生成类必须用 `.lab-virtual-card :global(.xxx)` 形式声明，否则样式不会命中。

## 使用到的数据或接口
- 无后端接口。
- 页面内置 `mockFetchCards`，通过 `setTimeout` 模拟异步分页请求。
- 页面内置缓存 Map、pending Map、AbortController 请求中止逻辑。

## 迁移说明
- personal-hub 当前未启用 `@astrojs/vue`，因此本次迁移没有引入 Vue 运行时或 Astro Vue 集成。
- 核心交互逻辑已等价迁入 Astro 页面中的原生脚本，便于在现有 Astro 静态站点中直接构建和部署。

## 验证
- 已执行：`npm run build`
- 结果：构建成功，生成 `/lab/vue-virtual-card-scroll/index.html`。
- 备注：构建输出包含 Browserslist caniuse-lite 过期提示，不影响页面迁移、深色模式、应用页数或原生滚动条轨道点击跳页功能。
