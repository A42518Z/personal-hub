# 工具箱 skill

## 页面入口

- 路由：`/tools`
- 页面文件：`src/pages/tools.astro`
- 工具组合组件：`src/components/tools/ToolPreviewGrid.astro`

## 当前真实工具

- `src/components/tools/JsonFormatter.astro`：JSON 格式化、压缩、校验、复制结果。
- `src/components/tools/Base64Converter.astro`：Unicode 文本 Base64 编码、解码、结果转输入。
- `src/components/tools/MarkdownPreview.astro`：轻量 Markdown 预览，支持标题、列表、引用、代码块、粗体、斜体和链接。
- `src/components/tools/TimestampConverter.astro`：当前时间、时间戳转时间、时间转时间戳。
- `src/components/tools/RegexTester.astro`：正则表达式匹配测试，显示匹配内容、索引和分组。

## 锚点

工具卡片链接到页面内锚点：

- `#json`
- `#base64`
- `#markdown`
- `#timestamp`
- `#regex`

这些 ID 必须和 `src/data/hub.ts` 中工具链接保持一致。

## 使用数据和组件

- 数据：`src/data/hub.ts` 中的 `tools`。
- 组件：`HubHero`、`GroupSection`、`ToolPreviewGrid`、`Reveal`。

## 维护约定

每个工具独立维护，不把工具逻辑直接写进 `tools.astro`。所有工具当前都在浏览器本地运行，不发送用户输入到服务器。后续新增工具时，新增独立组件并挂载到 `ToolPreviewGrid.astro`。
