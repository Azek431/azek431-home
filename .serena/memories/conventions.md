# Conventions — Azek431.top

## Code Style

- TypeScript 数据配置优先于页面硬编码
- Astro 页面只负责布局和渲染，不含复杂逻辑
- 组件保持通用，可跨页面复用
- 命名：驼峰（TS）、短横线（CSS）、PascalCase（组件）

## Data Architecture

- `src/data/site.ts` 是唯一内容配置中心
- 页面只 import site.ts，不在页面内重复定义数据
- 不要在新数组创建后忘记页面读取它

## Component Rules

- 一个项目 = 一张卡片（不拆分多卡）
- 外部链接必须加 `rel="noopener noreferrer"`
- 禁止在 `<a>` 内嵌套 `<a>`
- 多按钮卡片用 `<article>` 包裹内部 `<a>` 按钮

## CSS Rules

- 保持深色科技感风格，不擅自改白色主题
- 背景必须用 `background-color` 而非仅 `background`
- 保留 `prefers-reduced-motion` 和 `focus-visible`
- 保留老内核深色背景 fallback
- 移动端优先适配

## Content Rules

- 品牌名统一 `Azek431`
- 用户可见内容默认中文
- 手动维护，不自动抓取 GitHub/Gitee API
- Header 导航保持 4-5 个主入口

## Anti-patterns (DON'T)

- 不要引入 React/Vue/Svelte
- 不要自动读取 GitHub 仓库/README/Releases
- 不要在后端/数据库/登录系统
- 不要一次新增大量页面
- 不要重写全局样式
