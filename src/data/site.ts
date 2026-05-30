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
    description: '我的个人主站和导航入口，用来整理个人介绍、项目入口和公开链接。',
    status: '构建中',
  },
  {
    name: 'Azek431 Blog',
    description: '未来用于记录技术文章、学习笔记和长期思考的个人博客。',
    status: '计划中',
  },
  {
    name: 'Project Sites',
    description: '未来可以为不同项目创建独立展示页面或项目官网。',
    status: '计划中',
  },
];

export const links = [
  {
    name: 'GitHub',
    href: 'https://github.com/Azek431',
    description: '我的 GitHub 主页和项目记录。',
  },
  {
    name: 'Blog',
    href: '#',
    description: '个人博客入口，后续上线。',
  },
  {
    name: 'Projects',
    href: '/projects/',
    description: '查看我的项目导航。',
  },
];
