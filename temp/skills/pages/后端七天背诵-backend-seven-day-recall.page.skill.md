---
name: backend-seven-day-recall-page
description: personal-hub 学习训练中的后端七天背诵 Markdown 阅读、题目答案弹窗与答案本地化维护规则。
---

# 后端七天背诵页面 Skill

## 页面入口

- 学习训练入口：`/learn`
- 页面路由：`/learn/backend-memorize`

## 相关文件

- 页面：`src/pages/learn/backend-memorize.astro`
- 学习训练入口：`src/pages/learn.astro`
- 七天计划：`src/data/learn/backend-memorization/overview.md`、`day1.md` 至 `day7.md`
- 本地答案目录：`src/data/learn/backend-memorization/answers/`
- 答案索引：`src/data/learn/backend-memorization/answers/manifest.json`
- 答案加载工具：`src/utils/backendMemorizationAnswers.ts`
- 同步脚本：`scripts/sync-backend-memorization-answers.mjs`

## 页面数据规则

页面构建只读取 `personal-hub` 项目内部文件，不依赖外部 `absidianValues` 路径。

七天计划源自：

`absidianValues/面试题/13_七天背诵计划`

答案最初源自：

`absidianValues/面试题`

但用于打包和部署的实际答案必须保存在：

`src/data/learn/backend-memorization/answers/`

## 答案同步

执行：

`npm run sync:backend-answers`

同步脚本会：

1. 只读取 `day1.md` 至 `day7.md` 中的 `[[题目]]`。
2. 对题目按首次出现顺序去重。
3. 递归扫描外部题库 `.md` 文件。
4. 跳过 `.obsidian` 与 `13_七天背诵计划`。
5. 优先按文件名完全一致匹配，失败后不区分大小写匹配。
6. 同名文件优先编号分类目录，其次根目录，再其次其他目录。
7. 复制匹配答案到项目内 `answers/`。
8. 生成 `manifest.json`。
9. 不删除、不移动原始题库文件。

## 当前同步状态

最近一次同步：

- 唯一题目：87
- 已有答案：87
- 缺失答案：0

## 页面交互

- 左侧目录按文档跳转。
- 正文滚动时自动高亮当前目录项。
- 总计划中的 Day1-Day7 WikiLink 不参与题目答案弹窗转换。
- Day1-Day7 中的 `[[题目]]` 自动变成题目按钮。
- 点击题目弹出 Markdown 答案。
- 弹窗显示答案原始来源相对路径。
- 支持遮罩关闭、关闭按钮、Esc 键关闭和焦点恢复。
- 支持浅色、深色与 reduced-motion。

## 特殊题目名

不要把题目名中的 `#` 一律当作 Obsidian heading anchor。当前题库存在：

`Mybatis中#{}和${}的区别是什么`

该 `#` 属于题目正文，必须完整保留。

## 验证

同步：

`npm run sync:backend-answers`

最近结果：87 个题目、87 个答案、0 缺失、`exitCode: 0`。

构建：

`npm run build`

最近结果：`exitCode: 0`，`/learn/backend-memorize/index.html` 成功生成，共 96 个页面。

## 后续维护注意事项

- 外部题库有更新时，重新执行 `npm run sync:backend-answers`。
- 打包 `personal-hub` 时必须包含 `src/data/learn/backend-memorization/answers/`。
- 页面构建不能恢复为直接读取 `../absidianValues/面试题`，否则独立打包会失效。
- 一个题目只选择一个答案文件，避免弹窗内容重复。
