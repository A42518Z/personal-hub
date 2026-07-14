---
type: 面试题
category: 并发编程
source: 面试题/synchronized和volatile的区别.md
tags:
  - java
  - 并发
  - volatile
  - synchronized
status: 待背诵
review: [D1, D3, D7]
---

# synchronized和volatile的区别

> [!summary] 速记
> volatile是变量修饰符；synchronized是修饰类、方法、代码块 volatile仅能实现变量的修改可见性，不能保证原子性；synchronized能实现变量的修改可见

## 面试回答

volatile是变量修饰符；synchronized是修饰类、方法、代码块

volatile仅能实现变量的修改可见性，不能保证原子性；synchronized能实现变量的修改可见性和原子性

volatile不会造成线程的阻塞；synchronized可能会造成线程的阻塞

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[CAS操作]]
- [[CAS中的ABA问题如何解决]]
- [[谈谈你对AQS的理解]]
- [[Synchronized和ReentrantLock的区别]]
- [[什么是可重入锁]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
