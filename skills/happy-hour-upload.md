# 欢乐时光上传模块

## 入口

- 页面路径：/happy-hour/upload
- 页面文件：src/pages/happy-hour/upload.astro
- 配置文件：src/data/happyHourUpload.ts

## 第一阶段能力

- 为白名单用户提供欢乐时光图片上传 UI 原型。
- 当前白名单：2942893806@qq.com。
- 支持选择多张图片。
- 支持图片预览。
- 支持填写标题、分类、标签、心情。
- 支持前端检查文件类型和大小。
- 支持模拟生成 manifest 草稿记录。

## 当前限制

- 当前阶段是静态站 UI 原型，白名单只在前端做演示级校验。
- 不能把 CDN、R2、OSS、COS 的密钥放进前端。
- 真实上传必须接入服务端鉴权和对象存储预签名上传。

## 后续接口规划

- POST /api/happy-hour/create-upload-url：服务端校验用户并生成预签名上传 URL。
- POST /api/happy-hour/commit-upload：上传完成后提交图片元数据并更新 manifest 或数据库。

## 推荐安全方案

- 使用 Cloudflare Access 或登录系统保护 /happy-hour/upload。
- 服务端再次校验邮箱白名单。
- 服务端限制文件类型、大小、对象路径和上传 URL 有效期。
- 浏览器只拿短期 presigned upload URL，不接触长期密钥。
