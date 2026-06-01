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
];

export const projectCards = projectDetails.map((project) => ({
  name: project.title,
  description: project.description,
  status: project.status,
  category: project.category,
  href: `/projects/${project.slug}/`,
  tags: project.tags,
}));
