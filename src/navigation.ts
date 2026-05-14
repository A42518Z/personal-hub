import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

const repositoryUrl = '#';

export const headerData = {
  links: [
    {
      text: '首页',
      href: getPermalink('/'),
    },
    {
      text: '博客',
      href: getBlogPermalink(),
    },
    {
      text: '导航',
      href: getPermalink('/bookmarks'),
    },
    {
      text: '项目',
      href: getPermalink('/projects'),
    },
    {
      text: '工具箱',
      href: getPermalink('/tools'),
    },
    {
      text: '童年游戏',
      href: getPermalink('/games'),
    },
    {
      text: '欢乐时光',
      href: getPermalink('/happy-hour'),
    },
    {
      text: '更多',
      links: [
        {
          text: '前端实验室',
          href: getPermalink('/lab'),
        },
        {
          text: '状态页',
          href: getPermalink('/status'),
        },
        {
          text: '关于',
          href: getPermalink('/about'),
        },
        {
          text: 'RSS',
          href: getAsset('/rss.xml'),
        },
      ],
    },
  ],
  actions: [{ text: 'GitHub', href: repositoryUrl, target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '个人集',
      links: [
        { text: '首页', href: getPermalink('/') },
        { text: '博客', href: getBlogPermalink() },
        { text: '导航', href: getPermalink('/bookmarks') },
        { text: '项目', href: getPermalink('/projects') },
      ],
    },
    {
      title: '工具与实验',
      links: [
        { text: '工具箱', href: getPermalink('/tools') },
        { text: '前端实验室', href: getPermalink('/lab') },
        { text: '童年游戏', href: getPermalink('/games') },
        { text: '欢乐时光', href: getPermalink('/happy-hour') },
        { text: '状态页', href: getPermalink('/status') },
      ],
    },
    {
      title: '内容分类',
      links: [
        { text: '技术复盘', href: getPermalink('ji4-shu4-fu4-pan2', 'category') },
        { text: 'Astro', href: getPermalink('astro', 'tag') },
        { text: '工具箱', href: getPermalink('gong1-ju4-xiang1', 'category') },
      ],
    },
    {
      title: '站点信息',
      links: [
        { text: '关于', href: getPermalink('/about') },
        { text: '联系', href: getPermalink('/contact') },
        { text: '隐私政策', href: getPermalink('/privacy') },
        { text: '使用条款', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: repositoryUrl },
  ],
  footNote: `
    Personal Hub · Built with Astro, AstroWind and Tailwind CSS.
  `,
};
