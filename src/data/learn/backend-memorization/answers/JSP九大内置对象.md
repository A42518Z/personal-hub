---
type: 面试题
category: 网络与 Web
source: 面试题/JSP九大内置对象.md
tags:
  - 网络
  - web
status: 待背诵
review: [D1, D3, D7]
---

# JSP九大内置对象

> [!summary] 速记
> request：负责得到客户端请求的信息 response：负责向客户端发出响应 session：负责保存同一客户端一次会话过程中的一些信息 out：负责管理对客户端的输出 app

## 面试回答

request：负责得到客户端请求的信息

response：负责向客户端发出响应

session：负责保存同一客户端一次会话过程中的一些信息

out：负责管理对客户端的输出

application：表示整个应用环境的信息

config：表示ServletConfig

exception：表示页面中发生的异常，可以通过它获得页面异常信息

pagecontext：表示这个JSP页面上下文

page：表示当前JSP页面本身

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
