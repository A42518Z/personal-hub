# 项目维护 skill

## 当前处理

- `package.json` 项目身份已从 AstroWind 修改为 `personal-hub`。
- `src/data/hub.ts` 已删除旧的 `bookmarkGroups`，导航书签统一维护在 `src/data/bookmarks.ts`。
- 维护脚本位于 `scripts/`，用于归档模板页面、归档模板文章和清理 `node_modules`。

## 维护约定

- 项目身份相关信息优先维护 `package.json` 和 `src/config.yaml`。
- 书签只维护在 `src/data/bookmarks.ts`。
- 首页快速入口、工具、实验室和状态数据维护在 `src/data/hub.ts`。
- 归档脚本只在模板清理或本地维护时使用，不参与页面运行。
