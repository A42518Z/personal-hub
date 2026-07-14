---
type: 面试题
category: Java 基础
source: 面试题/为什么重写equals()就一定要重写hashCode()方法.md
tags:
  - java
  - 基础
status: 待背诵
review: [D1, D3, D7]
---

# 为什么重写equals()就一定要重写hashCode()方法

> [!summary] 速记
> 如果只重写equals方法，不重写hashCode方法，就有可能导致a.equals(b)这个表达式成立，但是hashCode却不同。

## 面试回答

如果只重写equals方法，不重写hashCode方法，就有可能导致a.equals(b)这个表达式成立，但是hashCode却不同。那么这个只重写了equals方法的对象，在使用散列集合（hashmap，hashtable）进行存储的时候就会出现问题，因为散列集合使用hashCode来计算key的存储位置，如果存储两个完全相同的对象，但是有不同的hashcode，就会导致这两个对象存储在hash表的不同位置。当我们想要根据这个对象去获取数据的时候，就会出现一个悖论，两个完全相同的对象，会存储在hash表的两个位置，破坏约定俗成的规则，使得程序运行过程中会出现一些不可预料的问题。

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
