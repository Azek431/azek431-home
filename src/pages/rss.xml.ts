import type { APIRoute } from 'astro';
import { projectDetails } from '../data/projects';

const siteOrigin = 'https://azek431.pages.dev';
const siteName = 'Azek431';
const siteDesc = 'Azek431 的个人主站与项目入口。';

const nowItems = [
  {
    title: '现在在做的事(2026-06)',
    link: '/now/',
    pubDate: new Date('2026-06-05T08:00:00Z'),
    description: '主站迭代 / 设计系统收尾 / Blog 仓库搭建 / AI 工作流实验。',
    category: 'Now',
  },
];

const projectItems = projectDetails.map((p) => ({
  title: p.title,
  link: '/projects/' + p.slug + '/',
  pubDate: new Date(p.lastUpdated + 'T00:00:00Z'),
  description: p.description,
  category: p.category,
}));

const allItems = [...nowItems, ...projectItems].sort(
  (a, b) => b.pubDate.getTime() - a.pubDate.getTime()
);

function escapeXml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function itemEntry(item: typeof allItems[number]) {
  return '  <item>\n' +
    '    <title>' + escapeXml(item.title) + '</title>\n' +
    '    <link>' + siteOrigin + item.link + '</link>\n' +
    '    <guid isPermaLink="true">' + siteOrigin + item.link + '</guid>\n' +
    '    <pubDate>' + item.pubDate.toUTCString() + '</pubDate>\n' +
    '    <description>' + escapeXml(item.description) + '</description>\n' +
    '    <category>' + escapeXml(item.category) + '</category>\n' +
    '  </item>';
}

export const GET: APIRoute = () => {
  const lastBuild = new Date().toUTCString();
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n' +
    '  <channel>\n' +
    '    <title>' + siteName + '</title>\n' +
    '    <link>' + siteOrigin + '</link>\n' +
    '    <description>' + escapeXml(siteDesc) + '</description>\n' +
    '    <language>zh-CN</language>\n' +
    '    <lastBuildDate>' + lastBuild + '</lastBuildDate>\n' +
    '    <atom:link href="' + siteOrigin + '/rss.xml" rel="self" type="application/rss+xml"/>\n' +
    allItems.map(itemEntry).join('\n') + '\n' +
    '  </channel>\n' +
    '</rss>\n';

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
