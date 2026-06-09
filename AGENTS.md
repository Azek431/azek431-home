# AGENTS.md

本文件用于帮助 Codex / AI 代码助手深入理解 `azek431-home` 项目。

在修改本仓库之前，必须先阅读本文件，再阅读当前仓库中的真实代码。不要只根据历史记忆、旧上下文、通用模板或猜测修改项目。

本项目的核心目标是：

> 让 `azek431-home` 成为 Azek431 长期使用的个人数字主站：稳定、清晰、轻量、好维护、有个人风格，并能逐步连接未来的博客、项目官网、文档站、工具站和 AI 实验内容。

---

## 1. 项目一句话总结

`azek431-home` 是 Azek431 的个人主站与数字导航入口。

它不是后台系统，不是复杂 Web App，不是单纯博客，也不是临时实验仓库。

它应该是一个长期维护的静态个人网站，用来集中展示：

- Azek431 是谁。
- Azek431 在做什么。
- Azek431 有哪些项目。
- 哪些项目已经上线。
- 哪些项目正在规划。
- GitHub / Gitee / 项目官网等公开入口。
- 未来博客、文档站、工具站、AI 实验等内容入口。

项目主题可以理解为：

**Azek431 Digital Nexus**

含义是：Azek431 的个人数字连接中枢。

这个网站应该像一个清晰、稳定、有科技感的个人基地，把分散的项目、链接、资料、想法和未来内容连接起来。

---

## 2. 项目当前阶段

当前项目已经完成基础建设，正在进入“内容完善 + UI 收口 + 长期维护”阶段。

当前阶段重点不是继续疯狂加功能，而是：

- 保持网站稳定。
- 保持代码轻量。
- 保持导航清晰。
- 保持页面层级明确。
- 保持项目页不混乱。
- 保持移动端体验良好。
- 让内容更真实、更像 Azek431 本人的个人主站。
- 避免 AI 一次性加入过多页面、脚本、统计、自动化和复杂结构。

当前应优先做：

1. 收口项目展示结构。
2. 保持“一个项目一张卡片”。
3. 优化 About 页面文案。
4. 优化 Links 页面分组。
5. 优化 Projects 页面信息层级。
6. 保持 README 与真实功能一致。
7. 继续完善 AGENTS.md，让 Codex 更稳定地理解项目。
8. 为未来博客和更多项目官网预留入口，但不要过早复杂化。

当前不应优先做：

1. 自动读取 GitHub 仓库。
2. 自动读取 README。
3. 自动读取 Releases。
4. 大量新增页面。
5. 大量新增统计组件。
6. 引入大型前端框架。
7. 引入数据库或后端。
8. 让主站变成复杂应用。

---

## 3. 项目身份与品牌

项目所有者：Azek431

推荐使用品牌名：

- `Azek431`

不推荐在网站主品牌里改成其他名称。

项目仓库名：

- `azek431-home`

该仓库是个人主站仓库，不应该混入多个无关项目的源码。

未来博客、工具站、项目官网、文档站可以独立仓库维护，主站只负责导航和展示入口。

品牌表达应该保持：

- 清晰。
- 真诚。
- 有科技感。
- 有个人风格。
- 不过度商业化。
- 不像公司官网。
- 不像临时测试页面。

---

## 4. 仓库、镜像与部署关系

推荐工作流：

1. 本地 Windows / VS Code 修改代码。
2. 提交到 GitHub。
3. Gitee 作为 GitHub 的国内镜像同步。
4. Cloudflare Pages 从 GitHub 自动部署。

重要原则：

- GitHub 是主仓库。
- Gitee 是镜像仓库。
- Cloudflare Pages 是部署平台。
- 本地 VS Code 是主要开发环境。
- 不要把 GitHub 和 Gitee 同时当成两个主仓库。
- 不要让 GitHub 和 Gitee 分叉。
- 不要为了 Gitee 镜像牺牲 GitHub 主仓库结构。
- 不要把 Cloudflare Pages 当成代码来源。
- 不要在多个设备同时改同一个文件后直接同步 `.git`。
- 如果出现 GitHub、Gitee、本地三方不一致，以 GitHub 主仓库为准。

推荐理解：

```txt
本地 VS Code  ->  GitHub 主仓库  ->  Cloudflare Pages 部署
                         |
                         └── Gitee 国内镜像
```

---

