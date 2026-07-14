---
type: 面试题
category: 并发编程
source: 面试题/execute和submit的区别.md
tags:
  - java
  - 并发
status: 待背诵
review: [D1, D3, D7]
---

# execute和submit的区别

> [!summary] 速记
> execute和submit的区别 提交任务的类型 execute和submit都属于线程池的方法，execute只能提交Runnable类型的任务 submit既能提交Runna

## 面试回答

execute和submit的区别

提交任务的类型

execute和submit都属于线程池的方法，execute只能提交Runnable类型的任务

submit既能提交Runnable类型任务也能提交Callable类型任务。



对异常的处理：

execute会直接抛出任务执行时的异常，可以用try、catch来捕获，和普通线程的处理方式完全一致。

submit会吃掉异常，可通过Future的get方法将任务执行时的异常重新抛出



execute()没有返回值，submit()有返回值

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[线程池的核心参数]]
- [[线程池底层的工作原理]]
- [[线程池的拒绝策略]]
- [[线程池有哪几种状态]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
