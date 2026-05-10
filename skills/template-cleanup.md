# 模板页面清理 skill

## 处理入口

- 清理脚本：`scripts/archive-template-pages.cjs`
- 归档目录：`src/pages/_archive`

## 当前处理

已将 AstroWind 默认营销页面从公开路由中归档：

- `src/pages/homes` -> `src/pages/_archive/homes`
- `src/pages/landing` -> `src/pages/_archive/landing`
- `src/pages/pricing.astro` -> `src/pages/_archive/pricing.astro`
- `src/pages/services.astro` -> `src/pages/_archive/services.astro`

## 保留页面

- `/`
- `/blog`
- `/bookmarks`
- `/projects`
- `/tools`
- `/lab`
- `/status`
- `/about`
- `/contact`
- `/privacy`
- `/terms`
- `/rss.xml`

## 维护约定

归档优先于删除，便于后续参考 AstroWind 模板写法。如果确认不需要，可在稳定版本后删除 `_archive`。
