# Java 基础补齐与表达型练习

## 修改目标

- 对照 JavaGuide《Java 基础常见面试题总结(上)》补齐第一版遗漏的知识点。
- 将练习页从“直接看答案”的灌输式题卡，调整为“引导用户用自己的话表达理解”的复述训练。

## 修改文件

- 修改：`src/data/learn/java-basic.ts`
- 修改：`src/components/learn/PracticeCard.astro`
- 修改：`src/pages/learn/java/basic.astro`
- 修改：`src/pages/learn/java/basic/practice.astro`

## 关键改动摘要

### 知识点补齐

知识组从 5 组扩展为 7 组：

- 基础概念与常识
- JVM / JDK / JRE
- 基本语法
- 基本数据类型
- 包装类型与装箱拆箱
- 变量与常量
- 方法

补齐的重点包括：

- Java 语言特点
- Java SE / Java EE / Java ME
- Java 和 C++ 的区别
- Oracle JDK vs OpenJDK
- Java 关键字分类
- 移位运算使用场景和类型限制
- 基本类型默认值、字节数、取值范围
- long / float 字面量后缀注意事项
- BigDecimal 的 equals / compareTo 区别
- BigInteger 和 long 溢出场景
- 基本类型与包装类型的用途、存储、默认值、比较方式
- 包装类型缓存机制
- 成员变量与局部变量完整对比
- 为什么成员变量有默认值
- 静态变量作用
- 字符型常量和字符串常量区别
- 方法返回值与四种方法类型
- 静态方法为什么不能调用非静态成员
- 静态方法和实例方法区别
- 重载与重写规则
- 可变长参数规则

### 练习方式改造

题目从 8 道扩展为 15 道，类型改为：

- `concept-explain`
- `code-output`
- `compare-explain`
- `scenario-explain`

每道题现在包含：

- 题目说明
- 可选代码块
- 分步骤表达引导
- 用户自写答案 textarea
- 自检清单
- 参考表达
- 常见误区

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

- `/learn/java/basic/index.html`
- `/learn/java/basic/practice/index.html`

## 后续注意事项

- 当前 textarea 只用于页面内临时输入，刷新后不会保存。
- 后续可升级为 localStorage 保存答案、按清单统计掌握度、随机抽题和口述计时模式。
- 目前内容采用重新整理和表达训练方式，不直接搬运原文。
