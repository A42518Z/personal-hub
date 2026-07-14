---
type: 面试题
category: 并发编程
source: 面试题/线程创建：继承Thread类和实现Runnable接口.md
tags:
  - java
  - 并发
status: 待背诵
review: [D1, D3, D7]
---

# 线程创建：继承Thread类和实现Runnable接口

> [!summary] 速记
> 继承Thread类 子类继承Thread类具备多线程能力 启动线程：子类对象.start() 不建议使用：避免OOP单继承局限性 实现Runnable接口 实现接口Runnable

## 面试回答

继承Thread类

子类继承Thread类具备多线程能力

启动线程：子类对象.start()

不建议使用：避免OOP单继承局限性



实现Runnable接口

实现接口Runnable具有多线程能力

启动线程：传入目标对象+Thread对象.start()

推荐使用：避免单继承局限性，灵活方便，方便同一个对象被多个线程使用

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[ThreadLocal介绍]]
- [[线程的6种状态]]
- [[线程的run()和start()有什么区别]]
- [[一个线程调用两次start方法会有问题吗]]
- [[进程和线程的区别]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
