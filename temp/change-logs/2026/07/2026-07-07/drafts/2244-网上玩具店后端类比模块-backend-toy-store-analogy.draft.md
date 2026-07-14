# 网上玩具店后端类比模块

## 修改目标

- 将用户提供的“一家超级大的网上玩具店”类比融入学习模块。
- 用类比帮助新手理解计算机网络、Java、JDK/JRE/JVM、Java Web、Spring 和经典后端分层之间的关系。
- 为每个类比阶段配套卡通风格图片。
- 避免纯答案灌输，改为“看图 → 类比映射 → 自己复述”的学习方式。

## 修改/新增文件

### 新增数据

- `src/data/learn/backend-toy-store.ts`

### 新增组件

- `src/components/learn/ToyStoreStageCard.astro`

### 新增页面

- `src/pages/learn/backend.astro`

### 修改页面

- `src/pages/learn.astro`
- `src/pages/learn/java.astro`

### 新增图片资源

- `public/learn/toy-store/00-network.svg`
- `public/learn/toy-store/01-java-language.svg`
- `public/learn/toy-store/02-jdk-jvm.svg`
- `public/learn/toy-store/03-java-web.svg`
- `public/learn/toy-store/04-spring.svg`
- `public/learn/toy-store/05-layers.svg`

## 关键改动摘要

### 新增 `/learn/backend`

新增“网上玩具店后端路线”页面，将用户类比整理为 6 个阶段：

1. 计算机与网络基础：先有地、有路、有门牌号
2. Java 语言基础：员工要会一种工作语言
3. JDK / JRE / JVM：给 Java 配一套翻译和运行平台
4. Java Web 基础：开始接待网上来的客人
5. Spring 体系：让大管家管理所有员工
6. 经典后端分层：让店内部按岗位分工

### 每个阶段的统一结构

每个阶段包含：

- 阶段标题
- 对应技术名
- 卡通 SVG 类比图
- 一句话理解
- 类比故事
- 类比映射表
- 关系一句话
- 新手先记住
- 讲给自己听
- 自己复述 textarea
- 下一站提示

### 学习首页接入

`/learn` 中新增并优先展示：

- 网上玩具店后端路线

首页文案改为强调：

- 先用类比看懂关系
- 再进入知识卡与表达练习

### Java 页接入

`/learn/java` 顶部新增提示：

- Java 基础只是后端玩具店里的“员工工作语言”
- 新手建议先看 `/learn/backend` 总图，再进入 Java 细节

## 验证结果

执行：

```bash
pnpm run build
```

结果：

```text
95 page(s) built
Complete!
exitCode: 0
```

构建日志确认新增页面正常生成：

- `/learn/backend/index.html`
- `/learn/index.html`
- `/learn/java/index.html`

## 后续注意事项

- 当前图片为本地 SVG 卡通信息图，不依赖外链或第三方图床。
- 当前 textarea 仅用于页面临时输入，刷新后不会保存。
- 后续可以加入 localStorage 保存每个阶段的复述答案。
- 后续可以将 Java 基础练习中的部分题目关联到玩具店类比阶段，形成“先看类比，再做细节题”的闭环。
