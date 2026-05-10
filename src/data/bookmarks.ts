import type { HubGroup } from './hub';

export const bookmarkGroups: HubGroup[] = [
  {
    title: 'AI 工具',
    description: '日常创作、编码和效率工具入口。',
    items: [
      { title: 'ChatGPT', description: '对话、写作、编程与灵感整理。', href: 'https://chat.openai.com', badge: 'AI' },
      { title: 'Claude', description: '长文本阅读和结构化写作辅助。', href: 'https://claude.ai', badge: 'AI' },
      { title: 'Perplexity', description: '带来源的搜索问答。', href: 'https://www.perplexity.ai', badge: 'Search' },
      { title: 'v0', description: '快速生成前端组件和交互原型。', href: 'https://v0.dev', badge: 'UI' },
    ],
  },
  {
    title: '前端文档',
    description: '开发时高频查看的官方资料。',
    items: [
      { title: 'Astro Docs', description: 'Astro 官方文档。', href: 'https://docs.astro.build', badge: 'Astro' },
      { title: 'Tailwind CSS', description: 'Tailwind 工具类和设计系统。', href: 'https://tailwindcss.com', badge: 'CSS' },
      { title: 'MDN', description: 'Web 标准和浏览器 API。', href: 'https://developer.mozilla.org', badge: 'Web' },
      { title: 'Framer Motion', description: 'React 动画和交互库文档。', href: 'https://www.framer.com/motion/', badge: 'Motion' },
    ],
  },
  {
    title: '设计灵感',
    description: '用于寻找视觉语言、动效节奏和作品集灵感。',
    items: [
      { title: 'Awwwards', description: '高质量创意网站和交互动效参考。', href: 'https://www.awwwards.com/', badge: 'Inspiration' },
      { title: 'Framer', description: '现代网站设计、动效和交互参考。', href: 'https://www.framer.com/', badge: 'Design' },
      { title: 'Monolith Studio', description: '沉浸式视觉与艺术方向参考。', href: 'https://monolithstudio.com/', badge: 'Studio' },
      { title: 'Art Innovation Gallery', description: '艺术展览式排版和视觉叙事参考。', href: 'https://artinnovationgallery.com/', badge: 'Gallery' },
      { title: '12 Dishes', description: '长卷轴故事、图像叙事和视差体验参考。', href: 'https://12dishes.com/', badge: 'Story' },
      { title: 'Sebastian Martinez', description: '设计师个人作品集和交互表达参考。', href: 'https://www.sebastian-martinez.com/', badge: 'Portfolio' },
    ],
  },
  {
    title: '组件库',
    description: '适合迁移到个人集的 Tailwind / React 动效组件参考。',
    items: [
      { title: 'Magic UI', description: '文字动画、Marquee、粒子、Command Palette 等组件。', href: 'https://magicui.design/', badge: 'UI' },
      { title: 'Aceternity UI', description: 'Bento、光效卡片、Canvas 卡片和文字揭示。', href: 'https://ui.aceternity.com/', badge: 'UI' },
      { title: 'cult/ui', description: '实验感更强的视觉动效组件。', href: 'https://www.cult-ui.com/', badge: 'UI' },
    ],
  },
  {
    title: '3D 与 WebGL',
    description: 'Three.js、WebGL、3D 作品集和课程参考。',
    items: [
      { title: 'Three.js', description: 'WebGL 3D 图形库。', href: 'https://threejs.org/', badge: '3D' },
      { title: 'Bruno Simon', description: '可驾驶 3D 作品集参考。', href: 'https://bruno-simon.com/', badge: 'Portfolio' },
      { title: 'Three.js Journey', description: 'Three.js 系统课程参考。', href: 'https://threejs-journey.com/', badge: 'Course' },
    ],
  },
  {
    title: '主题参考',
    description: '其他静态站主题和博客结构参考。',
    items: [
      { title: 'Hugo Themes', description: 'Hugo 官方主题列表，适合参考博客结构。', href: 'https://themes.gohugo.io/', badge: 'Themes' },
      { title: 'Magnolia', description: '极简 Hugo 主题，适合参考文章和个人页排版。', href: 'https://ololiuhqui.github.io/magnolia-free-hugo-theme/', badge: 'Theme' },
      { title: 'qzq.at', description: '个人叙事型站点参考。', href: 'https://www.qzq.at/', badge: 'Personal' },
    ],
  },
];
