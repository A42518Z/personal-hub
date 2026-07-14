---
type: 面试题
category: Java 基础
source: 面试题/finally块一定会被执行吗.md
tags:
  - java
  - 基础
status: 待背诵
review: [D1, D3, D7]
---

# finally块一定会被执行吗

> [!summary] 速记
> finally块一般配合try语句使用，通常是不管catch是否抛出异常，finally都会执行。

## 面试回答

finally块一般配合try语句使用，通常是不管catch是否抛出异常，finally都会执行。



finally块不执行的两种情况：

1.程序还没有进入到try语句块就因为异常提前终止了

2.在try或者catch语句块中，执行了System.exit(0)语句，导致JVM直接退出

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
