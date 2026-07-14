# 后端玩具店路线补全与多图展示

## 修改目标

- 按用户继续提供的 7～13 章类比内容，补全“网上玩具店后端路线”。
- 将页面从“每章一张关系图”升级为“关系图 + 场景图 + 元素图鉴 + 类比映射 + 自我复述”。
- 增加更多卡通化元素展示，让类比里的角色有画面感。

## 修改/新增文件

### 修改数据

- `src/data/learn/backend-toy-store.ts`

### 修改组件

- `src/components/learn/ToyStoreStageCard.astro`

### 修改页面

- `src/pages/learn/backend.astro`

### 新增图片资源

- `public/learn/toy-store/06-database-map.svg`
- `public/learn/toy-store/06-database-scene.svg`
- `public/learn/toy-store/07-redis-map.svg`
- `public/learn/toy-store/07-redis-scene.svg`
- `public/learn/toy-store/08-async-map.svg`
- `public/learn/toy-store/08-async-scene.svg`
- `public/learn/toy-store/09-microservices-map.svg`
- `public/learn/toy-store/09-microservices-scene.svg`
- `public/learn/toy-store/10-deploy-map.svg`
- `public/learn/toy-store/10-deploy-scene.svg`
- `public/learn/toy-store/11-tools-map.svg`
- `public/learn/toy-store/11-tools-scene.svg`
- `public/learn/toy-store/12-security-map.svg`
- `public/learn/toy-store/12-security-scene.svg`

## 关键改动摘要

### 路线补全

`toyStoreStages` 从 6 站扩展为完整 13 站：

0. 计算机与网络基础
1. Java 语言基础
2. JDK / JRE / JVM
3. Java Web 基础
4. Spring 体系
5. 经典后端分层
6. 数据库与持久化
7. 缓存与 Redis
8. 异步、定时任务、消息队列
9. 微服务与分布式
10. 部署与运维
11. 工程协作与项目管理工具
12. 安全与权限体系

### 数据结构升级

新增类型：

- `ToyStoreElementCard`

`ToyStoreStage` 新增字段：

- `sceneImage?: string`
- `elementCards?: ToyStoreElementCard[]`

### 组件升级

`ToyStoreStageCard.astro` 现在会渲染：

- 顶部关系图
- 中部卡通场景图
- 底部元素图鉴
- 类比映射表
- 新手先记住
- 讲给自己听
- 自我复述 textarea
- 下一站提示

### 图片扩展

新增 7～13 章的关系图和场景图，共 14 张本地 SVG。图片不依赖外链或第三方图床。

### 页面文案升级

`/learn/backend` 的描述和末尾综合复述从原来的 6 站扩展为完整后端链路：

网络 → Java → JVM → Java Web → Spring → 分层 → 数据库 → Redis → MQ / 异步 → 微服务 → 部署运维 → 工程协作 → 安全权限

## 验证结果

执行：

```bash
pnpm run build
```

结果：

```text
95 page(s) built
Complete!
exitCode: 0
```

构建日志确认页面正常生成：

- `/learn/backend/index.html`
- `/learn/index.html`
- `/learn/java/index.html`

## 后续注意事项

- 当前“元素图鉴”使用 emoji + 卡片方式展示，已具备较强画面感；如果后续要更统一，可以再把每个元素替换为独立 SVG 小图标。
- 当前 textarea 仍是临时输入，刷新后不会保存。
- 下一步可加入 localStorage，保存每站复述内容，并做“完成当前站后解锁下一站”。
