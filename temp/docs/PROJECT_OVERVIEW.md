# personal-hub 项目总览（PROJECT_OVERVIEW）

## 1. 项目概述

- 项目名称：personal-hub
- 类型：基于 Astro 的个人集成/聚合型 Web 项目
- 技术栈推断：Astro + TypeScript + TailwindCSS + Node.js + Docker + Netlify/Vercel 部署
- 目标：个人内容、工具、服务与模块的统一聚合平台

---

## 2. 启动与构建（参考）

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

---

## 3. 核心目录结构

- src/：主业务源码
- public/：静态资源
- docs/：项目文档
- scripts/：工具脚本
- temp/：AI 生成与临时产物
- skills/：可复用规则/能力模块

---

## 4. 关键配置

- astro.config.ts：Astro 配置
- tailwind.config.js：样式系统
- tsconfig.json：TypeScript 配置
- vercel.json / netlify.toml：部署配置
- docker-compose.yml / Dockerfile：容器化支持

---

## 5. 最近状态（待初始化）

- 已初始化 Dev Orchestrator 文档体系
- temp/docs 结构已建立

---

## 6. 后续建议

- 梳理 src 路由与页面结构
- 初始化 API / 数据模块说明
- 建立 skills/pages 与 features 映射
