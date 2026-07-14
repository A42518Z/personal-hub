---
type: 面试题
category: 网络与 Web
source: 面试题/Cookie和Session的区别.md
tags:
  - 网络
  - web
  - cookie
  - session
status: 待背诵
review: [D1, D3, D7]
---

# Cookie和Session的区别

> [!summary] 速记
> Cookie可以存储在浏览器或者本地，Session只能存在服务器 session能够存储任意的java对象，cookie只能存储String类型的对象 session比cooki

## 面试回答

Cookie可以存储在浏览器或者本地，Session只能存在服务器

session能够存储任意的java对象，cookie只能存储String类型的对象

session比cookie更具有安全性

session占用服务器性能，session过多，增加服务器压力

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[HTTP和HTTPS的区别]]
- [[如果客户端禁止cookie，session还能使用吗]]
- [[三次握手的流程]]
- [[BIO,NIO,AIO的区别]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
