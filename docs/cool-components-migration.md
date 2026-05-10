# 炫酷组件移植清单

> 目标：参考优秀个人站、设计站、组件库和 3D 作品集，为 `personal-hub` 制定可落地的组件迁移路线。原则是不直接搬源码，而是抽象交互模式、视觉语言和信息结构，再用 Astro + Tailwind + 少量 React islands 实现。

## 技术分层建议

| 层级 | 适合技术 | 用途 |
| --- | --- | --- |
| 静态页面层 | Astro + Tailwind | 首页、导航、项目、博客、状态页 |
| 轻交互层 | Astro 组件 + 原生 JS | hover、滚动、筛选、搜索、主题切换 |
| 动效组件层 | React island + Motion | 磁吸按钮、文字揭示、卡片入场、布局过渡 |
| 视觉实验层 | Canvas / SVG / CSS shader | 粒子、噪声、光晕、路径动画 |
| 3D 实验层 | Three.js / React Three Fiber | 3D Gallery、交互房间、可驾驶/可漫游实验 |
| 游戏层 | Canvas 或 EmulatorJS | 自制小游戏、复古模拟器入口 |

## 第一优先级：低风险高收益组件

| 组件 | 参考来源 | 适合页面 | 实现方式 | 难度 | 备注 |
| --- | --- | --- | --- | --- | --- |
| 大号个人 Hero + 多身份标签 | qzq.at、Sebastian Martinez | 首页 | Astro + Tailwind | 低 | 适合展示身份、兴趣、社交入口 |
| Bento 快速入口 | Framer、Aceternity UI | 首页 | Astro + Tailwind | 低 | 把博客、导航、工具、项目、实验室做成块状入口 |
| 磁吸按钮 | Motion、Awwwards 常见交互 | 全站 | React island + Motion | 中 | 用于 CTA、项目链接、外链按钮 |
| 文字逐字/逐行揭示 | Motion、Sebastian Martinez | 首页、关于页 | React island + Motion 或 CSS | 中 | 注意减少过度动效 |
| 卡片 hover 光泽/倾斜 | Aceternity UI、cult/ui | 项目页、导航页 | CSS + pointer 事件 | 中 | 可做 3D hover，但不要影响可读性 |
| 滚动入场动画 | Framer、Awwwards | 全站分区 | IntersectionObserver + CSS / Motion | 中 | 统一做成 `Reveal.astro` 或 React island |
| 站内 Command Palette | Magic UI、Framer | 全站 | React island | 中 | 用于快速跳转页面、搜索书签、打开工具 |
| 无限横向 Logo/标签滚动 | Magic UI、Motion | 首页、导航页 | CSS animation / Motion | 低 | 展示技术栈、兴趣标签、工具分类 |

## 第二优先级：个人集特色组件

| 组件 | 参考来源 | 适合页面 | 实现方式 | 难度 | 备注 |
| --- | --- | --- | --- | --- | --- |
| 时间/地点/状态微面板 | qzq.at、Monolith Studio | 首页、状态页 | Astro + JS | 低 | 显示本地时间、服务状态、在线状态 |
| 个人经历时间线 | qzq.at、Magnolia | 关于页、首页 | Astro 数据驱动 | 低 | 数据放 `src/data/timeline.ts` |
| 技能条/能力雷达 | qzq.at | 关于页 | Astro + CSS | 低 | 轻量即可，不需要图表库 |
| 收藏地图/足迹 | qzq.at | 关于页、空间页 | SVG / Mapbox 可选 | 中 | 第一版可用静态 SVG |
| 书签筛选与搜索 | Magic UI、v0、Hugo Themes | 导航页 | React island + Fuse.js | 中 | 后续从 `src/data/hub.ts` 拆到 `bookmarks.ts` |
| 项目案例横向画廊 | Sebastian Martinez、12 Dishes | 项目页 | CSS scroll-snap + Motion | 中 | 适合截图和项目故事 |
| 艺术展览式大图排版 | Art Innovation Gallery、12 Dishes | 项目页、文章专题 | Astro + CSS Grid | 中 | 适合做专题文章和作品页 |
| 声音开关/氛围音入口 | Monolith Studio、Bruno Simon | 实验室 | Howler.js 可选 | 中 | 默认关闭，用户主动开启 |

## 第三优先级：高成本视觉实验

