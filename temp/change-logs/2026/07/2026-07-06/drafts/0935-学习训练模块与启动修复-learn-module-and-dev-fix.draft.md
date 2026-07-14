# 学习训练模块与启动修复

## 修改目标

- 修复 `pnpm run dev` 报错 `Cannot find module ... node_modules/astro/astro.js` 的依赖问题。
- 按 `/learn` 方案新增学习训练入口。
- 为 Java 基础内容新增知识卡页面和配套练习页面。

## 修改/新增文件

- 新增：`src/data/learn/java-basic.ts`
- 新增：`src/components/learn/LessonCard.astro`
- 新增：`src/components/learn/PracticeCard.astro`
- 新增：`src/pages/learn.astro`
- 新增：`src/pages/learn/java.astro`
- 新增：`src/pages/learn/java/basic.astro`
- 新增：`src/pages/learn/java/basic/practice.astro`
- 修改：`src/navigation.ts`
- 修改：`src/data/hub.ts`
- 依赖：执行 `CI=true pnpm install` 重建 `node_modules`

## 关键改动摘要

- 顶部导航“更多”中新增“学习训练”入口，指向 `/learn`。
- 页脚“个人集”分组中新增“学习训练”。
- 首页快捷入口 `quickLinks` 新增“学习训练”卡片。
- 新增 `/learn` 学习训练总入口。
- 新增 `/learn/java` Java 学习训练入口。
- 新增 `/learn/java/basic` Java 基础知识卡页面。
- 新增 `/learn/java/basic/practice` Java 基础练习页。
- Java 基础练习页第一版使用静态折叠答案，降低状态管理复杂度，后续可升级为计分、错题本和随机刷题。

## 启动报错处理

用户提供的错误：

```text
Error: Cannot find module 'G:\mcp_object-master\personal-hub\node_modules\astro\astro.js'
```

处理过程：

1. 首次执行 `pnpm install` 失败，原因是无 TTY 环境下 pnpm 拒绝移除并重建 `node_modules`。
2. 使用 `CI=true pnpm install` 成功重建依赖。
3. 执行 `pnpm exec astro --version` 成功输出 Astro 版本，确认 Astro 包恢复。
4. 执行 `pnpm run dev -- --host 127.0.0.1`，Astro 开发服务器已启动到可访问状态；由于 4321 已被占用，自动切换到 4322。该验证命令随后被工具超时终止。

## 验证结果

执行：

```bash
pnpm exec astro --version
```

结果：

```text
astro v5.18.1
exitCode: 0
```

执行：

```bash
pnpm run build
```

结果：

```text
94 page(s) built
Complete!
exitCode: 0
```

构建日志确认新增页面已生成：

- `/learn/index.html`
- `/learn/java/index.html`
- `/learn/java/basic/index.html`
- `/learn/java/basic/practice/index.html`

执行：

```bash
pnpm run dev -- --host 127.0.0.1
```

结果：

```text
astro v5.18.1 ready
Local http://localhost:4322/
Port 4321 is in use, trying another one...
```

说明：开发服务器已启动，原先 `node_modules/astro/astro.js` 缺失错误已消失。该命令是长驻进程，验证后由工具超时终止。

## 后续注意事项

- 当前练习页是静态折叠版，适合先上线验证内容结构。
- 后续可以继续升级为本地计分、错题本、随机刷题和面试口述计时模式。
- pnpm 安装时提示部分 build scripts 被忽略，但本次 `pnpm run build` 已通过，暂未影响构建。
- 本地 4321 端口当前被占用，手动执行 `pnpm run dev` 时可能会自动切到 4322，或先释放 4321。
