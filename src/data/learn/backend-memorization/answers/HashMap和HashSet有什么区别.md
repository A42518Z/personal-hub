---
type: 面试题
category: 集合框架
source: 面试题/HashMap和HashSet有什么区别.md
tags:
  - java
  - 集合
  - hashmap
status: 待背诵
review: [D1, D3, D7]
---

# HashMap和HashSet有什么区别

> [!summary] 速记
> HashMap和HashSet都是Java中的集合类，他们的区别： 1.HashSet实现了Set接口，只存储对象；HashMap实现了Map接口，用于存储键值对 2.HashSe

## 面试回答

HashMap和HashSet都是Java中的集合类，他们的区别：

1.HashSet实现了Set接口，只存储对象；HashMap实现了Map接口，用于存储键值对

2.HashSet底层使用HashMap存储的，HashSet封装了一系列HashMap的方法，HashSet将自己的值保存到HashMap的Key里面了

3.HashSet不允许集合中有重复的值（如果有重复的值，会插入失败），而HashMap键不能重复，值可以重复（如果键重复会覆盖原来的值）



HashMap基础使用

```java
Map<String,String> map = new HashMap<>();
map.put("A","Apple");
map.put("B","Ball");
map.forEach((k,v) -> System.out.println(k+" "+v));
```



HashSet基础使用

```java
Set<String> set = new HashSet<>();
set.add("A");
set.add("B");
set.forEach(System.out::println);
```

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- [[HashMap和HashTable的区别]]
- [[ConcurrentHashMap和HashMap的区别]]
- [[ConcurrentHashMap如何保证线程安全的]]
- [[LinkedHashMap]]

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
