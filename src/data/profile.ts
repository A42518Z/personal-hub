export const profile = {
  name: 'Personal Hub',
  role: '个人集网站 / 前端实验场 / 数字花园',
  summary:
    '这里用来沉淀博客、导航、项目、工具箱、前端实验和本地服务状态。它不是一次性完成的网站，而是持续迭代的个人工作台。',
};

export const profileStats = [
  { label: '核心页面', value: '6+' },
  { label: '动效组件', value: '4' },
  { label: '中文文章', value: '4' },
  { label: '构建状态', value: '通过' },
];

export const timeline = [
  {
    title: '选择 AstroWind 作为底座',
    description: '保留 Astro、Tailwind、博客、RSS、SEO 等成熟能力，减少从零搭建成本。',
  },
  {
    title: '改造成个人集结构',
    description: '新增首页、导航、项目、工具箱、实验室和状态页，并使用数据驱动内容。',
  },
  {
    title: '移植轻量动效组件',
    description: '加入滚动入场、光泽卡片、Bento 入口、Marquee 和磁吸按钮。',
  },
  {
    title: '清理模板痕迹',
    description: '替换站点身份，归档默认营销页和示例博客文章。',
  },
];

export const skills = [
  'Astro',
  'Tailwind CSS',
  'Markdown / MDX',
  '内容结构设计',
  '动效组件',
  '前端工具箱',
  '服务状态页',
  'Three.js 预研',
];

export const principles = [
  {
    title: '页面保持薄',
    description: '页面只做路由和编排，复杂 UI 拆到组件。',
  },
  {
    title: '数据独立维护',
    description: '导航、项目、工具、实验和个人信息优先放进 data 文件。',
  },
  {
    title: '动效渐进增强',
    description: '优先使用轻量 CSS 和原生 API，重型 3D 放入实验室。',
  },
  {
    title: '每步可构建',
    description: '每次改造后都运行构建验证，避免累积隐性问题。',
  },
];
