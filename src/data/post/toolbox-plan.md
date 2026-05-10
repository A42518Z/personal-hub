---
title: 工具箱页面会放什么
publishDate: 2026-05-03
excerpt: 记录工具箱的第一批工具计划，以及它们应该如何拆分组件。
category: 工具箱
tags:
  - tools
  - productivity
  - frontend
author: Personal Hub
---

工具箱页面会放一些自己经常用的小工具。

第一批计划包括：

- JSON 格式化
- 时间戳转换
- Base64 编码解码
- 正则测试
- Markdown 预览

每个工具都应该是独立组件，而不是全部写在 `tools.astro` 一个文件里。

推荐结构：

```text
src/components/tools
├── JsonFormatter.tsx
├── TimestampConverter.tsx
├── Base64Converter.tsx
├── RegexTester.tsx
└── MarkdownPreview.tsx
```

页面只负责挂载工具入口和分组，具体逻辑放在组件内部。
