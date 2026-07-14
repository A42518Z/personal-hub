---
type: 面试题
category: MyBatis
source: 面试题/Mybatis是如何进行分页的.md
tags:
  - mybatis
status: 待背诵
review: [D1, D3, D7]
---

# Mybatis是如何进行分页的

> [!summary] 速记
> 1.直接在select 语句上增加分页关键字，然后再应用程序里面传递当前页，以及每页展示条数即可 2.使用Mybatis提供的RowBounds对象，实现内存级别分页 3.基于In

## 面试回答

1.直接在select 语句上增加分页关键字，然后再应用程序里面传递当前页，以及每页展示条数即可

2.使用Mybatis提供的RowBounds对象，实现内存级别分页

3.基于Interceptor拦截器，在select语句执行之前，动态拼接分页关键字（PageHelper）

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[Mybatis中#{}和${}的区别是什么]]
- [[mybatis的缓存机制]]
- [[Spring是如何整合MyBatis将Mapper接口注册为Bean的原理]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
