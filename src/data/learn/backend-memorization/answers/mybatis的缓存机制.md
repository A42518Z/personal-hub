---
type: 面试题
category: MyBatis
source: 面试题/mybatis的缓存机制.md
tags:
  - mybatis
status: 待背诵
review: [D1, D3, D7]
---

# mybatis的缓存机制

> [!summary] 速记
> mybatis缓存分为一级缓存和二级缓存 一级缓存是Sqlsession级别的缓存，叫本地缓存。

## 面试回答

mybatis缓存分为一级缓存和二级缓存

一级缓存是Sqlsession级别的缓存，叫本地缓存。每个用户在执行查询的时候，都需要Sqlsession来执行，为了避免每一次都去查询数据库，mybatis把查询出来的数据，都缓存到Sqlsession的本地缓存里。后续的SQL如果在命中缓存的情况下，就可以直接去本地缓存读取这样一个数据。作用域是Sqlsession。

如果想要去实现跨Sqlsession的缓存，一级缓存是无法做到的

二级缓存中，作用域是mapper，多个Sqlsession是共享的，只要有一个Sqlsession拿到了数据，就会放入到二级缓存里面，其他的Sqlsession就可以直接从二级缓存加载数据



一级缓存实现原理

在Sqlsession中会有一个Executor,Executor里面会有一个LocalCache对象,用户发起请求时，mybatis会先去从LoaclCache中进行查找，如果命中了就直接把这个数据返回，如果没有命中，再去数据库里查询出来，然后写入到LocalCache里面，在多个Sqlsession或者分布式情况下，可能会出现脏读的问题。

一级缓存Sqlsession执行完增删改操作提交后就会清空缓存区域



二级缓存实现原理是在原来的Executor上加了一个CachingExecutor，开启二级缓存后，会被多个Sqlsession共享，查询流程是先查二级缓存，再查一级缓存，然后再去查数据库。二级缓存的缓存粒度能够控制到namespace，同样是Sqlsession执行完增删改操作提交后就会清空缓存区域

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[Mybatis中#{}和${}的区别是什么]]
- [[Mybatis是如何进行分页的]]
- [[Spring是如何整合MyBatis将Mapper接口注册为Bean的原理]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
