---
type: 面试题
category: 并发编程
source: 面试题/ThreadLocal介绍.md
tags:
  - java
  - 并发
  - threadlocal
status: 待背诵
review: [D1, D3, D7]
---

# ThreadLocal介绍

> [!summary] 速记
> ThreadLocal是Java中所提供的线程本地存储机制，可以利用该机制将数据缓存在某个线程内部，该线程可以在任意时刻、任意方法中获取缓存的数据 ThreadLocal底层是通过

## 面试回答

ThreadLocal是Java中所提供的线程本地存储机制，可以利用该机制将数据缓存在某个线程内部，该线程可以在任意时刻、任意方法中获取缓存的数据

![image-20241103172415428](../notes/images/image-20241103172415428.png)

ThreadLocal底层是通过ThreadLocalMap来实现的，每个Thread对象都存在一个ThreadLocalMap，Map的key为ThreadLocal对象，Map的value为要缓存的值



内存泄漏问题及解决方式

当ThreadLocal对象使用完之后，应该要把设置的key，value，也就是Entry对象进行回收，但线程池中的线程不会回收，而线程对象是通过强引用指向ThreadLocalMap，ThreadLocalMap也是通过强引用指向Entry对象，线程不被回收，Entry对象也就不会被回收，从而出现内存泄漏，解决的办法是，在使用了ThreadLocal对象之后，手动调用ThreadLocal的remove方法，手动清除Entry对象



应用场景：

用户上下文管理：在处理用户请求时，每个线程拥有独立的用户上下文（比如用户ID、session信息），在并发环境中确保正确的用户数据

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[线程的6种状态]]
- [[线程的run()和start()有什么区别]]
- [[一个线程调用两次start方法会有问题吗]]
- [[进程和线程的区别]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
