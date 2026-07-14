# 实体独立场景图

## 修改目标

- 将“元素图鉴”从 emoji 卡片升级为每个实体对应一张独立场景图片。
- 保证现有类比实体至少拥有一张项目内可访问的 SVG 场景图。

## 修改文件

- `src/data/learn/backend-toy-store.ts`
- `src/components/learn/ToyStoreStageCard.astro`

## 新增资源

- `public/learn/toy-store/entities/` 下新增 66 张独立 SVG 场景图。
- 新增一次性生成脚本：
  - `temp/ai-generated-scripts/one-off/2026-07-10/generate-toy-store-entity-scenes.mjs`

## 关键改动

- `ToyStoreElementCard` 新增 `sceneImage: string`。
- 现有 66 个 `elementCards` 均写入独立 `sceneImage` 路径。
- `ToyStoreStageCard.astro` 不再以 emoji 作为主要视觉，而是以 16:9 场景图展示实体。
- 图鉴卡片保留实体名、对应技术和类比说明。

## 验证

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

`/learn/backend/index.html` 正常生成。

## 注意事项

- 本轮图片为项目内生成的 SVG 卡通场景图，不依赖外部图床。
- 当前 66 张图按实体类型分为人物、建筑、物件和混合场景四类模板，后续可继续逐张精修角色服装、建筑外观和道具细节。
