# 后端背诵题目答案弹窗修改记录

## 修改目标

让 `/learn/backend-memorize` 页面中的 `[[题目]]` 可以点击，并从 `absidianValues/面试题` 整个题库目录中读取对应 Markdown 答案，以弹窗形式展示。

## 修改文件

- 新增 `src/utils/backendMemorizationAnswers.ts`
- 修改 `src/pages/learn/backend-memorize.astro`

## 数据来源与匹配规则

- 题目来源：`src/data/learn/backend-memorization/*.md` 中出现的 Obsidian WikiLink `[[题目]]`。
- 答案来源：递归扫描 `absidianValues/面试题` 下所有 `.md` 文件。
- 跳过 `.obsidian` 和 `13_七天背诵计划`，避免把计划文档自身当成答案。
- 优先使用文件名与题目名完全一致的答案文件；无完全一致时使用不区分大小写匹配。
- 同名候选文件优先选择 `01_`、`02_` 等编号分类目录中的文件，其次根目录文件，再其次其他子目录。
- 同一题目始终只选择一个答案文件，避免重复答案。

## 页面交互

- 页面加载后把正文中的 `[[题目]]` 转换为题目按钮。
- 有答案的题目使用蓝绿色可点击样式。
- 未找到答案的题目使用琥珀色禁用样式，并提示“暂未找到对应答案文档”。
- 点击题目后打开居中答案弹窗。
- 弹窗内容保留 Markdown 转换后的标题、段落、列表、引用、代码、表格等结构。
- 弹窗显示对应 Markdown 文件的相对来源路径。
- 支持点击遮罩、关闭按钮和 Esc 键关闭。
- 关闭后恢复到之前聚焦的题目按钮。
- 弹窗打开时锁定页面背景滚动。

## 安全与渲染

- 构建时只读取本地题库 Markdown 文件。
- Markdown 使用项目已安装的 `@astrojs/markdown-remark` 转换为 HTML。
- 内嵌 JSON 对 `<` 做 Unicode 转义，避免脚本标签截断。

## 验证

执行：`npm run build`

结果：

- `exitCode: 0`
- Astro 静态构建成功。
- `/learn/backend-memorize/index.html` 成功生成。
- 共生成 96 个页面。
- stderr 仅包含 npm 配置弃用警告，与本次功能无关。
