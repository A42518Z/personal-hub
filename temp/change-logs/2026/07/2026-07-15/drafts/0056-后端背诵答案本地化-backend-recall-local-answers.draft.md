# 后端背诵答案本地化修改记录

## 修改目标

将七天背诵页面实际使用的答案 Markdown 文件放入 `personal-hub` 项目内部，确保单独打包、构建或部署 `personal-hub` 时不依赖项目外部的 `absidianValues` 路径。

## 修改范围

- 新增 `scripts/sync-backend-memorization-answers.mjs`
- 修改 `package.json`
- 修改 `src/utils/backendMemorizationAnswers.ts`
- 修改 `src/pages/learn/backend-memorize.astro`
- 新增 `src/data/learn/backend-memorization/answers/`
- 新增 87 个七天背诵实际使用的答案 Markdown 文件
- 新增 `answers/manifest.json`

## 同步方式

执行：

`npm run sync:backend-answers`

同步脚本会：

1. 只读取 `day1.md` 至 `day7.md` 中实际出现的 `[[题目]]`。
2. 递归扫描外部 `absidianValues/面试题` 目录。
3. 跳过 `.obsidian` 与 `13_七天背诵计划`。
4. 按题目文件名匹配答案，同名文件按编号分类目录优先。
5. 将选中的答案复制到项目内 `src/data/learn/backend-memorization/answers/`。
6. 生成 `manifest.json` 供页面构建时读取。
7. 不删除、不移动原始题库文件。

## 修正项

- 总计划中的 `[[Day1...]]` 至 `[[Day7...]]` 不再被误认为面试题。
- 题目 `Mybatis中#{}和${}的区别是什么` 保留题目名中的 `#`，不再被截断。
- 页面仅从项目内答案目录和 manifest 加载答案，构建阶段不再读取外部题库目录。

## 验证结果

执行 `npm run sync:backend-answers`：

- Question titles: 87
- Answers available: 87
- Missing answers: 0
- exitCode: 0

执行 `npm run build`：

- exitCode: 0
- `/learn/backend-memorize/index.html` 成功生成
- 共构建 96 个页面

## 备注

npm stderr 中仅有现有 npm 配置弃用警告，与本次修改无关。
