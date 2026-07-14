# Java 基础由浅入深路径

## 修改目标

- 将 Java 基础学习从零散知识点清单调整为由浅入深的学习路径。
- Java 入口页、知识页、练习页统一使用阶段式结构。
- 练习页按阶段分组，避免题目混杂造成跳跃式学习。

## 修改/新增文件

- 新增：`src/data/learn/java-basic-path.ts`
- 修改：`src/pages/learn/java.astro`
- 修改：`src/pages/learn/java/basic.astro`
- 修改：`src/pages/learn/java/basic/practice.astro`

## 关键改动摘要

### 新增 7 阶段学习路径

新增 `javaBasicLearningStages`，定义每个阶段的：

- 阶段顺序
- 标题与副标题
- 对应知识卡 `lessonId`
- 对应练习章节 `chapter`
- 深度标签：入门 / 理解 / 应用 / 易错 / 表达
- 本阶段目标
- 通过标准
- 下一步提示

当前阶段顺序：

1. 先认识 Java 是什么
2. 再理解程序怎么跑起来
3. 学习最小语法动作
4. 理解数据怎么表示
5. 进入包装类型和常见坑
6. 理解数据放在哪里、活多久
7. 最后用方法组织行为并训练表达

### Java 入口页调整

`/learn/java` 从普通卡片网格调整为：

- 顶部 Learning Path 路线图
- 按阶段展示对应知识卡
- 强调“从是什么到怎么表达”

### Java 基础知识页调整

`/learn/java/basic` 从平铺知识组调整为：

- 学习方法说明
- 7 阶段路线总览
- 每阶段独立展示目标、通过标准、知识点和下一步提示

### Java 基础练习页调整

`/learn/java/basic/practice` 从题目列表调整为：

- 按学习阶段分组
- 每阶段先展示目标和通过标准
- 再展示当前阶段对应练习题
- 末尾增加 3 分钟综合复述提示

## 验证结果

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

构建日志确认以下页面正常生成：

- `/learn/java/index.html`
- `/learn/java/basic/index.html`
- `/learn/java/basic/practice/index.html`

## 后续注意事项

- 当前阶段式学习路径是静态引导，尚未强制锁定下一阶段。
- 后续可以加入 localStorage，记录每阶段自我表达答案和完成状态。
- 可进一步加入“完成当前阶段后解锁下一阶段”的闯关逻辑。