## 5. 技术栈与边界

当前项目技术栈：

- Astro
- TypeScript
- CSS
- pnpm
- Prettier
- Git
- GitHub
- Gitee
- Cloudflare Pages

项目类型：

- 静态网站
- 个人主页
- 项目导航
- 内容入口
- 轻量前端项目

默认技术策略：

- 优先使用 Astro 页面。
- 优先使用 TypeScript 数据配置。
- 优先使用原生 CSS。
- 优先保持静态构建。
- 优先手动维护内容。
- 少量必要 JS 可以接受。
- 不要引入复杂运行时。
- 不要把这个项目改造成大型前端应用。

除非用户明确要求，不要引入：

- React
- Vue
- Svelte
- 大型 UI 组件库
- 状态管理库
- 后端服务
- 数据库
- 登录系统
- 评论系统
- 自动 API 抓取系统
- GitHub 自动读取项目系统
- GitHub README 自动读取系统
- GitHub Releases 自动读取系统
- Gitee 自动读取系统
- 复杂动态项目详情页
- 大量客户端 JavaScript
- 复杂统计 SDK
- 不必要的动画库

本项目的默认原则是：

> 能用静态数据解决，就不要用 API；能用 Astro 和 CSS 解决，就不要引入框架；能手动维护，就不要过早自动化。

---

## 6. 项目的基本构造原理

这个项目的核心结构可以理解为：

```txt
数据配置  ->  Astro 页面  ->  通用组件  ->  全局样式  ->  静态构建  ->  Cloudflare Pages 部署
```

更具体地说：

1. `src/data/site.ts` 负责保存网站核心数据，例如站点配置、导航项、首页卡片、项目列表、链接列表。
2. `src/pages/*.astro` 负责具体页面，例如首页、关于页、项目页、链接页。
3. `src/components/*.astro` 负责复用组件，例如 Header、Footer、NavCard、PageHero。
4. `src/layouts/BaseLayout.astro` 负责统一 HTML 外壳、SEO 基础信息、Header、Footer 和全局样式引入。
5. `src/styles/global.css` 负责全站视觉风格，包括深色背景、卡片、按钮、移动端适配等。
6. `public/` 放静态资源和 Cloudflare Pages 配置文件，例如 `_headers`、`robots.txt`、favicon。
7. `pnpm build` 会把 Astro 静态站构建到 `dist/`。
8. Cloudflare Pages 从 GitHub 拉取代码并部署静态文件。

当前最重要的维护原则：

- 内容尽量放在 `src/data/site.ts`。
- 页面尽量只负责布局和渲染。
- 组件尽量保持通用。
- CSS 尽量保持统一风格。
- 不要为了小功能破坏整体结构。
- 不要因为一个页面需求重写全站架构。

---

## 7. 用户偏好

用户常用名称：Azek431

用户兴趣方向：

- AI
- 网站搭建
- GitHub 项目部署
- Cloudflare Pages
- Gitee 镜像
- 静态网站
- 软件开发
- 个人项目整理
- 多设备开发
- Linux / Windows 开发环境
- Codex / AI 辅助编程

用户偏好：

- 网站品牌统一使用 `Azek431`。
- 主站仓库名称使用 `azek431-home`。
- GitHub 作为主仓库。
- Gitee 作为国内镜像。
- Cloudflare Pages 作为部署平台。
- VS Code 作为主要编辑和提交工具。
- 日常使用 VS Code 的 Git 面板提交。
- 喜欢一步一步、可复制的 PowerShell 命令。
- 喜欢详细分析，但不喜欢 AI 乱改。
- 喜欢自然、口语化的中文提交信息。
- 不喜欢太正式、太机器化的提交标题。
- 不喜欢 writing block / 写作模式。
- 输出代码、配置、Markdown、README、`.gitignore`、`AGENTS.md` 时，必须使用普通 Markdown 代码块。
- 日常小改不需要默认建议 `pnpm build`。
- 用户通常开着 `pnpm dev` 实时预览。
- 只有较大结构改动、依赖变化、构建配置变化、部署前检查时，才建议 `pnpm build`。

用户不喜欢：

