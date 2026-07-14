---
type: 面试题
category: Java 基础
source: 面试题/Integer和int的区别.md
tags:
  - java
  - 基础
status: 待背诵
review: [D1, D3, D7]
---

# Integer和int的区别

> [!summary] 速记
> Integer的初始值时null，int的初始值是0 Integer存储在堆内存，int类型是直接存储在栈空间 Integer是对象类型，它封装了很多的方法和属性，我们在使用的时候

## 面试回答

Integer的初始值时null，int的初始值是0

Integer存储在堆内存，int类型是直接存储在栈空间

Integer是对象类型，它封装了很多的方法和属性，我们在使用的时候更加灵活



设计封装类型的原因：Java本身是面向对象的语言，一切操作都是以对象作为基础

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- 暂无，后续复盘时补充

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
