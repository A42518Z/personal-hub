---
type: 面试题
category: Spring 生态
source: 面试题/Spring是如何整合MyBatis将Mapper接口注册为Bean的原理.md
tags:
  - spring
  - mybatis
status: 待背诵
review: [D1, D3, D7]
---

# Spring是如何整合MyBatis将Mapper接口注册为Bean的原理

> [!summary] 速记
> 1.首先MyBatis的Mapper核心接口是JDK动态代理 2.Spring会排除接口，无法注册到IOC容器中 3.MyBatis实现了BeanDefinitionRegistr

## 面试回答

1.首先MyBatis的Mapper核心接口是JDK动态代理

2.Spring会排除接口，无法注册到IOC容器中

3.MyBatis实现了BeanDefinitionRegistryPostProcessor可以动态注册BeanDefinition

4.需要自定义扫描器重写排除接口的方法

5.但是接口虽然注册成了BeanDefinition但是无法实例化Bean，因为接口无法实例化

6.需要将BeanDefinition的BeanClass替换成JDK动态代理的实例

7.MyBatis通过FactoryBean的工厂方法设计模式可以自由控制Bean的实例化过程，可以在getObject方法中创建JDK动态代理

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
