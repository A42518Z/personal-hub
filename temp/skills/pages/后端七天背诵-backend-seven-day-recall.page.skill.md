---
name: backend-seven-day-recall-page
description: personal-hub 学习训练中的后端七天背诵 Markdown 阅读与题目答案弹窗页面维护规则。
---

# 后端七天背诵页面 Skill

## 页面名称与入口

- 页面名称：后端七天背诵
- 学习训练入口：`/learn`
- 页面路由：`/learn/backend-memorize`

## 相关文件

- 页面：`src/pages/learn/backend-memorize.astro`
- 学习训练入口：`src/pages/learn.astro`
- 七天计划数据：`src/data/learn/backend-memorization/`
- 答案加载工具：`src/utils/backendMemorizationAnswers.ts`

## 七天计划数据来源

源数据目录：

`absidianValues/面试题/13_七天背诵计划`

当前页面完整接入该目录下 8 份 Markdown 文档：七天背诵总计划与 Day1-Day7。

## 答案数据来源

答案直接来自：

`absidianValues/面试题`

构建时递归扫描整个面试题目录下的 `.md` 文件，但跳过：

- `.obsidian`
- `13_七天背诵计划`

页面只渲染七天计划中实际出现的 `[[题目]]` 对应答案。

## 题目匹配规则

1. 从七天计划 Markdown 中提取所有 `[[题目]]`。
2. 对题目按首次出现顺序去重。
3. 优先按文件名完全一致匹配答案。
4. 完全一致失败后尝试不区分大小写匹配。
5. 同名候选文件优先选择 `01_`、`02_` 等编号分类目录中的文件。
6. 其次选择题库根目录文件。
7. 再其次选择其他子目录文件。
8. 每个题目只选择一个答案文件，避免重复答案。

## 页面能力与交互

- 左侧目录与源文档顺序一致。
- 点击目录锚点可跳转到对应文档。
- 正文滚动时通过 `IntersectionObserver` 高亮当前目录项。
- 移动端目录变为横向滚动，避免挤压正文。
- Markdown 原生渲染标题、列表、引用、代码和表格。
- 页面中的 `[[题目]]` 自动转换为题目按钮。
- 有答案的题目可点击并弹出 Markdown 答案弹窗。
- 未匹配答案的题目显示禁用状态，不会产生空弹窗。
- 弹窗支持遮罩关闭、关闭按钮、Esc 键关闭，并恢复焦点。
- 弹窗展示答案来源相对路径。
- 支持浅色与深色主题。
- 支持 `prefers-reduced-motion`。

## 七天计划文档去重规则

页面构建时调用每个 Markdown 模块的 `rawContent()`，统一 CRLF/LF、连续空白并 `trim()`，随后使用 `Set` 按完整规范化内容过滤重复文档。目录与正文共用过滤后的 `docs` 数组，因此不会出现目录存在但正文重复、或正文存在但目录重复的情况。

## 答案 Markdown 渲染

- 使用项目现有依赖 `@astrojs/markdown-remark`。
- 构建时把答案 Markdown 转成 HTML。
- 去掉 YAML frontmatter。
- 去掉答案正文开头与弹窗标题重复的一级标题。
- 内嵌答案 JSON 时转义 `<`，避免脚本标签被截断。

## 验证

命令：

`npm run build`

最近验证结果：

- `exitCode: 0`
- `/learn/backend-memorize/index.html` 成功生成。
- Astro 静态构建成功，共生成 96 个页面。

## 后续复用注意事项

- 新增背诵文档时，应同时新增 Markdown 文件并补充 `sourceDocs` 元数据项；目录和正文不要分别维护两套列表。
- 源七天计划目录内容变化后，需同步更新项目内 Markdown 快照。
- 答案题库本身无需复制到项目内；重新构建时会直接读取 `absidianValues/面试题`。
- 新增答案文件时，文件名应尽量与七天计划中的 `[[题目]]` 完全一致。
- 不要为同一题目同时维护多个不同答案文件；若不可避免，当前规则会优先选择编号分类目录中的文件。
