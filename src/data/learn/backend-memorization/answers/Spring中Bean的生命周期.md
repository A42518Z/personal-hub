---
type: 面试题
category: Spring 生态
source: 面试题/Spring中Bean的生命周期.md
tags:
  - spring
status: 待背诵
review: [D1, D3, D7]
---

# Spring中Bean的生命周期

> [!summary] 速记
> Bean的生命周期 默认情况下,IOC容器中bean的生命周期分为五个阶段： 调用构造器或者通过工厂的方式创建Bean对象 给bean对象的属性注入值 调用初始化方法，进行初始化，

## 面试回答

Bean的生命周期

默认情况下,IOC容器中bean的生命周期分为五个阶段：

调用构造器或者通过工厂的方式创建Bean对象

给bean对象的属性注入值

调用初始化方法，进行初始化，初始化方法是通过init-method来指定的

使用Bean

IOC容器关闭时，销毁Bean对象





当加入了Bean的后置处理器后,IOC容器中的bean的生命周期分为七个阶段：

调用构造器或者通过工厂的方式创建Bean对象

给bean对象的属性注入值

执行Bean后置处理器的before方法

初始化Bean

执行Bean后置处理器的after方法

使用Bean

IOC容器关闭时，销毁Bean对象



注入方式：

通过setter方法注入

通过构造方法注入



Bean的作用域：

Singleton  单例的

Prototype 原型的

Request 

Session

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[介绍下SpringIOC的工作流程]]
- [[spring循环依赖]]
- [[Spring解决循环依赖问题]]
- [[为什么有些公司禁止使用@Transactional声明式事务]]
- [[谈谈对SpringMVC的理解]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
