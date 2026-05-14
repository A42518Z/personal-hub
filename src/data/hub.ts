export type HubItem = {
  title: string;
  description: string;
  href: string;
  badge?: string;
  status?: 'online' | 'warning' | 'offline' | 'planned';
};

export type HubGroup = {
  title: string;
  description: string;
  items: HubItem[];
};

export const quickLinks: HubItem[] = [
  { title: '博客', description: '成长记录、技术复盘和生活随笔。', href: '/blog', badge: 'Content' },
  { title: '导航', description: '常用网站、AI 工具、前端文档与学习平台。', href: '/bookmarks', badge: 'Links' },
  { title: '项目', description: '项目入口、截图、复盘和亮点沉淀。', href: '/projects', badge: 'Works' },
  { title: '工具箱', description: 'JSON、时间戳、Base64、正则等开发小工具。', href: '/tools', badge: 'Tools' },
  { title: '实验室', description: '粒子背景、玻璃拟态、3D 卡片、Canvas 动效。', href: '/lab', badge: 'Labs' },
  { title: '童年游戏', description: '上传本地 NES ROM，在浏览器里运行红白机游戏。', href: '/games', badge: 'NES' },
  { title: '状态页', description: '服务状态、Docker 状态和 API 健康检查。', href: '/status', badge: 'Status' },
];

export const projects: HubItem[] = [
  { title: 'personal-hub', description: '个人集网站：博客、导航、项目、工具箱、实验室和状态页。', href: '/', badge: 'Astro' },
  { title: 'Dev Orchestrator', description: '本地开发编排入口：文件、Shell、数据库和 Java 服务。', href: '/projects', badge: 'Local API' },
  { title: 'Frontend Playground', description: '沉淀前端动效、组件和交互实验。', href: '/lab', badge: 'UI Lab' },
];

export const tools: HubGroup[] = [
  {
    title: '文本处理',
    description: '常用编码、格式化和转换工具。',
    items: [
      { title: 'JSON 格式化', description: '格式化、压缩和校验 JSON。', href: '/tools#json', status: 'planned' },
      { title: 'Base64 转换', description: 'Base64 编码与解码。', href: '/tools#base64', status: 'planned' },
      { title: 'Markdown 预览', description: '快速预览 Markdown 内容。', href: '/tools#markdown', status: 'planned' },
    ],
  },
  {
    title: '开发辅助',
    description: '调试和日常开发高频能力。',
    items: [
      { title: '时间戳转换', description: 'Unix 时间戳和本地时间互转。', href: '/tools#timestamp', status: 'planned' },
      { title: '正则测试', description: '快速验证正则表达式。', href: '/tools#regex', status: 'planned' },
    ],
  },
];

export const labs: HubItem[] = [
  { title: 'WebRTC 摄像头拍照', description: '开启摄像头预览，并将当前视频帧截取为 PNG 图片。', href: '/lab/webrtc-take-photos', badge: 'WebRTC', status: 'online' },
  { title: 'WebRTC 摄像头录制', description: '调用摄像头和麦克风，使用 MediaRecorder 本地录制、回放和下载视频。', href: '/lab/webrtc-record', badge: 'MediaRecorder', status: 'online' },
  { title: 'WebRTC P2P 通信', description: '模拟两个 RTCPeerConnection，通过 DataChannel 完成点对点消息通信。', href: '/lab/webrtc-p2p', badge: 'P2P', status: 'online' },
  { title: '粒子背景', description: '用于首页 Hero 或特殊展示页的动态背景。', href: '/lab#particles', badge: 'Canvas', status: 'planned' },
  { title: '玻璃拟态', description: '毛玻璃卡片、光晕和深色模式组合。', href: '/lab#glass', badge: 'UI', status: 'planned' },
  { title: '鼠标跟随光效', description: '基于鼠标位置的聚光和渐变效果。', href: '/lab#cursor', badge: 'Motion', status: 'planned' },
  { title: '3D 卡片', description: '带视差和 hover 反馈的项目卡片。', href: '/lab#cards', badge: '3D', status: 'planned' },
];

export const services: HubItem[] = [
  { title: '站点前端', description: 'Astro 静态站点构建与部署状态。', href: '/', status: 'online' },
  { title: 'Dev Orchestrator API', description: '本地 fs / shell / db / java 编排服务。', href: '/status#api', status: 'online' },
  { title: 'Docker 服务', description: '后续接入容器运行状态。', href: '/status#docker', status: 'planned' },
];