- 过度工程化。
- 一次性加太多页面。
- 项目页堆一堆重复入口。
- 自动抓取 GitHub 项目导致不可控。
- UI 很炫但结构混乱。
- Header 导航塞得太满。
- 每次小改都建议构建。
- 提交信息太官方、太生硬。
- 复制 Markdown 时格式被破坏。
- AI 不看现有代码就直接重写。
- 还没确认真实代码状态就给大规模方案。
- 把简单问题做成复杂系统。

---

## 8. 提交信息风格

用户偏好自然中文提交信息。

推荐标题：

```txt
整理一下项目展示卡片
优化一下移动端 UI
修一下项目页数据结构
添加 Codex 项目说明文件
整理一下链接入口
优化一下关于页面文案
收口一下站点页面结构
更新一下项目说明
调整一下项目卡片按钮
清理一下无用页面样式
补充一下项目维护说明
```

避免：

```txt
feat: implement advanced project metadata system
refactor: massive architecture overhaul
update files
fix bug
优化项目
```

提交说明可以详细，但标题要自然，不要太像机器生成。

用户通常使用 VS Code Git 面板提交，所以很多时候只需要给提交标题和说明，不要强制要求命令行提交。

推荐提交说明格式：

```txt
整理一下项目展示卡片

这次主要优化 Projects 页面的项目展示方式。

- 保持一个项目只显示一张卡片
- 把官网、GitHub 和 Gitee 镜像合并到同一张卡片里
- 调整项目说明和标签，让项目入口更清晰
- 保持项目数据手动维护，避免自动抓取导致不稳定
```

---

## 9. 项目设计理念

这个网站应该是一个“个人数字入口”，不是功能堆叠场。

核心理念：

- 访问者一进来就知道这是 Azek431 的个人主站。
- 首页建立第一印象。
- 关于页说明 Azek431 是谁、在做什么、关注什么。
- 项目页展示真实项目和未来计划。
- 链接页聚合常用入口。
- README 给开发者和自己看。
- AGENTS.md 给 AI 代码助手看。
- 主站负责导航和连接，不承担所有复杂内容。

长期方向：

- 主站保持稳定。
- 项目逐步增加。
- 博客未来可以独立成仓库。
- 每个重要项目未来可以有自己的官网或文档站。
- 主站负责导航，不把所有内容塞进一个仓库。
- 不要把主站变成混乱的实验场。
- 不要让 UI 炫技超过内容本身。
- 不要让自动化超过可维护性。

判断一个改动是否适合本项目，可以问：

1. 它是否让网站更清晰？
2. 它是否让维护更简单？
3. 它是否符合个人主站定位？
4. 它是否会让页面变乱？
5. 它是否引入了不必要的复杂度？
6. 它是否符合 Azek431 的长期使用需求？

---

## 10. 当前推荐信息架构

顶部导航应该保持简洁。

推荐顶部导航：

- 首页
- 关于
- 项目
- 链接
- GitHub

不要把所有页面都塞到顶部导航。

如果存在这些次级页面：

- Now
- Uses
- Changelog
- Stats
- Colophon
- RSS

推荐放在：

- Links 页面。
- Footer。
- README。
- 次级入口区域。

不要让 Header 过度拥挤。

页面职责：

- 首页：建立第一印象，说明网站是什么。
- 关于：介绍 Azek431 和网站定位。
- 项目：展示项目，不堆重复链接。
- 链接：聚合入口。
- README：说明仓库。
- AGENTS.md：指导 AI。
- 其他页面：谨慎保留，作为补充内容。

不推荐的信息架构：

```txt
Header 里塞：首页、关于、项目、链接、Now、Uses、Stats、Changelog、Colophon、RSS、GitHub
```

推荐的信息架构：

```txt
Header：只放主入口
Links：放次级入口
Footer：放低优先级入口
Projects：只展示项目
```

---

## 11. 重要目录结构

实际结构可能变化，修改前必须查看真实文件。

常见结构如下：

```txt
azek431-home/
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ _headers
│
├─ src/
│  ├─ components/
│  │  ├─ Footer.astro
│  │  ├─ Header.astro
│  │  ├─ NavCard.astro
│  │  └─ PageHero.astro
│  │
│  ├─ data/
│  │  └─ site.ts
│  │
│  ├─ layouts/
│  │  └─ BaseLayout.astro
│  │
│  ├─ pages/
│  │  ├─ 404.astro
│  │  ├─ about.astro
│  │  ├─ index.astro
│  │  ├─ links.astro
│  │  └─ projects.astro
│  │
│  └─ styles/
│     └─ global.css
│
├─ README.md
├─ AGENTS.md
├─ astro.config.mjs
├─ package.json
├─ pnpm-lock.yaml
└─ tsconfig.json
```

