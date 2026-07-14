---
type: 面试题
category: 并发编程
source: 面试题/谈谈你对AQS的理解.md
tags:
  - java
  - 并发
  - aqs
status: 待背诵
review: [D1, D3, D7]
---

# 谈谈你对AQS的理解

> [!summary] 速记
> AQS是多线程同步器，它是JUC包中多个组件的底层实现，比如ReentrantLock，CountDownLatch，Semaphore等等。

## 面试回答

AQS是多线程同步器，它是JUC包中多个组件的底层实现，比如ReentrantLock，CountDownLatch，Semaphore等等。从本质上说，AQS提供了两种锁的机制，分别是排他锁和共享锁。

所谓排他锁，就是存在多个线程去竞争同一共享资源的时候，同一个时刻，只允许一个线程去访问这样一个共享资源。比如lock中的ReentrantLock重入锁，它的一个实现就是AQS中的排它锁。

共享锁，在同一个时刻允许多个线程同时获得一个锁的资源，比如CountDownLatch和Semaphore都用到了AQS中的共享锁的功能

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[CAS操作]]
- [[CAS中的ABA问题如何解决]]
- [[Synchronized和ReentrantLock的区别]]
- [[synchronized和volatile的区别]]
- [[什么是可重入锁]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
