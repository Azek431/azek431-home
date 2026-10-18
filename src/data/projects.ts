export interface ProjectDetail {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  status: string;
  category: string;
  tags: string[];
  accent: string;
  websiteUrl?: string;
  githubUrl?: string;
  giteeUrl?: string;
  screenshotUrl?: string;
  features: string[];
  highlights: { label: string; value: string }[];
  lastUpdated: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: 'azek431-home',
    title: 'Azek431 Home',
    description: '个人主站与数字导航入口，用来集中展示个人介绍、项目作品、公开链接和后续内容导航。',
    longDescription:
      '作为整个个人生态的入口站点，主站重点在设计系统、动效、玻璃质感和持续维护的稳定性。域名 azek431.top，部署于 Cloudflare Pages。',
    status: '已上线',
    category: 'Website',
    tags: ['Astro', 'Cloudflare Pages', 'Personal Website'],
    accent: '#a8c8ff',
    websiteUrl: 'https://azek431.top',
    githubUrl: 'https://github.com/Azek431/azek431-home',
    giteeUrl: 'https://gitee.com/Azek431/azek431-home',
    screenshotUrl: '/screenshots/azek431-home.svg',
    features: [
      '完整设计 token（颜色 / 缓动 / 阴影 / 半径）',
      '滚动入场动画 + Header 收缩',
      '卡片 3D 倾斜 + 鼠标光晕追踪',
      '粒子点击反馈 + 极光背景跟随',
      '键盘快捷键 + 卡片标签跨页筛选',
    ],
    highlights: [
      { label: '构建时间', value: '~3s' },
      { label: '页面数', value: '16' },
      { label: 'CSS 体积', value: '~46KB' },
    ],
    lastUpdated: '2026-10-18',
  },
  {
    slug: 'autojsopen',
    title: 'AutoJsOpen',
    description:
      '面向小米澎湃OS的手机自动化开发平台：Jetpack Compose + Miuix KMP UI，内置 Rhino JS 引擎，目标接近 AutoJsPro / AutoJsX 的代码编辑体验。',
    longDescription:
      '完整复刻 AutoJsPro 的核心功能：双指缩放编辑器、行号对齐、触摸自动化、事件无障碍 API。当前处于 UI 全面重构阶段，采用 Miuix KMP 0.9.4 组件库，正在实现字体缩放和双指手势。',
    status: '开发中',
    category: 'Android App',
    tags: ['Jetpack Compose', 'Miuix KMP', 'Rhino JS', 'Android Automation'],
    accent: '#6ee7b7',
    githubUrl: 'https://github.com/Azek431',
    features: [
      'Jetpack Compose + Miuix KMP 0.9.4 UI 全栈',
      'Rhino 1.7.15 JS 引擎（console / device / files / timers）',
      'ACE 编辑器集成（字体缩放 12–40px 范围）',
      '双引擎架构：Rhino 主引擎 + Node.js 辅助引擎',
      '事件 / 无障碍 / 触摸自动化 API 实现中',
    ],
    highlights: [
      { label: '语言', value: 'Kotlin + JS' },
      { label: 'UI 框架', value: 'Compose + Miuix' },
      { label: '当前阶段', value: '字体缩放' },
    ],
    lastUpdated: '2026-10-12',
  },
  {
    slug: 'cysj-data',
    title: 'Azek创游世界资料库',
    description: '项目官网与资料入口，用于展示项目介绍、资料内容、使用说明和后续更新信息。',
    longDescription:
      '一个以资料整理为核心的项目官网，使用 Cloudflare Pages 部署，GitHub + Gitee 双镜像同步。',
    status: '已上线',
    category: 'Docs',
    tags: ['Website', 'Docs', 'Cloudflare Pages'],
    accent: '#c4b5fd',
    websiteUrl: 'https://cysjdocs.azek431.top',
    githubUrl: 'https://github.com/Azek431/cysj-data',
    giteeUrl: 'https://gitee.com/Azek431/cysj-data',
    features: [
      '资料分类展示 + 全文搜索',
      '响应式资料页 + 移动端优化',
      'GitHub / Gitee 镜像 自动部署',
      'Gitee 镜像同步提升国内访问速度',
    ],
    highlights: [
      { label: '资料条目', value: '40+' },
      { label: '部署平台', value: 'Cloudflare' },
      { label: '镜像', value: 'GitHub + Gitee' },
    ],
    lastUpdated: '2026-06-03',
  },
  {
    slug: 'azek431-blog',
    title: 'Azek431 Blog',
    description: '计划用于记录技术文章、学习笔记、开发过程和长期思考的个人博客项目。',
    longDescription:
      '后续会作为独立仓库维护，从主站统一跳转。计划包含文章列表、标签分类、全文搜索、RSS。',
    status: '计划中',
    category: 'Blog',
    tags: ['Writing', 'Notes', 'Tech'],
    accent: '#6ee7b7',
    features: [
      'Markdown 写作 + Git 提交',
      '标签 / 分类 / 全文搜索',
      'RSS 订阅 + Open Graph',
      '代码高亮 + 暗色 / 亮色主题',
    ],
    highlights: [
      { label: '状态', value: '规划中' },
      { label: '技术栈', value: 'Astro / MDX' },
      { label: '计划', value: 'Q3 2026' },
    ],
    lastUpdated: '2026-06-05',
  },
  {
    slug: 'ai-experiments',
    title: 'AI Experiments',
    description: '用于整理 AI 工具、提示词、自动化流程和相关技术实验内容。',
    longDescription:
      '一个实验性项目，专门承载 AI 工具评测、提示词工程、自动化脚本和小模型部署等尝试。',
    status: '构想中',
    category: 'Lab',
    tags: ['AI', 'Workflow', 'Experiment'],
    accent: '#fcd34d',
    features: [
      'AI 工具横评 + 实测记录',
      '提示词工程 + 工作流模板',
      '小型 agent 搭建笔记',
      '不同模型能力边界探索',
    ],
    highlights: [
      { label: '状态', value: '构想中' },
      { label: '记录数', value: '0' },
      { label: '形式', value: '未确定' },
    ],
    lastUpdated: '2026-06-05',
  },
];

export function getProjectBySlug(slug: string) {
  return projectDetails.find((p) => p.slug === slug);
}