---
type: 面试题
category: Spring 生态
source: 面试题/@Resource和@Autowired.md
tags:
  - spring
status: 待背诵
review: [D1, D3, D7]
---

# @Resource和@Autowired

> [!summary] 速记
> @Autowired是Spring里面提供的注解，它默认是根据类型来实现Bean的依赖注入，其里面有个required属性，当属性值为true时，表示强制要求bean实例的注入。

## 面试回答

@Autowired是Spring里面提供的注解，它默认是根据类型来实现Bean的依赖注入，其里面有个required属性，当属性值为true时，表示强制要求bean实例的注入。如果在SpringIOC容器里存在多个相同类型的Bean实例，@Autowired无法判断了，就可以使用@Primary或者@Qualifier注解来解决，@Primary表示主要的bean，当存在多个相同类型的bean，优先使用声明了@Primary注解的一个bean，而@Qualifier可以根据名字取找到要装配的目标bean



@Resource是JDK提供的一个注解，与@Autowired不同的是，@Resource支持name和type属性注入，如果使用name属性，会根据名字进行注入，如果使用type，就会根据类型来实现依赖注入，如果两个属性都没有声明。会现根据定义的名字进行匹配，若失败，则再根据类型匹配，如果两个都没匹配到，就报错

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- 暂无，后续复盘时补充

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
