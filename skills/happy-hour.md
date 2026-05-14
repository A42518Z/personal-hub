# 欢乐时光模块

## 入口

- 页面路径：/happy-hour
- 页面文件：src/pages/happy-hour.astro

## 能力

- 展示用户保存的搞笑图片、表情包、梗图。
- 支持按标题、描述、标签搜索。
- 支持按分类筛选。
- 支持按心情筛选。
- 支持“随机一笑”，快速滚动到一张随机图片。
- 使用瀑布流样式展示不同尺寸的图片。

## 数据来源

- 当前本地图片目录：public/happy-hour/
- 图片索引数据：src/data/happyHour.ts
- 未来 CDN 配置：PUBLIC_HAPPY_HOUR_CDN_URL

## CDN 切换说明

当图片迁移到 CDN 后，可以通过两种方式切换：

1. 直接在 src/data/happyHour.ts 中把 src 改成完整 CDN URL。
2. 设置 PUBLIC_HAPPY_HOUR_CDN_URL，让 imageUrl('/happy-hour/demo-01.svg') 自动拼接为 CDN 地址。

## 后续可扩展

- 上传管理页
- 点赞 / 收藏
- 按时间归档
- 每日随机推荐
- 从远程 JSON 或数据库读取图片索引