如果仓库中出现了新页面，例如：

- `now.astro`
- `uses.astro`
- `stats.astro`
- `changelog.astro`
- `colophon.astro`
- RSS 路由
- 项目详情页

请先判断它们是否仍符合当前方向。

当前优先级不是“页面越多越好”，而是“结构越清楚越好”。

---

## 12. 核心文件职责

### `src/data/site.ts`

这是当前最重要的数据配置文件。

通常包含：

- `siteConfig`
- `navItems`
- `homeCards`
- `projects`
- `links`

添加项目时，优先修改 `projects` 数组。

添加链接时，优先修改 `links` 数组。

添加首页卡片时，优先修改 `homeCards` 数组。

不要在页面里重复硬编码相同内容。

不要随意创建没人读取的新数组，例如：

```ts
export const cysjdocs = [...]
```

除非同时创建页面或组件去读取它。

当前推荐：项目页只读取 `projects`。

`site.ts` 的理想角色是：

```txt
网站内容配置中心
```

不应该把复杂业务逻辑、API 请求、DOM 操作写进 `site.ts`。

---

### `src/pages/projects.astro`

这是项目展示页。

当前推荐方向：

- 手动维护项目列表。
- 一个项目只显示一张卡片。
- 官网、GitHub、Gitee 镜像应该作为同一张卡片里的多个链接。
- 不要把一个项目拆成多张卡。
- 不要自动读取 GitHub 仓库。
- 不要自动读取 README。
- 不要自动读取 Releases。
- 不要创建复杂动态项目详情页，除非用户再次明确要求。

项目页的目标是清晰展示项目，而不是堆链接。

理想结构：

```txt
页面标题
页面说明
项目卡片列表
```

不推荐在项目页里加入：

- 复杂筛选系统。
- 自动 GitHub 抓取。
- 大量统计。
- 复杂动态图表。
- 过多 inline script。
- 和项目展示无关的内容。

---

### `src/components/NavCard.astro`

这是通用卡片组件。

可能用于：

- 首页卡片
- 项目卡片
- 链接卡片
- 占位卡片

它应该支持：

- `title`
- `description`
- `href`
- `status`
- `category`
- `tags`
- 可选 `links`

对于项目卡片，如果存在 `links`，应该支持多个按钮，例如：

- 访问官网
- GitHub
- Gitee 镜像

重要：

- 不要让 `NavCard` 只服务一个页面。
- 修改 `NavCard` 后必须检查首页、项目页、链接页是否仍正常。
- 外部链接必须使用 `rel="noopener noreferrer"`。
- 占位链接应使用 `href: '#'`。
- `href: '#'` 应显示“即将开放”或类似占位状态。
- 不要在 `<a>` 里面嵌套 `<a>`。
- 如果卡片需要多个链接，应该使用非链接容器，例如 `<article>`，再在内部放多个 `<a>` 按钮。

错误示例：

```astro
<a class="card" href="/project">
  <a href="https://github.com/example">GitHub</a>
</a>
```

正确方向：

```astro
<article class="card">
  <h3>项目名称</h3>
  <p>项目说明</p>
  <div class="card-actions">
    <a href="https://example.com">访问官网</a>
    <a href="https://github.com/example">GitHub</a>
  </div>
</article>
```

---

### `src/layouts/BaseLayout.astro`

这是全站基础布局。

它通常负责：

- HTML 基础结构。
- 页面标题。
- 页面描述。
- favicon。
- `theme-color`。
- `color-scheme`。
- Header。
- Footer。
- main 内容区域。
- 全局样式引入。
- 深色背景 fallback。

不要破坏它的统一结构。

不要删除深色背景兜底。

不要在 `BaseLayout.astro` 里塞入某个单独页面才需要的大量逻辑。

---

### `src/styles/global.css`

这是全局样式文件。

它控制：

- CSS 变量。
- 深色背景。
- 蓝紫渐变。
- 页面布局。
- Header。
- Footer。
- Hero。
- Section。
- Card。
- Button。
- 移动端适配。
- focus-visible。
- prefers-reduced-motion。
- 老内核背景兜底。
- 项目卡片按钮样式。

修改时注意：

