export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  changes: string[];
  tone?: 'major' | 'minor' | 'patch';
}

export const changelog: ChangelogEntry[] = [
  {
    version: 'v17',
    date: '2026-06-05',
    title: 'timeline 交互 + writing-card polish + features 行 hover',
    changes: [
      '主页 timeline 卡片 hover 时显示右下角箭头,背景渐入,左移 2px',
      'writing-card 升级:加 last-write 徽标 + writing-tag + live 状态点 + 终端底栏',
      '详情页 features 列表 hover 时整行背景渐变 + check 变亮',
    ],
    tone: 'minor',
  },
  {
    version: 'v16',
    date: '2026-06-05',
    title: 'hero 最后更新时间 + nav 快捷键 tooltip + 404 推荐项目',
    changes: [
      'hero eyebrow 加 "最后更新 2026-06-04 · 今天" 绿色脉冲徽标',
      'nav 链接 hover 时显示对应快捷键 (g h / g a / g p / g l / g n / g u / g c)',
      '404 推荐从 4 个固定链接改成 4 个真实项目详情链接',
    ],
    tone: 'minor',
  },
  {
    version: 'v15',
    date: '2026-06-05',
    title: 'quick-jump 扩到 6 项 + 详情页 accent 色彩传递 + 时间线 ago 标签',
    changes: [
      '主页 hero-side 快速跳转从 4 项扩到 6 项(加 Now / Uses)',
      '主页时间线每条加 "X 天前 / 月前 / 今天 / 昨天" 标签',
      '项目详情页右侧卡片继承 project.accent 颜色',
    ],
    tone: 'minor',
  },
  {
    version: 'v14',
    date: '2026-06-05',
    title: '新增 RSS feed 和 Footer 元信息',
    changes: [
      '新增 /rss.xml:RSS 2.0 feed',
      'BaseLayout head 加 RSS alternate link',
      'Footer 加建站日期 + 运行时长 + RSS badge + Sitemap 链接',
      '主页顶部加 .home-quicklinks',
    ],
    tone: 'major',
  },
  {
    version: 'v13',
    date: '2026-06-05',
    title: '移动端导航抽屉和面包屑组件',
    changes: [
      '新增 Breadcrumb 组件,7 个内部页接入',
      'Header 加汉堡按钮 + 滑出 drawer + scrim',
      'links 数据 4 -> 7 条',
    ],
    tone: 'major',
  },
  {
    version: 'v12',
    date: '2026-06-05',
    title: '新增 /colophon /uses 页面和项目详情分页导航',
    changes: [
      '新增 /colophon(技术栈 / 字体 / 4 条原则 / 5 个站点)',
      '新增 /uses(4 类装备)',
      '项目详情页底部加 prev/next 翻页',
    ],
    tone: 'major',
  },
  {
    version: 'v11',
    date: '2026-06-05',
    title: '新增 /now 页面和 about 仪表板',
    changes: [
      '新增 /now(4 张 working on + reading + tools + CTA)',
      'about 加 5 项技术熟练度条 + 4 格关注定位',
    ],
    tone: 'major',
  },
  {
    version: 'v10',
    date: '2026-06-05',
    title: '深度优化 UI 一锅端并新增项目详情子页',
    changes: [
      'UI 细节:滚动进度条 / 极光漂移 / 卡片光带 / 状态呼吸 / 焦点环',
      '新增 src/data/projects.ts / [slug].astro / sitemap.xml.ts / Roadmap.astro',
      '404 / index / projects 重写',
    ],
    tone: 'major',
  },
  {
    version: 'v9',
    date: '2026-05-25',
    title: '整理 Git 忽略规则',
    changes: [
      '完善 .gitignore,覆盖构建产物 / 依赖 / 日志 / 环境变量',
    ],
    tone: 'patch',
  },
  {
    version: 'v8',
    date: '2026-05-28',
    title: '完善移动端显示',
    changes: [
      '优化小屏幕导航 / 标题 / 按钮 / 卡片和留白表现',
    ],
    tone: 'minor',
  },
  {
    version: 'v7',
    date: '2026-06-03',
    title: '优化项目卡片展示',
    changes: [
      '把项目官网 / GitHub 仓库 / Gitee 镜像入口合并到一张卡片',
    ],
    tone: 'minor',
  },
  {
    version: 'v6',
    date: '2026-06-04',
    title: '升级主站视觉与微交互',
    changes: [
      '重写设计 tokens',
      '加入滚动入场动画 / 极光跟随 / 按钮流光',
    ],
    tone: 'major',
  },
  {
    version: 'v5',
    date: '2025-10-12',
    title: '主站起步 - Azek431 Home 第一版',
    changes: [
      '完成 Azek431 Home 第一版',
      '接入 Cloudflare Pages 自动部署',
    ],
    tone: 'major',
  },
];
