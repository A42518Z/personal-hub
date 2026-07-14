---
type: 面试题
category: Spring 生态
source: 面试题/谈谈对SpringMVC的理解.md
tags:
  - spring
  - springmvc
status: 待背诵
review: [D1, D3, D7]
---

# 谈谈对SpringMVC的理解

> [!summary] 速记
> 1.把传统MVC框架里面的Controller控制器做了拆分，分成了前端控制器DispatcherServlet和后端控制器Controller 2.把Model模型拆分成业务层和

## 面试回答

1.把传统MVC框架里面的Controller控制器做了拆分，分成了前端控制器DispatcherServlet和后端控制器Controller

2.把Model模型拆分成业务层和数据访问层

3.在视图层，可以支持不同的视图，比如Freemark、velocity、JSP等等





SpringMVC流程：

浏览器请求首先会经过SpringMVC里面的核心控制器DispatcherServlet，它主要是把请求分发到对应的Controller里面，Controller处理完业务逻辑后，会返回一个ModeAndView，然后DispatcherServlet会去寻找一个或者多个ViewResolver的视图解析器，找到ModelAndView指定的视图，并把数据展示到客户端

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
