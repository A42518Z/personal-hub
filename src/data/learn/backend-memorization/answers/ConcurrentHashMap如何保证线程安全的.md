---
type: 面试题
category: 集合框架
source: 面试题/ConcurrentHashMap如何保证线程安全的.md
tags:
  - java
  - 集合
  - hashmap
  - concurrenthashmap
status: 待背诵
review: [D1, D3, D7]
---

# ConcurrentHashMap如何保证线程安全的

> [!summary] 速记
> 1.高并发下的插入和扩容 它使用了CAS操作来确保在线程冲突或者扩容的时候，其他线程可以安全的去插入数据 2.数据读取的安全性 大部分的读操作都是不需要加锁的，因为使用了volat

## 面试回答

1.高并发下的插入和扩容

它使用了CAS操作来确保在线程冲突或者扩容的时候，其他线程可以安全的去插入数据

2.数据读取的安全性

大部分的读操作都是不需要加锁的，因为使用了volatile来保证内存的可见性和有序性

3.数据写入的安全性

它使用了synchronized同步锁来锁定当前操作的节点，去确保写入的时候的线程安全性

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[HashMap和HashSet有什么区别]]
- [[HashMap和HashTable的区别]]
- [[ConcurrentHashMap和HashMap的区别]]
- [[LinkedHashMap]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
