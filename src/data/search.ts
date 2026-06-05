import { sitePages, links, recentUpdates, siteConfig } from './site';
import { projectDetails } from './projects';
import { changelog } from './changelog';

export interface SearchItem {
  title: string;
  desc: string;
  href: string;
  category: 'Page' | 'Project' | 'Link' | 'Update' | 'Changelog';
  tags?: string[];
}

const navDescriptions: Record<string, string> = {
  '/': '主站首页,介绍 Azek431 的个人数字空间。',
  '/about/': '关于我,介绍兴趣方向、内容规划和技术熟练度。',
  '/projects/': '项目展示,4 个项目的入口和详情。',
  '/links/': '公开链接集合,GitHub / 项目 / 关于 等入口。',
  '/now/': '现在在做的事,最近关注的方向、读的内容、用的工具。',
  '/uses/': '日常装备,硬件 / 编辑器 / 浏览器 / AI 工具。',
  '/colophon/': '致谢与设计,主站技术栈、设计原则、字体、灵感。',
  '/changelog/': '更新日志,所有版本迭代记录。',
  '/stats/': '主站数据,项目 / 迭代 / 时间 / 内容四个维度的指标。',
  '/search/': '站内搜索,跨页面、项目、链接、内容索引。',
  '/blog/': '博客入口,后续会接入独立的写作仓库。',
};

const pageItems: SearchItem[] = [
  ...sitePages.map<SearchItem>((n) => ({
    title: n.label,
    desc: navDescriptions[n.href] || '',
    href: n.href,
    category: 'Page' as const,
  })),
  {
    title: 'GitHub 仓库',
    desc: 'Azek431 在 GitHub 上的代码和项目记录。',
    href: siteConfig.github,
    category: 'Link',
  },
  {
    title: 'RSS 订阅',
    desc: '主站 RSS feed,订阅最新更新。',
    href: '/rss.xml',
    category: 'Link',
  },
  {
    title: '站点地图',
    desc: 'XML sitemap,搜索引擎用。',
    href: '/sitemap.xml',
    category: 'Link',
  },
];

const projectItems: SearchItem[] = projectDetails.map((p) => ({
  title: p.title,
  desc: p.description,
  href: '/projects/' + p.slug + '/',
  category: 'Project' as const,
  tags: p.tags,
}));

const linkItems: SearchItem[] = links.map((l) => ({
  title: l.name,
  desc: l.description,
  href: l.href,
  category: 'Link' as const,
  tags: l.tags,
}));

const updateItems: SearchItem[] = recentUpdates.map((u) => ({
  title: u.title,
  desc: u.desc,
  href: u.href,
  category: 'Update' as const,
  tags: [u.tag],
}));

const changelogItems: SearchItem[] = changelog.slice(0, 6).map((c) => ({
  title: c.title,
  desc: c.changes.slice(0, 2).join(' / '),
  href: '/changelog/#' + c.version,
  category: 'Changelog' as const,
  tags: [c.version, c.date, c.tone || 'minor'],
}));

export const searchItems: SearchItem[] = [
  ...pageItems,
  ...projectItems,
  ...linkItems,
  ...updateItems,
  ...changelogItems,
];
