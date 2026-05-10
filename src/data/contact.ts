export const contactIntro = {
  title: '联系与反馈',
  description:
    '这里是 Personal Hub 的联系入口。你可以通过这些链接反馈建议、查看项目、订阅 RSS，或者了解这个站点的构建思路。',
};

export const contactLinks = [
  {
    title: 'GitHub',
    description: '项目仓库地址待绑定。后续可用于提交 issue 或记录功能想法。',
    href: '#',
    badge: 'Code',
  },

  {
    title: 'RSS',
    description: '订阅博客更新，跟进个人集网站的构建记录。',
    href: '/rss.xml',
    badge: 'Feed',
  },
  {
    title: '博客',
    description: '阅读成长记录、技术复盘、工具箱计划和实验室灵感。',
    href: '/blog',
    badge: 'Writing',
  },
  {
    title: '状态页',
    description: '查看站点前端、本地 API 和后续 Docker 服务状态。',
    href: '/status',
    badge: 'Status',
  },
];

export const feedbackTopics = [
  {
    title: '内容建议',
    description: '希望增加哪些博客主题、工具说明、项目复盘或学习记录。',
  },
  {
    title: '工具需求',
    description: '希望工具箱优先支持哪些转换、格式化、搜索或调试能力。',
  },
  {
    title: '视觉实验',
    description: '推荐适合放进实验室的动效、Canvas、WebGL 或 3D 灵感。',
  },
  {
    title: '服务接入',
    description: '后续可以接入健康检查、Docker 状态、部署状态或本地自动化。',
  },
];
