export interface ProjectDetail {
  slug: string;
  title: string;
  description: string;
  status: string;
  category: string;
  tags: string[];
  websiteUrl?: string;
  githubUrl?: string;
  giteeUrl?: string;
  repo?: {
    owner: string;
    name: string;
    branch: string;
    readmePath: string;
    githubApiBase: string;
    githubRawReadme: string;
    giteeRawReadme: string;
  };
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: 'azek431-home',
    title: 'Azek431 Home Website',
    description:
      'Azek431 的个人主站与数字导航入口，用于集中展示个人介绍、项目作品、公开链接和后续内容生态。',
    status: '已上线',
    category: 'Website',
    tags: ['Astro', 'Cloudflare Pages', 'Personal Website'],
    websiteUrl: 'https://azek431.pages.dev',
    githubUrl: 'https://github.com/Azek431/azek431-home',
    giteeUrl: 'https://gitee.com/Azek431/azek431-home',
  },
  {
    slug: 'azek431-home-repo',
    title: 'azek431-home Repository',
    description:
      'Azek431 个人主站的源码仓库，记录网站从初始化、组件拆分、移动端优化、部署配置到镜像同步的完整建设过程。',
    status: '自动读取',
    category: 'Repository',
    tags: ['GitHub', 'Gitee Mirror', 'Repository'],
    websiteUrl: 'https://azek431.pages.dev',
    githubUrl: 'https://github.com/Azek431/azek431-home',
    giteeUrl: 'https://gitee.com/Azek431/azek431-home',
    repo: {
      owner: 'Azek431',
      name: 'azek431-home',
      branch: 'main',
      readmePath: 'README.md',
      githubApiBase: 'https://api.github.com/repos/Azek431/azek431-home',
      githubRawReadme: 'https://raw.githubusercontent.com/Azek431/azek431-home/main/README.md',
      giteeRawReadme: 'https://gitee.com/Azek431/azek431-home/raw/main/README.md',
    },
  },
  {
    slug: 'azek431-blog',
    title: 'Azek431 Blog',
    description:
      '计划用于记录技术文章、学习笔记、开发过程和长期思考的个人博客项目，后续会作为独立仓库维护。',
    status: '计划中',
    category: 'Blog',
    tags: ['Writing', 'Notes', 'Tech'],
  },
  {
    slug: 'project-sites',
    title: 'Project Sites',
    description:
      '用于承载不同项目的独立介绍页面，让每个项目都有更清晰的官网入口、说明文档和展示页面。',
    status: '规划中',
    category: 'Showcase',
    tags: ['Portfolio', 'Docs', 'Projects'],
  },
  {
    slug: 'ai-experiments',
    title: 'AI Experiments',
    description:
      '用于整理 AI 工具、提示词、自动化流程和相关技术实验内容，记录从想法到实践的探索过程。',
    status: '构想中',
    category: 'Lab',
    tags: ['AI', 'Workflow', 'Experiment'],
  },
];

export const projectCards = projectDetails.map((project) => ({
  name: project.title,
  description: project.description,
  status: project.status,
  category: project.category,
  href: `/projects/${project.slug}/`,
  tags: project.tags,
}));
