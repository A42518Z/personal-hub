---
type: 面试题
category: Spring 生态
source: 面试题/spring循环依赖.md
tags:
  - spring
status: 待背诵
review: [D1, D3, D7]
---

# spring循环依赖

> [!summary] 速记
> 互相循环依赖 A Bean创建的时候依赖了B属性 触发B 的Bean创建 B依赖了A属性 需要A的Bean（但是A的Bean还在创建过程中） 导致A的Bean没创建出来，B的Bea

## 面试回答

互相循环依赖

A Bean创建的时候依赖了B属性 -> 触发B 的Bean创建   -> B依赖了A属性 -> 需要A的Bean（但是A的Bean还在创建过程中）

导致A的Bean没创建出来，B的Bean也没创建出来



自己依赖自己

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[介绍下SpringIOC的工作流程]]
- [[Spring中Bean的生命周期]]
- [[Spring解决循环依赖问题]]
- [[为什么有些公司禁止使用@Transactional声明式事务]]
- [[谈谈对SpringMVC的理解]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
