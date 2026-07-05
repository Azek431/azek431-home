# Tech Stack — Azek431.top

## Language

- TypeScript (strict mode)

## Build / Dev

- pnpm (package manager)
- Astro (static site generator)
- Prettier (code formatter)

## Deployment

- Cloudflare Pages (CI/CD from GitHub)
- Gitee mirror (domestic CDN)

## Source Structure

- `src/data/site.ts` — 全站内容配置（项目、链接、导航）
- `src/pages/*.astro` — Astro 页面
- `src/components/*.astro` — 复用组件
- `src/layouts/BaseLayout.astro` — 全站布局
- `src/styles/global.css` — 全局样式
- `public/` — 静态资源（favicon, \_headers, robots.txt）

## Dependencies (lightweight)

- 无大型前端框架（React/Vue/Svelte）
- 无状态管理库
- 无后端/数据库
- 纯静态站
