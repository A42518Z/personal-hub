---
type: 面试题
category: 集合框架
source: 面试题/HashMap和HashTable的区别.md
tags:
  - java
  - 集合
  - hashmap
status: 待背诵
review: [D1, D3, D7]
---

# HashMap和HashTable的区别

> [!summary] 速记
> 从线程安全来看，HashMap不是线程安全的，在多线程情况下可能遇到并发问题，HashTable是线程安全的，因为所有数据访问的方法都加了一个Synchronized同步锁， 结构

## 面试回答

从线程安全来看，HashMap不是线程安全的，在多线程情况下可能遇到并发问题，HashTable是线程安全的，因为所有数据访问的方法都加了一个Synchronized同步锁，

结构上HashTable底层是数组加链表，HashMap在jdk1.8以前也是底层也是数组加链表，在jdk1.8后加入了红黑树，解决链表过长导致的时间复杂度过长的问题。

hashmap的初始容量为16，扩容为2倍，hashtable的初始容量是11，扩容为2n+1



存储支持上，hashmap可以允许存入null，null会被转换为0进行存储；hashtable由于是线程安全的，不能存入null，有歧义。

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[HashMap和HashSet有什么区别]]
- [[ConcurrentHashMap和HashMap的区别]]
- [[ConcurrentHashMap如何保证线程安全的]]
- [[LinkedHashMap]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
