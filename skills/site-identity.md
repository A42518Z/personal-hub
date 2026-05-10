# 站点身份 skill

## 文件入口

- 站点配置：`src/config.yaml`
- Logo 组件：`src/components/Logo.astro`

## 当前能力

- 站点名称已改为 `Personal Hub`。
- 默认 SEO 标题模板为 `%s — Personal Hub`。
- 默认描述为中文个人集网站描述。
- 站点语言设置为 `zh-CN`。
- Logo 从 AstroWind 默认火箭文案改为 `PH + Personal Hub`。

## 维护约定

后续绑定真实域名时，需要更新 `src/config.yaml` 中的 `site.site`。如果更换个人品牌名，应同步修改 `site.name`、metadata、Logo 和 Footer 文案。
