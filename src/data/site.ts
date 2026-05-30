export const siteConfig = {
  name: 'Azek431',
  title: 'Azek431 的个人主站',
  description:
    'Azek431 的个人主站与导航入口，用于整理个人介绍、项目入口、学习记录和公开链接。',
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
  {
    label: '首页',
    href: '/',
  },
  {
    label: '关于',
    href: '/about/',
  },
  {
    label: '项目',
    href: '/projects/',
  },
  {
    label: '链接',
    href: '/links/',
  },
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
      '我的个人主站与导航入口，用来整理个人介绍、项目入口、公开链接和后续内容导航。',
    status: '构建中',
    category: 'Website',
    href: '/',
    tags: ['Astro', 'Homepage', 'Navigation'],
  },
  {
    name: 'Azek431 Blog',
    description: '计划用于记录技术文章、学习笔记、开发过程和长期思考的个人博客项目。',
    status: '计划中',
    category: 'Blog',
    href: '#',
    tags: ['Writing', 'Notes', 'Tech'],
  },
  {
    name: 'Project Sites',
    description: '用于承载不同项目的独立介绍页面，让每个项目都有更清晰的展示入口。',
    status: '规划中',
    category: 'Projects',
    href: '#',
    tags: ['Showcase', 'Portfolio', 'Docs'],
  },
  {
    name: 'AI Experiments',
    description: '用于整理 AI 工具、提示词、自动化流程和相关技术实验内容。',
    status: '构想中',
    category: 'Lab',
    href: '#',
    tags: ['AI', 'Experiment', 'Workflow'],
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
];
