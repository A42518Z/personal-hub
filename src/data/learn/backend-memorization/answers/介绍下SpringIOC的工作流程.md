---
type: 面试题
category: Spring 生态
source: 面试题/介绍下SpringIOC的工作流程.md
tags:
  - spring
status: 待背诵
review: [D1, D3, D7]
---

# 介绍下SpringIOC的工作流程

> [!summary] 速记
> IOC全称Inversion Of Control ,也就是控制反转，核心思想是把对象的管理权限，交给容器，应用程序如果需要某个对象的实例，那么直接从IOC容器中获取就可以了。

## 面试回答

IOC全称Inversion Of Control ,也就是控制反转，核心思想是把对象的管理权限，交给容器，应用程序如果需要某个对象的实例，那么直接从IOC容器中获取就可以了。

设计好处：降低了对象与对象之间的耦合性，使得程序更加的灵活

工作流程：

IOC容器的初始化阶段，根据程序里面定义的XML、注解等方式通过解析和加载后生成BeanDefinition，然后把BeanDefinition注册到IOC容器里面，通过注解或者XML声明的Bean，都会解析得到一个BeanDefinition实体，最后把BeanDefinition存到一个map里面，从而完成对IOC容器的初始化。IOC容器对这些注册的bean的定义信息，进行处理和维护。



通过反射去对没有设置lazy-init的单例bean，进行初始化，然后完成Bean的依赖注入。通常我们会通过@Autowired注解或者BeanFactory.getBean()从IOC容器中去获取一个指定bean的实例

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[Spring中Bean的生命周期]]
- [[spring循环依赖]]
- [[Spring解决循环依赖问题]]
- [[为什么有些公司禁止使用@Transactional声明式事务]]
- [[谈谈对SpringMVC的理解]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
