---
type: 面试题
category: Spring 生态
source: 面试题/SpringBoot和传统Spring有什么区别.md
tags:
  - spring
  - springboot
status: 待背诵
review: [D1, D3, D7]
---

# SpringBoot和传统Spring有什么区别

> [!summary] 速记
> SpringBoot采用了约定优于配置的理念，大大简化了Spring应用的初期搭建以及后期的维护工作，它提供了大量的自动配置，开发者不需要进行繁琐的XML配置，就可以专注于核心业务

## 面试回答

SpringBoot采用了约定优于配置的理念，大大简化了Spring应用的初期搭建以及后期的维护工作，它提供了大量的自动配置，开发者不需要进行繁琐的XML配置，就可以专注于核心业务的开发

其次，SpringBoot内置了Tomcat等应用服务器，让项目的部署变得更加方便

SpringBoot还提供了许多Starters组件，方便集成各种常用的框架和中间件，比如JPA，redis，MQ等等

相比之下，传统的Spring配置更加灵活，可以适应各种复杂项目的需求，但是相应的配置也更加复杂。

对于我个人而言，我更加倾向于使用SpringBoot，它能让我更加专注业务代码的编写，而不需要花费大量时间在配置和环境搭建上

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[介绍下SpringIOC的工作流程]]
- [[Spring中Bean的生命周期]]
- [[spring循环依赖]]
- [[Spring解决循环依赖问题]]
- [[为什么有些公司禁止使用@Transactional声明式事务]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
