import type { APIRoute } from 'astro';
import { projectDetails } from '../data/projects';

const siteOrigin = 'https://azek431.pages.dev';

const staticRoutes = [
  { path: '/',          priority: 1.0, changefreq: 'weekly'  },
  { path: '/about/',    priority: 0.8, changefreq: 'monthly' },
  { path: '/projects/', priority: 0.9, changefreq: 'weekly'  },
  { path: '/links/',    priority: 0.7, changefreq: 'monthly' },
];

function urlEntry(loc: string, lastmod: string, priority: number, changefreq: string) {
  return '  <url>\n' +
    '    <loc>' + loc + '</loc>\n' +
    '    <lastmod>' + lastmod + '</lastmod>\n' +
    '    <changefreq>' + changefreq + '</changefreq>\n' +
    '    <priority>' + priority.toFixed(1) + '</priority>\n' +
    '  </url>';
}

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls: string[] = [];

  for (const r of staticRoutes) {
    urls.push(urlEntry(siteOrigin + r.path, today, r.priority, r.changefreq));
  }
  for (const p of projectDetails) {
    urls.push(urlEntry(
      siteOrigin + '/projects/' + p.slug + '/',
      p.lastUpdated || today,
      0.6,
      'monthly'
    ));
  }

  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.join('\n') + '\n' +
    '</urlset>\n';

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
