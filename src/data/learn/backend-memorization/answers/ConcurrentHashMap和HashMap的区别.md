---
type: 面试题
category: 集合框架
source: 面试题/ConcurrentHashMap和HashMap的区别.md
tags:
  - java
  - 集合
  - hashmap
  - concurrenthashmap
status: 待背诵
review: [D1, D3, D7]
---

# ConcurrentHashMap和HashMap的区别

> [!summary] 速记
> 线程安全性：ConcurrentHashMap是线程安全的，而HashMap是非线程安全的。

## 面试回答

线程安全性：ConcurrentHashMap是线程安全的，而HashMap是非线程安全的。

锁的粒度：ConcurrentHashMap使用分段锁(Segment)来实现并发控制，而HashMap没有锁机制。

扩容机制：ConcurrentHashMap允许并发扩容，而HashMap在扩容时需要暂停其他操作。

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[HashMap和HashSet有什么区别]]
- [[HashMap和HashTable的区别]]
- [[ConcurrentHashMap如何保证线程安全的]]
- [[LinkedHashMap]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