- 保持深色科技感。
- 保持页面可读性。
- 不要突然改成白色主题。
- 不要过度动画。
- 不要让子页面背景变白。
- 不要无限堆 CSS。
- 不要删掉移动端兼容补丁。
- 不要只为了一个页面写大量全局样式。

如果 CSS 继续增长，应优先收口而不是继续堆叠。

CSS 优化优先级：

1. 先减少重复。
2. 再统一命名。
3. 再优化移动端。
4. 再调整视觉细节。
5. 最后才考虑拆文件。

不要为了“看起来更高级”而添加大量难维护的特效。

---

### `public/_headers`

Cloudflare Pages 响应头配置文件。

不要删除。

它用于基础安全响应头，例如：

```txt
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  X-Frame-Options: DENY
```

修改后可以通过线上响应头检查是否生效。

---

### `public/robots.txt`

保持简单有效：

```txt
User-agent: *
Allow: /
```

---

## 13. 项目页核心规则

项目页必须清晰。

核心规则：

**一个项目 = 一张卡片**

错误方向：

```txt
A 项目官网
A 项目 GitHub
A 项目 Gitee
B 项目官网
B 项目 GitHub
B 项目 Gitee
```

这种会让页面很乱。

正确方向：

```txt
A 项目
  [访问官网] [GitHub] [Gitee 镜像]

B 项目
  [访问官网] [GitHub] [Gitee 镜像]
```

推荐项目对象格式：

```ts
{
  name: '项目名称',
  description:
    '项目介绍，写清楚项目是做什么的、当前状态是什么、解决什么问题。',
  status: '已上线',
  category: 'Website',
  href: 'https://example.pages.dev',
  tags: ['Website', 'Docs', 'Cloudflare Pages'],
  links: [
    {
      label: '访问官网',
      href: 'https://example.pages.dev',
      primary: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Azek431/example',
    },
    {
      label: 'Gitee 镜像',
      href: 'https://gitee.com/Azek431/example',
    },
  ],
}
```

计划中项目格式：

```ts
{
  name: '项目名称',
  description:
    '这个项目正在规划中，后续会补充官网、仓库、功能说明和开发记录。',
  status: '计划中',
  category: 'Idea',
  href: '#',
  tags: ['Planning', 'Future', 'Project'],
}
```

---

## 14. 当前推荐项目内容

项目页可以优先保留这些项目。

### Azek431 Home

定位：

- 当前个人主站。
- 数字导航入口。
- 项目展示中心。
- 未来内容入口。

推荐链接：

- 访问网站。
- GitHub。
- Gitee 镜像。

### Azek创游世界资料库

定位：

- 项目资料库。
- 文档入口。
- 官网入口。
- 内容说明站。

推荐链接：

- 访问官网。
- GitHub。
- Gitee 镜像。

### Azek431 Blog

定位：

- 未来个人博客。
- 技术文章。
- 学习笔记。
- 长期思考。

状态：

- 计划中。

### AI Experiments

定位：

- AI 工具探索。
- 提示词实验。
- 自动化流程。
- 技术实践记录。

状态：

- 构想中或计划中。

---

## 15. Links 页面规则

Links 页面应该是“入口聚合页”，不是杂乱链接列表。

推荐分组方向：

### Main

- GitHub
- Gitee
- 当前网站

### Site

- Projects
- About
- Blog

### Extra

- Now
- Uses
- Changelog
- Colophon
- Stats

原则：

- 项目相关链接尽量放在 Projects。
- 通用入口放在 Links。
- Header 保持简洁。
- Footer 可放低优先级入口。
- Links 页面可以承接那些不适合放进 Header 的次级页面。

Links 页面不应该重复 Projects 页面已经承担的所有项目链接。

---

## 16. About 页面规则

About 页面应该说明：

- Azek431 是谁。
- Azek431 关注什么。
- 这个网站为什么存在。
- 这里会展示什么内容。
- 未来会继续做什么。

语气：

- 真诚。
- 清晰。
- 温和。
- 不要太商业化。
- 不要太夸张。
- 不要像公司官网。

可以体现：

- 对 AI 的兴趣。
- 对网站搭建的兴趣。
- 对 GitHub 项目的兴趣。
- 对长期学习和项目沉淀的关注。
- 这个网站是一个持续成长的个人数字空间。

About 页面应该像“个人介绍”，不是“企业品牌介绍”。

