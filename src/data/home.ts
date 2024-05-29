export type HomeSignal = {
  label: string;
  value: string;
};

export type HomeNavigationItem = {
  label: string;
  title: string;
  href: string;
  desc: string;
  accent: 'blue' | 'green' | 'violet' | 'rose' | 'cyan' | 'amber' | 'slate';
  size: 'wide' | 'medium' | 'small';
};

export type HomeFocusItem = {
  step: 'NOW' | 'LATEST' | 'NEXT';
  title: string;
  desc: string;
  status: string;
  tone: 'active' | 'complete' | 'planned';
};

export type HomeUpdateItem = {
  title: string;
  desc: string;
  date: string;
  href: string;
};

export type FeaturedProjectPreview = {
  eyebrow: string;
  title: string;
  description: string;
  navigation: {
    label: string;
    count: string;
    active?: boolean;
  }[];
  records: {
    title: string;
    type: string;
    status: string;
  }[];
};

export const homeRelease = {
  label: 'v0.1.0',
  status: '首个公开版本',
  href: 'https://github.com/Azek431/azek431-home/releases/tag/v0.1.0',
} as const;

export const homeSignals: readonly HomeSignal[] = [
  {
    label: 'AI & Automation',
    value: '工具、模型与工作流实验',
  },
  {
    label: 'Web Engineering',
    value: 'Astro、前端与长期维护',
  },
  {
    label: 'Open Source',
    value: 'GitHub 主仓库与 Gitee 镜像',
  },
];

export const homeNexusSlugs = ['cysj-data', 'azek431-blog', 'ai-experiments'] as const;

export const homeNavigationItems: readonly HomeNavigationItem[] = [
  {
    label: 'Featured Work',
    title: '探索全部项目',
    href: '/projects/',
    desc: '查看正在维护的网站、资料库、实验项目和后续计划。',
    accent: 'blue',
    size: 'wide',
  },
  {
    label: 'Now',
    title: '现在正在做',
    href: '/now/',
    desc: '最近的开发重点、学习方向与工具工作流。',
    accent: 'green',
    size: 'medium',
  },
  {
    label: 'About',
    title: '认识 Azek431',
    href: '/about/',
    desc: '了解我的兴趣、项目方向和这个数字空间的定位。',
    accent: 'violet',
    size: 'medium',
  },
  {
    label: 'Blog',
    title: '文章与记录',
    href: '/blog/',
    desc: '后续用于沉淀技术文章、笔记和长期思考。',
    accent: 'rose',
    size: 'small',
  },
  {
    label: 'Uses',
    title: '开发装备',
    href: '/uses/',
    desc: '查看日常开发、自动化和内容维护所用的工具。',
    accent: 'cyan',
    size: 'small',
  },
  {
    label: 'Search',
    title: '站内搜索',
    href: '/search/',
    desc: '跨页面、项目、链接和更新记录快速检索。',
    accent: 'amber',
    size: 'small',
  },
  {
    label: 'Stats',
    title: '站点数据',
    href: '/stats/',
    desc: '查看主站规模、维护状态和内容统计。',
    accent: 'slate',
    size: 'small',
  },
];

export const homeFocusItems: readonly HomeFocusItem[] = [
  {
    step: 'NOW',
    title: '首页体验精修',
    desc: '继续优化真实项目视觉、移动端节奏、内容数据层和动画性能。',
    status: '进行中',
    tone: 'active',
  },
  {
    step: 'LATEST',
    title: 'v0.1.0 正式发布',
    desc: '首个公开版本已经发布，并完成 GitHub / Gitee 发行版自动同步。',
    status: '已完成',
    tone: 'complete',
  },
  {
    step: 'NEXT',
    title: '内容与案例完善',
    desc: '继续补充项目截图、案例说明、Blog 内容和更准确的站点数据。',
    status: '下一步',
    tone: 'planned',
  },
];

export const homeRecentUpdates: readonly HomeUpdateItem[] = [
  {
    title: '发布 Azek431 Home v0.1.0',
    desc: '完成首个公开发行版本，并建立 GitHub 与 Gitee 的双平台发行同步流程。',
    date: '2026-06-14',
    href: 'https://github.com/Azek431/azek431-home/releases/tag/v0.1.0',
  },
  {
    title: '完成 Navigation System V4',
    desc: '统一桌面端与移动端导航、全局快捷键、焦点管理和浮层互斥逻辑。',
    date: '2026-06-12',
    href: '/changelog/',
  },
  {
    title: '重构首页与 UI System V2',
    desc: '重新整理首页信息架构、视觉层级、组件职责与分层样式入口。',
    date: '2026-06-10',
    href: '/changelog/',
  },
];

export const featuredProjectPreview: FeaturedProjectPreview = {
  eyebrow: 'Documentation workspace',
  title: '创游世界资料索引',
  description: '将脚本、组件、编辑器、对象结构和引擎更新整理成可以持续维护的知识空间。',
  navigation: [
    {
      label: '资料总览',
      count: '40+',
      active: true,
    },
    {
      label: '脚本与组件',
      count: '12',
    },
    {
      label: '编辑器界面',
      count: '08',
    },
    {
      label: '引擎与更新',
      count: '06',
    },
  ],
  records: [
    {
      title: '脚本与组件资料',
      type: 'Docs',
      status: '维护中',
    },
    {
      title: '编辑器与对象结构',
      type: 'Reference',
      status: '已整理',
    },
    {
      title: '引擎更新与教程',
      type: 'Timeline',
      status: '持续补充',
    },
  ],
};
