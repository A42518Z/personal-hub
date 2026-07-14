# 后端七天背诵页面修改记录

## 修改目标

在学习训练模块新增独立的后端七天背诵入口，完整接入 `absidianValues/面试题/13_七天背诵计划` 下的全部 8 份 Markdown 文档，并提供接近 Markdown 阅读器的目录跳转与正文排版体验，同时避免重复文档被重复展示。

## 修改文件

- 新增 `src/pages/learn/backend-memorize.astro`
- 修改 `src/pages/learn.astro`
- 新增 `src/data/learn/backend-memorization/overview.md`
- 新增 `src/data/learn/backend-memorization/day1.md`
- 新增 `src/data/learn/backend-memorization/day2.md`
- 新增 `src/data/learn/backend-memorization/day3.md`
- 新增 `src/data/learn/backend-memorization/day4.md`
- 新增 `src/data/learn/backend-memorization/day5.md`
- 新增 `src/data/learn/backend-memorization/day6.md`
- 新增 `src/data/learn/backend-memorization/day7.md`

## 关键改动

- 学习训练首页新增“后端七天背诵”在线入口，路由为 `/learn/backend-memorize`。
- 完整复制源目录中的七天总计划和 Day1-Day7 共 8 份 Markdown 文档。
- 页面采用左侧文档目录、右侧 Markdown 正文的阅读布局；移动端目录自动转为横向滚动。
- 点击目录可按文档锚点跳转，滚动正文时通过 `IntersectionObserver` 自动高亮当前文档。
- 构建阶段对 Markdown 原文做换行与空白规范化，并使用 `Set` 按完整内容过滤重复文档。
- 保留 Markdown 标题、列表、引用、代码和表格渲染，并补充暗色模式、键盘可访问性和 reduced-motion 处理。

## 验证

执行：`npm run build`

结果：

- `exitCode: 0`
- Astro 静态构建成功。
- `/learn/backend-memorize/index.html` 成功生成。
- 整体构建完成 96 个页面。
- stderr 仅包含 npm 配置弃用警告，与本次修改无关。

辅助时间戳命令 `node -e ...` 因参数截断返回 `exitCode: 1`，未修改文件，也不影响页面构建验证结果。

## 后续注意事项

- 当前页面数据是源目录 8 份 Markdown 文档的项目内快照；源目录内容变化时需同步更新对应 `src/data/learn/backend-memorization/*.md` 文件。
- Obsidian `[[WikiLink]]` 目前按原始 Markdown 文本展示，不自动跨目录解析为题目详情链接。