| 组件 | 参考来源 | 适合页面 | 实现方式 | 难度 | 备注 |
| --- | --- | --- | --- | --- | --- |
| WebGL 粒子背景 | Awwwards、Monolith Studio | 实验室、首页局部 | Three.js | 高 | 首页只做轻量版本 |
| 3D Gallery | v0、Three.js Journey | 实验室、项目页 | Three.js / R3F | 高 | 展示项目截图或相册 |
| 可漫游个人空间 | Bruno Simon | 实验室独立页 | Three.js + Rapier + Howler | 很高 | 不建议第一阶段做 |
| 可驾驶小车作品集 | Bruno Simon | 实验室独立页 | Three.js + 物理引擎 | 很高 | 可以做极简 2D/伪 3D 版本先验证 |
| Shader Hero | cult/ui、Awwwards | 首页、实验室 | CSS shader / WebGL | 高 | 需要性能降级策略 |
| 视差长卷轴故事 | 12 Dishes、Awwwards | 专题页 | scroll timeline / Motion | 高 | 适合“年度总结”“项目复盘” |

## 组件库取舍

| 来源 | 可借鉴内容 | 迁移策略 |
| --- | --- | --- |
| Magic UI | 文字动画、Marquee、Command Palette、粒子/光效 | 优先移植思路，React 组件做 island |
| Aceternity UI | Bento、Glare Card、Canvas Card、Text Reveal、Globe | 选 3-5 个重点组件，不要全量引入 |
| cult/ui | Shift Card、Fluted Glass、CTA Particles、Warp Shader | 适合实验室和首页局部亮点 |
| Motion | hover、drag、scroll、layout、spring、stagger | 作为交互动效主库，封装统一动画参数 |
| v0 | 快速生成组件草稿和交互原型 | 只作为起稿工具，生成后要拆文件和清理依赖 |

## 推荐落地顺序

1. 新增 `src/components/effects/Reveal.astro`：统一滚动入场。
2. 新增 `src/components/effects/GlowCard.astro`：项目/导航通用光泽卡片。
3. 新增 `src/components/home/BentoHub.astro`：首页主入口升级为 Bento。
4. 新增 `src/components/search/CommandPalette.tsx`：全站快捷跳转。
5. 新增 `src/components/lab/ParticleHero.tsx`：实验室粒子 Hero。
6. 新增 `src/pages/games.astro`：童年游戏入口页。
7. 新增 `src/components/games`：先做自制小游戏，再考虑 EmulatorJS。

## 童年游戏实现方案

### 方案 A：自制 HTML5 小游戏

适合贪吃蛇、打砖块、打地鼠、井字棋、俄罗斯方块、推箱子等。

核心结构：

- `src/pages/games.astro`：游戏入口页。
- `src/components/games/GameCard.astro`：游戏卡片。
- `src/components/games/SnakeGame.tsx`：React island 游戏组件。
- `src/lib/games/snake.ts`：游戏状态、移动、碰撞、计分逻辑。
- `localStorage`：保存最高分、最近游玩时间、偏好设置。

核心机制：

- 输入：键盘、触屏按钮、游戏手柄可后续扩展。
- 循环：`requestAnimationFrame` 或固定步长计时器。
- 状态：地图、角色、方向、分数、生命、暂停状态。
- 渲染：Canvas 2D 或 DOM 网格。
- 反馈：音效、震动、粒子、排行榜。

### 方案 B：网页复古模拟器

适合“红白机/FC/NES、GBA、街机”等怀旧入口。

核心结构：

- `public/emulator/`：放模拟器资源。
- `public/roms/`：只放拥有授权的 ROM 或自制 ROM。
- `src/pages/games/[slug].astro`：游戏详情页。
- `src/components/games/EmulatorFrame.astro`：嵌入模拟器容器。

注意：

- 不把商业 ROM 打包进仓库。
- 可以先支持自制 homebrew ROM。
- 需要移动端虚拟按键、加载状态和性能提示。
- 模拟器页面最好独立路由，避免拖慢首页。

### 方案 C：伪复古交互组件

如果只是想要“童年游戏氛围”，不一定真的模拟旧主机。

可以做：

- 像素风启动屏。
- GameBoy 样式工具箱。
- 8-bit 音效按钮。
- 终端式菜单。
- 小霸王卡带样式项目卡片。
- 成就系统和徽章。

这个方案版权风险低，性能轻，最适合第一版。

## 版权和性能边界

- 不复制商业网站源码。
- 不打包未经授权的游戏 ROM。
- 首页不放重型 WebGL 和模拟器。
- 所有动效要尊重 `prefers-reduced-motion`。
- 每个复杂组件单独文件维护，单文件不超过 1000 行。

## 建议下一步

先做三个组件：

1. `GlowCard`：提升全站卡片质感。
2. `BentoHub`：重构首页快速入口。
3. `Games` 页面：做童年游戏入口，第一版用伪复古卡片 + 一个自制贪吃蛇或打砖块。
