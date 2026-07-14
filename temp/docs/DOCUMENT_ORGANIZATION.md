# 文档组织规则（DOCUMENT_ORGANIZATION）

## 1. 目标

规范 personal-hub 项目内所有文档、AI 产物、技能文件与日志的结构化管理方式，确保可追踪、可维护、可扩展。

---

## 2. 顶层结构约定

```
temp/
  docs/                # 项目总览与组织规则
  change-logs/        # 修改记录（按日期）
  skills/             # 页面 / 功能 / 流程 Skill
  ai-generated-scripts/
```

---

## 3. change-logs 规则

路径：

```
temp/change-logs/YYYY/MM/YYYY-MM-DD/
```

子结构：

- drafts/：原始修改记录
- summary/：按主题归档总结
- archived/：已归档 drafts

---

## 4. skills 规则

- pages/：页面级规则
- features/：功能级规则
- workflows/：流程级规则

原则：
- 稳定行为才进入 skill
- 临时变更不写 skill

---

## 5. AI 脚本规则

- one-off：一次性脚本
- reusable：可复用脚本

路径：

```
temp/ai-generated-scripts/
```

---

## 6. 文档维护原则

- 避免重复记录
- 避免将日志写入 docs
- docs 只记录“规则与结构”，不记录“过程流水”
- 所有过程记录进入 change-logs

---

## 7. 初始化说明

该文件由 Dev Orchestrator 自动生成，用于统一项目级 AI 协作规范。
