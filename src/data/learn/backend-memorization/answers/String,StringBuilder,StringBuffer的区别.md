---
type: 面试题
category: Java 基础
source: 面试题/String,StringBuilder,StringBuffer的区别.md
tags:
  - java
  - 基础
status: 待背诵
review: [D1, D3, D7]
---

# String,StringBuilder,StringBuffer的区别

> [!summary] 速记
> 可变性 String内部是final修饰的，它是一个不可变的类，所以每次修改String的值的时候，都会产生一个新的对象 StringBuiler和StringBuffer是一个可

## 面试回答

可变性

String内部是final修饰的，它是一个不可变的类，所以每次修改String的值的时候，都会产生一个新的对象

StringBuiler和StringBuffer是一个可变类，字符串的变更不会产生新的对象



线程安全性

String是一个不可变的类，所以它是线程安全的，而StringBuffer也是线程安全的，它的每个操作方法都用了synchronized关键字修饰，StringBuilder不是线程安全的



性能方面

String的性能是最低的，因为不可变，因为在做字符串修改或者拼接的时候，需要去重新创建对象。

StringBuffer比String的性能高一点，它的可变性意味着字符串能够直接被修改

StringBuilder性能最高，因为StringBuffer加了同步锁，加了锁就意味着对性能会产生影响

存储位置

String存储在常量池里面，而StringBuilder和StringBuffer存储在堆内存空间

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
