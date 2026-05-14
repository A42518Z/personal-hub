export type HappyHourImage = {
  title: string;
  src: string;
  category: string;
  description?: string;
  tags?: string[];
  mood?: '轻松' | '爆笑' | '治愈' | '离谱';
};

const cdnBaseUrl = import.meta.env.PUBLIC_HAPPY_HOUR_CDN_URL || '';

function imageUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return cdnBaseUrl ? `${cdnBaseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}` : path;
}

export const happyHourImages: HappyHourImage[] = [
  {
    title: '先放一张快乐占位图',
    src: imageUrl('/happy-hour/demo-01.svg'),
    category: '表情包',
    description: '你可以把真实搞笑图片放到 public/happy-hour/ 后替换这里的 src。',
    tags: ['占位', '表情包', '快乐'],
    mood: '轻松',
  },
  {
    title: '摸鱼提醒器',
    src: imageUrl('/happy-hour/demo-02.svg'),
    category: '生活梗',
    description: '适合放那些一看就想转发给朋友的图。',
    tags: ['摸鱼', '生活', '梗图'],
    mood: '爆笑',
  },
  {
    title: '今日份精神状态',
    src: imageUrl('/happy-hour/demo-03.svg'),
    category: '精神状态',
    description: '以后接 CDN 时，只要配置 PUBLIC_HAPPY_HOUR_CDN_URL 即可切换图片来源。',
    tags: ['精神状态', '日常', '离谱'],
    mood: '离谱',
  },
];

export const happyHourCategories = Array.from(new Set(happyHourImages.map((item) => item.category)));
export const happyHourMoods = Array.from(new Set(happyHourImages.map((item) => item.mood).filter(Boolean)));
