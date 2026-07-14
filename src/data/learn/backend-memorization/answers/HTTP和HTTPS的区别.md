---
type: 面试题
category: 网络与 Web
source: 面试题/HTTP和HTTPS的区别.md
tags:
  - 网络
  - web
  - https
status: 待背诵
review: [D1, D3, D7]
---

# HTTP和HTTPS的区别

> [!summary] 速记
> HTTPS协议需要到CA申请证书，一般免费证书较少，因而需要一定费用 HTTP是超文本传输协议，信息是明文传输，HTTPS则是具有安全性的SSL加密传输协议 HTTP和HTTPS使

## 面试回答

HTTPS协议需要到CA申请证书，一般免费证书较少，因而需要一定费用

HTTP是超文本传输协议，信息是明文传输，HTTPS则是具有安全性的SSL加密传输协议

HTTP和HTTPS使用的是完全不同的连接方式，用的端口也不一样，前者是0，后者是443

HTTP的连接很简单，是无状态的。HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比HTTP协议安全

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[Cookie和Session的区别]]
- [[如果客户端禁止cookie，session还能使用吗]]
- [[三次握手的流程]]
- [[BIO,NIO,AIO的区别]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
