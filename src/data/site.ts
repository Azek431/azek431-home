export const siteConfig = {
  name: 'Azek431',
  title: 'Azek431 的个人主站',
  description: 'Azek431 的个人主站与导航入口，用于整理个人介绍、项目入口、学习记录和公开链接。',
  author: 'Azek431',
  locale: 'zh-CN',
  github: 'https://github.com/Azek431',
  keywords: [
    'Azek431',
    '个人主页',
    '个人网站',
    '项目导航',
    'Astro',
    'GitHub',
    'Cloudflare Pages',
    'AI',
    '网站搭建',
    '软件开发',
  ],
};

export const navItems = [
  { label: '首页', href: '/' },
  { label: '关于', href: '/about/' },
  { label: '项目', href: '/projects/' },
  { label: '链接', href: '/links/' },
  { label: 'Now', href: '/now/' },
  { label: 'Uses', href: '/uses/' },
  { label: 'Colophon', href: '/colophon/' },
  { label: 'Changelog', href: '/changelog/' },
  { label: 'Stats', href: '/stats/' },
];

export const homeCards = [
  {
    title: 'Blog',
    description: '记录我的技术文章、学习笔记和长期思考。',
    href: '#',
    status: '即将上线',
  },
  {
    title: 'Projects',
    description: '展示我的项目、工具、网站和一些有趣的作品。',
    href: '/projects/',
    status: '项目导航',
  },
  {
    title: 'GitHub',
    description: '查看我的代码、开源记录和项目实践。',
    href: 'https://github.com/Azek431',
    status: '外部链接',
  },
  {
    title: 'Links',
    description: '整理我的常用链接、联系方式和个人入口。',
    href: '/links/',
    status: '链接集合',
  },
];

export const projects = [
  {
    name: 'Azek431 Home',
    description:
      '我的个人主站与数字导航入口，用来集中展示个人介绍、项目作品、公开链接和后续内容导航。',
    status: '已上线',
    category: 'Website',
    href: 'https://azek431.pages.dev',
    tags: ['Astro', 'Cloudflare Pages', 'Homepage'],
    lastUpdated: '2026-06-04',
    accent: '#a8c8ff',
    links: [
      { label: '访问网站', href: 'https://azek431.pages.dev', primary: true },
      { label: 'GitHub', href: 'https://github.com/Azek431/azek431-home' },
      { label: 'Gitee 镜像', href: 'https://gitee.com/Azek431/azek431-home' },
    ],
  },
  {
    name: 'Azek创游世界资料库',
    description:
      'Azek创游世界资料库的项目官网与资料入口，用于展示项目介绍、资料内容、使用说明和后续更新信息。',
    status: '已上线',
    category: 'Docs',
    href: 'https://cysjdocs.pages.dev',
    tags: ['Website', 'Docs', 'Cloudflare Pages'],
    lastUpdated: '2026-06-03',
    accent: '#c4b5fd',
    links: [
      { label: '访问官网', href: 'https://cysjdocs.pages.dev', primary: true },
      { label: 'GitHub', href: 'https://github.com/Azek431/cysj-data' },
      { label: 'Gitee 镜像', href: 'https://gitee.com/Azek431/cysj-data' },
    ],
  },
  {
    name: 'Azek431 Blog',
    description:
      '计划用于记录技术文章、学习笔记、开发过程和长期思考的个人博客项目，后续会作为独立仓库维护。',
    status: '计划中',
    category: 'Blog',
    href: '#',
    tags: ['Writing', 'Notes', 'Tech'],
    lastUpdated: '2026-05-20',
    accent: '#6ee7b7',
  },
  {
    name: 'AI Experiments',
    description:
      '用于整理 AI 工具、提示词、自动化流程和相关技术实验内容，记录从想法到实践的探索过程。',
    status: '构想中',
    category: 'Lab',
    href: '#',
    tags: ['AI', 'Workflow', 'Experiment'],
    lastUpdated: '2026-05-15',
    accent: '#fcd34d',
  },
];

export const links = [
  {
    name: 'GitHub',
    description: '查看我的代码、项目记录和开源实践。',
    href: 'https://github.com/Azek431',
    category: 'Code',
    tags: ['GitHub', 'Projects'],
  },
  {
    name: 'Projects',
    description: '查看当前和后续整理的项目导航。',
    href: '/projects/',
    category: 'Site',
    tags: ['Navigation', 'Portfolio'],
  },
  {
    name: 'About',
    description: '了解我的兴趣方向、网站定位和个人内容规划。',
    href: '/about/',
    category: 'Profile',
    tags: ['About', 'Azek431'],
  },
  {
    name: 'Blog',
    description: '个人博客入口，后续用于记录文章、笔记和学习过程。',
    href: '#',
    category: 'Writing',
    tags: ['Blog', 'Notes'],
  },
  {
    name: 'Now',
    description: '记录最近在做什么、读什么、关注什么。',
    href: '/now/',
    category: 'Profile',
    tags: ['Now', 'Status'],
  },
  {
    name: 'Colophon',
    description: '技术栈 / 设计原则 / 受影响的站点。',
    href: '/colophon/',
    category: 'Profile',
    tags: ['Colophon', 'About'],
  },
  {
    name: 'Uses',
    description: '我日常写代码、跑自动化用的装备和工具。',
    href: '/uses/',
    category: 'Profile',
    tags: ['Uses', 'Tools'],
  },
];

export const recentUpdates = [
  {
    title: '升级主站视觉与微交互',
    desc: '重写设计 tokens、加入滚动入场动画、极光跟随、按钮流光等。',
    date: '2026-06-04',
    tag: '主站',
    href: '/',
  },
  {
    title: '优化项目卡片展示',
    desc: '把项目官网、GitHub 仓库和 Gitee 镜像入口合并到一张卡片，操作更简洁。',
    date: '2026-06-03',
    tag: '项目页',
    href: '/projects/',
  },
  {
    title: '完善移动端显示',
    desc: '优化小屏幕导航、标题、按钮、卡片和留白表现。',
    date: '2026-05-28',
    tag: '主站',
    href: '/',
  },
  {
    title: '整理 Git 忽略规则',
    desc: '完善 .gitignore，覆盖构建产物、依赖、日志、环境变量和系统文件。',
    date: '2026-05-25',
    tag: '配置',
    href: 'https://github.com/Azek431/azek431-home',
  },
];
