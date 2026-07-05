import { sitePages, links, siteConfig } from './site';
import { projectDetails } from './projects';
import { changelog } from './changelog';

export interface SearchItem {
  title: string;
  desc: string;
  href: string;
  category: 'Page' | 'Project' | 'Link' | 'Update' | 'Changelog';
  tags?: string[];
  extra?: string; // 额外可搜索文本，不展示但提升命中
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

// 页面索引 — 为每个页面补充额外可搜索文本
const pageExtra: Record<string, string> = {
  '/': '个人主页 数字空间 导航入口',
  '/about/': 'Azek431 兴趣方向 AI 网站搭建 软件开发 长期学习',
  '/projects/': '项目列表 已上线 计划中 构想中',
  '/links/': '链接集合 GitHub Gitee 外部入口',
  '/now/': '现在进行时 近期关注 正在学习',
  '/uses/': '装备 硬件 编辑器 浏览器 AI 工具 开发环境',
  '/colophon/': '技术栈 Astro TypeScript CSS Cloudflare 设计原则',
  '/changelog/': '更新记录 版本迭代 发布日志',
  '/stats/': '统计数据 访问量 项目数 构建信息',
  '/search/': '搜索 站内搜索 全文检索',
  '/blog/': '博客 技术文章 学习笔记 长期思考',
};

const pageItems: SearchItem[] = [
  ...sitePages.map<SearchItem>((n) => ({
    title: n.label,
    desc: navDescriptions[n.href] || '',
    href: n.href,
    category: 'Page' as const,
    extra: pageExtra[n.href],
  })),
  {
    title: 'GitHub 仓库',
    desc: 'Azek431 在 GitHub 上的代码和项目记录。',
    href: siteConfig.github,
    category: 'Link',
    extra: '代码开源 GitHub 仓库',
  },
  {
    title: 'RSS 订阅',
    desc: '主站 RSS feed,订阅最新更新。',
    href: '/rss.xml',
    category: 'Link',
    extra: 'RSS feed 订阅 更新通知',
  },
  {
    title: '站点地图',
    desc: 'XML sitemap,搜索引擎用。',
    href: '/sitemap.xml',
    category: 'Link',
    extra: 'sitemap XML 搜索引擎 SEO',
  },
];

// 项目索引 — 整合所有可用字段
const projectItems: SearchItem[] = projectDetails.map((p) => {
  // 拼接长描述、特性、亮点为额外可搜索文本
  const parts: string[] = [];
  if (p.longDescription) parts.push(p.longDescription);
  if (p.features) parts.push(...p.features);
  if (p.highlights) parts.push(...p.highlights.map((h) => `${h.label} ${h.value}`));
  const extraText = parts.join(' ');

  return {
    title: p.title,
    desc: p.description,
    href: '/projects/' + p.slug + '/',
    category: 'Project' as const,
    tags: p.tags,
    extra: extraText,
  };
});

const linkItems: SearchItem[] = links.map((l) => ({
  title: l.name,
  desc: l.description,
  href: l.href,
  category: 'Link' as const,
  tags: l.tags,
}));

// 更新日志索引 — 纳入全部 changes
const changelogItems: SearchItem[] = changelog.map((c) => ({
  title: c.title,
  desc: c.changes[0] || '',
  href: '/changelog/#' + c.version,
  category: 'Changelog' as const,
  tags: [c.version, c.date, c.tone || 'minor'],
  extra: c.changes.slice(1).join(' ') + ' ' + c.title,
}));

export const searchItems: SearchItem[] = [
  ...pageItems,
  ...projectItems,
  ...linkItems,
  ...changelogItems,
];
