---
title: 为什么用 Astro 做个人集网站
publishDate: 2026-05-03
excerpt: Astro 适合把博客、导航、项目和工具箱组合成一个轻量的个人站。
category: 技术复盘
tags:
  - astro
  - frontend
  - architecture
author: Personal Hub
---

Astro 很适合做个人集网站，因为它默认输出静态页面，首屏轻、部署简单，也方便把不同类型的内容组合在一起。

这个项目里，Astro 主要承担三类职责：

1. 页面路由：负责首页、博客、导航、项目、工具箱、实验室和状态页。
2. 内容系统：负责 Markdown / MDX 博客文章。
3. 组件编排：把 Tailwind 样式、动效组件和数据模块组合起来。

复杂交互不会直接写在页面里。比如搜索、命令面板、小游戏、3D 实验，都可以作为独立 island 或独立组件接入。

这样做的好处是：站点可以一步步变酷，但不会一步步变乱。
