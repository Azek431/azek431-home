import { projectDetails } from './projects';

export const siteConfig = {
  name: 'Azek431',
  title: 'Azek431 的个人主站',
  description: 'Azek431 的个人主站与导航入口，用于整理个人介绍、项目入口、学习记录和公开链接。',
  author: 'Azek431',
  locale: 'zh-CN',
  url: 'https://azek431.pages.dev',
  github: 'https://github.com/Azek431',
  gitee: 'https://gitee.com/Azek431',
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
];

export const secondaryNavItems = [
  { label: 'Now', href: '/now/' },
  { label: 'Uses', href: '/uses/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Colophon', href: '/colophon/' },
  { label: 'Changelog', href: '/changelog/' },
  { label: 'Stats', href: '/stats/' },
  { label: 'Search', href: '/search/' },
];

export const sitePages = [...navItems, ...secondaryNavItems];

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

interface ProjectSummaryLink {
  label: string;
  href: string;
  primary?: boolean;
}

function projectLinks(project: (typeof projectDetails)[number]): ProjectSummaryLink[] {
  const links: ProjectSummaryLink[] = [];
  if (project.websiteUrl)
    links.push({ label: '访问网站', href: project.websiteUrl, primary: true });
  if (project.githubUrl) links.push({ label: 'GitHub', href: project.githubUrl });
  if (project.giteeUrl) links.push({ label: 'Gitee 镜像', href: project.giteeUrl });
  return links;
}

export const projects = projectDetails.map((project) => ({
  slug: project.slug,
  name: project.title,
  description: project.description,
  status: project.status,
  category: project.category,
  href: project.websiteUrl || '#',
  tags: project.tags,
  lastUpdated: project.lastUpdated,
  accent: project.accent,
  links: projectLinks(project),
}));

export const links = [
  {
    name: 'GitHub',
    description: '查看我的代码、项目记录和开源实践。',
    href: 'https://github.com/Azek431',
    category: 'Main',
    tags: ['GitHub', 'Projects'],
  },
  {
    name: 'Gitee',
    description: 'GitHub 主仓库的国内镜像入口。',
    href: 'https://gitee.com/Azek431',
    category: 'Main',
    tags: ['Gitee', 'Mirror'],
  },
  {
    name: '当前主站',
    description: 'Azek431 Home 的线上访问入口。',
    href: siteConfig.url,
    category: 'Main',
    tags: ['Homepage', 'Cloudflare'],
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
    category: 'Site',
    tags: ['About', 'Azek431'],
  },
  {
    name: 'Blog',
    description: '个人博客入口，后续用于记录文章、笔记和学习过程。',
    href: '#',
    category: 'Site',
    tags: ['Blog', 'Notes'],
  },
  {
    name: 'Now',
    description: '记录最近在做什么、读什么、关注什么。',
    href: '/now/',
    category: 'Extra',
    tags: ['Now', 'Status'],
  },
  {
    name: 'Uses',
    description: '我日常写代码、跑自动化用的装备和工具。',
    href: '/uses/',
    category: 'Extra',
    tags: ['Uses', 'Tools'],
  },
  {
    name: 'Changelog',
    description: '查看主站每一轮迭代的更新记录。',
    href: '/changelog/',
    category: 'Extra',
    tags: ['Changelog', 'Updates'],
  },
  {
    name: 'Stats',
    description: '查看主站项目、内容和本地访问统计。',
    href: '/stats/',
    category: 'Extra',
    tags: ['Stats', 'Site'],
  },
  {
    name: 'Colophon',
    description: '技术栈 / 设计原则 / 受影响的站点。',
    href: '/colophon/',
    category: 'Extra',
    tags: ['Colophon', 'About'],
  },
  {
    name: 'Search',
    description: '跨页面、项目、链接和更新日志搜索站内内容。',
    href: '/search/',
    category: 'Extra',
    tags: ['Search', 'Navigation'],
  },
  {
    name: 'RSS',
    description: '订阅主站项目和 Now 页面的最新更新。',
    href: '/rss.xml',
    category: 'Extra',
    tags: ['RSS', 'Feed'],
  },
  {
    name: 'Sitemap',
    description: '提供给搜索引擎使用的 XML 站点地图。',
    href: '/sitemap.xml',
    category: 'Extra',
    tags: ['Sitemap', 'SEO'],
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
    date: '2026-06-01',
    tag: '主站',
    href: '/',
  },
  {
    title: '整理 Git 忽略规则',
    desc: '完善 .gitignore，覆盖构建产物、依赖、日志、环境变量和系统文件。',
    date: '2026-06-01',
    tag: '配置',
    href: 'https://github.com/Azek431/azek431-home',
  },
];
