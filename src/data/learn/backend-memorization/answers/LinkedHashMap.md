---
type: 面试题
category: 集合框架
source: 面试题/LinkedHashMap.md
tags:
  - java
  - 集合
  - hashmap
status: 待背诵
review: [D1, D3, D7]
---

# LinkedHashMap

> [!summary] 速记
> LinkedHashMap是Java中HashMap的一个子类，它保留了键值对的插入顺序。

## 面试回答

LinkedHashMap是Java中HashMap的一个子类，它保留了键值对的插入顺序。与HashMap类似，LinkedHashMap也是基于哈希表实现的，具有快速的查找、插入和删除性能，但它通过一个双向链表来维护元素的顺序。

实现LRU算法，每次被访问的元素，都会移动到双向链表的表尾

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[HashMap和HashSet有什么区别]]
- [[HashMap和HashTable的区别]]
- [[ConcurrentHashMap和HashMap的区别]]
- [[ConcurrentHashMap如何保证线程安全的]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