---

## 17. 首页规则

首页负责建立第一印象。

首页应该快速说明：

- 这是 Azek431 的个人主站。
- 这里可以进入项目、链接、关于、未来博客。
- 网站整体是数字导航入口。
- 访问者可以从这里了解 Azek431 和相关项目。

首页不要塞太多复杂功能。

首页卡片建议保持 3 到 6 个，不要过多。

首页可以包含：

- Blog
- Projects
- GitHub
- Links
- About
- 主要项目入口

但不要把首页变成完整项目列表。

首页最重要的是：

- 清楚。
- 好看。
- 有风格。
- 让人知道下一步点哪里。

---

## 18. UI 风格规则

当前网站风格应该保持：

- 深色。
- 科技感。
- 蓝紫渐变。
- 卡片式布局。
- 圆角。
- 轻微玻璃质感。
- 清晰信息层级。
- 移动端友好。
- 简洁，不压迫。

好的优化方向：

- 更好的间距。
- 更清晰的卡片层级。
- 更好的按钮布局。
- 更好的移动端卡片排列。
- 更自然的 hover / focus 状态。
- 更清晰的项目和链接分组。
- 更好的 About 文案。
- 更好的 Projects 信息架构。
- 更少但更有效的页面入口。

不推荐方向：

- 过多动画。
- 过多页面。
- 过多 localStorage 小组件。
- 复杂仪表盘。
- 假统计。
- 白色主题。
- 大型视觉重构。
- 加很多炫技效果。
- 顶部导航塞太满。
- 让页面变成实验功能集合。

视觉优化应该服务内容，而不是压过内容。

---

## 19. 移动端与旧内核兼容

用户非常关注手机端体验。

已知重点：

- 老内核浏览器访问子页面时可能背景变白。
- 页面切换时不应出现持续白底。
- 移动端导航不能拥挤。
- 卡片不能太密。
- 按钮要易点击。
- 标题不能太大导致挤压。
- 深色背景必须稳定。

修改 CSS 时必须注意：

- 保留 `html` 和 `body` 的深色背景兜底。
- 保留 `theme-color`。
- 保留 `color-scheme`。
- 保留深色背景 fallback。
- 不要让背景完全依赖 CSS 变量。
- 不要让背景完全依赖 `background` 简写。
- 子页面也必须保持深色。
- 保留 `prefers-reduced-motion`。
- 保留 `focus-visible`。
- 保留移动端按钮和卡片可点击性优化。

如果修改背景相关 CSS，必须特别小心。

---

## 20. README 维护规则

README 应该描述真实项目状态。

如果项目结构变化，README 也要考虑同步。

README 可以包含：

- 项目介绍。
- 项目主题。
- 项目用途。
- 技术栈。
- 页面说明。
- 目录结构。
- 本地开发方式。
- 如何添加项目。
- GitHub / Gitee / Cloudflare 关系。
- Syncthing 注意事项。
- 后续规划。

不要让 README 描述已经删除的功能。

例如，如果已经放弃自动读取 GitHub 项目，就不要继续写：

- 自动读取 GitHub 仓库。
- 自动读取 README。
- 自动读取 Releases。
- 动态项目详情页。

README 要和真实代码一致。

---

## 21. AGENTS.md 维护规则

本文件用于长期指导 AI，不是临时日志。

适合写入：

- 项目定位。
- 用户偏好。
- 技术栈。
- 目录结构。
- 重要文件说明。
- 项目维护原则。
- 不要做的事情。
- 常见错误。
- 提交偏好。
- 检查流程。

不适合写入：

- 临时调试日志。
- 已经废弃的长篇方案。
- 一次性命令输出。
- 过期错误。
- 大量重复 README 内容。
- 过长的历史记录。

如果用户反复纠正某个行为，应把规则写进本文件。

---

## 22. 安全规则

当前项目是静态站，风险较低，但仍需保持基本安全。

不要提交：

- `.env`
- API Key
- Token
- Cloudflare 密钥
- GitHub Token
- 私人信息
- `node_modules`
- `dist`
- `.astro`
- `.vite`
- `.cache`
- Syncthing 冲突文件

外链新窗口打开时使用：

```html
rel="noopener noreferrer"
```

不要随意引入第三方脚本。

不要随便使用 `innerHTML`。

如果未来渲染 Markdown，要注意 XSS 风险。

---

## 23. Syncthing 规则

用户使用 Syncthing，但曾遇到冲突文件。

可以清理：

- `*sync-conflict*`
- `.syncthing*.tmp`
- `*.part`
- `.stversions`

不要随便删除：

- `.stfolder`

推荐 Syncthing 忽略：

```txt
.git
node_modules
dist
.astro
.vite
.cache
.stversions
*sync-conflict*
.syncthing*.tmp
*.part
```

不要建议实时同步 `.git`。

GitHub 才是主要版本来源。

---

## 24. 格式化与编码

优先保持项目已有格式。

日常格式化：

```powershell
pnpm format
```

注意中文编码。

如果 PowerShell 或 `git show` 显示中文乱码，不一定代表文件坏了。应使用 VS Code 或 `Get-Content` 检查真实文件。

优先使用 UTF-8。

---

## 25. 日常检查命令

日常小改后使用：

```powershell
pnpm format
git status -sb
git diff --stat
```

查看具体文件：

```powershell
git diff -- src\data\site.ts
git diff -- src\pages\projects.astro
git diff -- src\components\NavCard.astro
git diff -- src\styles\global.css
```

清理同步冲突文件时可检查：

```powershell
Get-ChildItem -Force -Recurse -ErrorAction SilentlyContinue |
  Where-Object {
    $_.Name -like "*sync-conflict*" -or
    $_.Name -like ".syncthing*.tmp" -or
    $_.Name -like "*.part" -or
    $_.Name -eq ".stversions"
  } |
  Select-Object FullName
```

检查 Git 是否追踪同步垃圾：

```powershell
git ls-files |
  Select-String -Pattern "sync-conflict|\.syncthing|\.stversions|\.stignore|\.stfolder|\.part"
```

检查 Cloudflare 响应头：

```powershell
curl.exe -I https://azek431.top
```

---

## 26. 什么时候需要构建

不要每次都建议 `pnpm build`。

用户日常开着实时预览，普通小改不需要构建。

这些情况才建议：

- 修改 `astro.config.mjs`。
- 修改 `package.json`。
- 新增依赖。
- 删除依赖。
- 新增动态路由。
- 大改 `layouts`。
- 大改页面结构。
- 部署失败。
- 发布前最终检查。
- 用户明确要求。
- 实时预览和预期明显不一致。

此时运行：

```powershell
pnpm build
```

---

## 27. 修改流程

每次修改前：

1. 阅读本文件。
2. 阅读当前相关源代码。
3. 确认用户真正想要什么。
4. 优先做小范围修改。
5. 保持现有风格。
6. 避免过度设计。
7. 运行 `pnpm format`。
8. 检查 `git status -sb`。
9. 检查 `git diff --stat`。
10. 给出自然中文提交说明。

如果是大改，再建议 `pnpm build`。

---

## 28. UI 优化流程

如果用户要求优化 UI，先检查：

- `src/data/site.ts`
- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/projects.astro`
- `src/pages/links.astro`
- `src/components/NavCard.astro`
- `src/styles/global.css`

优先判断问题属于：

- 数据结构问题。
- 信息架构问题。
- 组件结构问题。
- CSS 表现问题。
- 移动端问题。
- 内容文案问题。

不要一上来就重写所有样式。

当前最常见问题是：

- 项目页卡片太多。
- 一个项目被拆成多个入口。
- 链接页没有分组。
- 顶部导航太拥挤。
- 新页面太多但入口不清晰。
- CSS 越堆越多。

优先收口，而不是继续加功能。

---

## 29. 常见错误与修正方向

### 错误 1：新增数组但页面不读取

错误示例：

```ts
export const cysjdocs = [...]
```

如果没有页面 import 它，它不会显示。

正确做法：

- 放入 `projects`。
- 或创建明确页面读取它。
- 当前推荐放入 `projects`。

### 错误 2：一个项目拆成多个卡片

错误：

- 项目官网一张卡。
- GitHub 一张卡。
- Gitee 一张卡。

正确：

- 一个项目一张卡。
- 多个入口放进 `links`。

### 错误 3：自动读取 GitHub 项目

当前不推荐。

原因：

- GitHub API 有限制。
- 国内网络不稳定。
- Gitee API 与 GitHub 不统一。
- 静态站不适合过早做动态聚合。
- 手动维护更稳定。

### 错误 4：顶部导航太多

Header 应保持简洁。

次级页面放 Links 或 Footer。

### 错误 5：UI 一次性加太多

Codex 不应该一口气新增很多页面、统计、筛选器、动画和脚本。

当前项目需要收口，不是继续堆功能。

### 错误 6：只看 README 不看代码

README 可能不是最新状态。

修改前必须查看真实源码，尤其是：

- `src/data/site.ts`
- `src/pages/projects.astro`
- `src/components/NavCard.astro`
- `src/styles/global.css`

### 错误 7：为了解决小问题重写大结构

如果用户只是想添加项目，不应该重写整个项目系统。

如果用户只是想优化项目页，不应该新增后端、API 或复杂详情页。

优先选择最小、稳定、可解释的修改。

---

## 30. 不要做的事情

除非用户明确要求，不要做：

- 自动抓取 GitHub 全部仓库。
- 自动读取 GitHub README。
- 自动读取 GitHub Releases。
- 自动读取 Gitee 仓库数据。
- 复杂项目详情动态页。
- 后端服务。
- 数据库。
- 登录系统。
- 评论系统。
- 大型前端框架。
- 大型 UI 库。
- 复杂状态管理。
- SPA 重构。
- 大量 localStorage 组件。
- 假装真实访问量的统计。
- 过多页面一锅端。
- 过多动画。
- 白色主题。
- 全站 CSS 重写。
- 每次小改都构建。
- force push。
- 重写 Git 历史。
- 提交生成目录。
- 提交密钥。
- 同步 `.git`。

---

## 31. 未来规划

未来可以逐步做，但不要一次性全部做。

### 短期

- 优化 Projects 页面。
- 保持一个项目一张卡。
- 优化 Links 页面分组。
- 优化 About 页面文案。
- 确保 README 与实际功能一致。
- 让 AGENTS.md 指导 Codex 不再乱加功能。

### 中期

- 准备个人博客独立仓库。
- 为重要项目建立独立项目官网。
- 给主站添加更清晰的项目入口。
- 加强移动端体验。
- 优化 SEO 基础信息。
- 准备正式域名。

### 长期

- 主站成为所有公开内容的稳定入口。
- 博客、工具站、文档站、项目官网形成独立生态。
- 主站只做导航和聚合，不承担所有复杂内容。
- 保持长期可维护，而不是短期炫技。

---

## 32. 当前最重要的战略方向

当前项目最重要的方向：

1. 保持静态站轻量。
2. 保持深色科技感风格。
3. 保持顶部导航简洁。
4. 项目页坚持一个项目一张卡。
5. 项目数据手动维护。
6. Links 页面做入口聚合。
7. About 页面更个人化。
8. README 和真实功能保持一致。
9. 不要自动抓取 GitHub。
10. 不要继续一锅端加功能。

这个网站应该越来越像 Azek431 的个人数字主站，而不是越来越像功能实验场。

---

## 33. 完成标准

一次修改完成时，应满足：

- 符合用户当前明确需求。
- 没有引入不必要依赖。
- 没有破坏深色主题。
- 没有让项目变复杂。
- 没有添加用户不想要的自动化。
- 没有破坏移动端体验。
- 代码已格式化。
- Git 状态清晰。
- 改动范围可解释。
- 提交说明自然中文。
- README 或 AGENTS.md 在必要时同步更新。

---

## 34. 如果不确定

如果不确定：

1. 先读真实代码。
2. 以当前仓库状态为准。
3. 不要猜项目结构。
4. 不要假设用户想要更多功能。
5. 优先选择更简单、更稳定的方案。
6. 明确说明不确定点。
7. 不要大范围重构。
8. 不要保留明显不符合当前方向的复杂功能。

---

## 35. 最终总结

`azek431-home` 是 Azek431 的个人主站。

它的长期目标是：

- 稳定。
- 清晰。
- 轻量。
- 好维护。
- 有个人风格。
- 适合展示项目。
- 适合连接未来内容。
- 适合 GitHub / Gitee / Cloudflare 工作流。
- 适合 Azek431 长期使用。

请优先做能让网站更清晰、更稳定、更像个人数字主站的修改。

不要为了炫技增加复杂度。

不要把项目变成自动化过度、页面过多、结构混乱的网站。

保持简单，保持清晰，保持 Azek431 的个人风格。
