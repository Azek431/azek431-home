azek431-home

"azek431-home" 是 Azek431 的个人主站与导航入口项目。

这个项目用于展示个人介绍、项目入口、常用链接、GitHub 主页以及后续其他公开内容入口。它不是一个复杂的后台系统，也不是单纯的博客项目，而是一个以“个人主页 + 导航中心”为核心定位的静态网站。

项目使用 Astro 构建，整体目标是保持页面简洁、加载快速、结构清晰，并方便后续继续扩展。

项目简介

这个仓库主要负责维护 Azek431 的个人主站页面。

当前网站包含首页、关于页、项目页和链接页，用于承载个人品牌展示、项目导航和常用入口整理。后续如果有博客、项目官网、文档站或其他独立内容，也可以从这个主站进行统一导航。

项目目前处于主站初版阶段，重点是先完成一个稳定、可访问、可维护的静态页面结构。

项目定位

"azek431-home" 的定位是：

- 个人主页
- 项目导航站
- GitHub 展示入口
- 常用链接集合
- 后续公开内容的统一入口
- 个人网站生态的主入口

这个项目更偏向“主站”和“导航页”，因此不会把所有内容都集中放在同一个仓库里。博客、项目官网、工具项目等内容更适合独立仓库维护，这样结构会更清晰，也方便他人单独查看。

当前页面

当前项目包含以下页面：

页面路径| 页面说明
"/"| 首页，展示个人介绍、主站定位和主要入口
"/about/"| 关于页，介绍个人方向和网站内容定位
"/projects/"| 项目页，用于展示当前和后续项目入口
"/links/"| 链接页，用于整理 GitHub、项目、博客等公开链接

这些页面都是静态页面，适合部署到 Cloudflare Pages、GitHub Pages、Vercel、Netlify 等静态托管平台。

技术栈

本项目主要使用以下技术：

技术| 说明
Astro| 静态网站框架，用于构建高性能内容型网站
pnpm| 包管理工具，用于安装和管理项目依赖
TypeScript| 提供更好的代码提示和类型支持
HTML / CSS| 页面结构与样式
Git| 本地版本管理
GitHub| 远程代码托管
Cloudflare Pages| 静态网站部署平台

选择 Astro 的主要原因：

- 适合个人主页、博客、文档和导航站
- 静态构建速度快
- 项目结构清晰
- 页面加载性能好
- 部署到 Cloudflare Pages 很方便
- 后续扩展博客、组件、页面都比较自然
- 不需要复杂后端即可完成主站需求

项目结构

当前项目结构大致如下：

azek431-home/
├─ public/
│  └─ 静态资源目录
│
├─ src/
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ about.astro
│  │  ├─ projects.astro
│  │  └─ links.astro
│  │
│  ├─ components/
│  │  └─ 组件目录
│  │
│  ├─ layouts/
│  │  └─ 布局目录
│  │
│  └─ assets/
│     └─ 本地资源目录
│
├─ astro.config.mjs
├─ package.json
├─ pnpm-lock.yaml
├─ tsconfig.json
├─ .gitignore
├─ .gitattributes
└─ README.md

其中比较重要的目录说明如下：

"src/pages"

Astro 使用基于文件的路由系统，"src/pages" 目录中的文件会自动生成对应页面。

例如：

src/pages/index.astro     → /
src/pages/about.astro     → /about/
src/pages/projects.astro  → /projects/
src/pages/links.astro     → /links/

"src/components"

用于放置可复用组件，例如顶部导航、页脚、卡片、按钮、项目展示块等。

当前项目仍处于初版阶段，后续可以逐步把页面中的重复结构拆分成组件，让项目更容易维护。

"src/layouts"

用于放置页面布局组件，例如统一的 HTML 结构、SEO 信息、Header、Footer、全局页面容器等。

当页面数量增加后，统一布局会让项目结构更清晰。

"public"

用于放置不会被 Astro 处理的静态资源，例如 favicon、头像、图片、图标等。

"dist"

构建后生成的静态文件目录。该目录由 "pnpm build" 自动生成，不需要提交到 Git 仓库。

本地开发

环境要求

建议使用：

Node.js 20 或更高版本
pnpm 9 或更高版本
Git
VS Code

当前项目使用 pnpm 管理依赖，因此建议统一使用 pnpm，不要在同一个项目中混用 npm、yarn 和 pnpm。

安装依赖

pnpm install

启动开发服务器

pnpm dev

启动后通常可以通过以下地址访问：

http://localhost:4321

开发服务器支持实时预览，修改页面后浏览器会自动刷新或更新。

构建项目

pnpm build

构建完成后，静态文件会生成到：

dist/

预览构建结果

pnpm preview

这个命令用于在本地预览构建后的生产版本页面。

常用命令

命令| 作用
"pnpm install"| 安装项目依赖
"pnpm dev"| 启动本地开发服务器
"pnpm build"| 构建生产环境静态文件
"pnpm preview"| 本地预览构建结果
"pnpm astro"| 执行 Astro CLI 命令

Git 管理说明

本项目使用 Git 进行版本管理，并托管在 GitHub。

建议每完成一个相对独立的修改后进行一次提交，例如：

- 更新首页内容
- 添加新页面
- 优化 README
- 调整样式
- 修复构建问题
- 优化项目结构

这样可以让每次修改都有清晰记录，也方便后续回滚和追踪。

换行符规则

由于项目可能会在 Windows 和 Linux 环境之间切换开发，因此仓库中使用 ".gitattributes" 统一换行符规则。

推荐策略：

普通源码文件：LF
Windows 脚本文件：CRLF
图片、压缩包等资源：二进制文件，不做文本转换

这样可以减少跨系统同步时出现无意义的 Git 变更。

忽略文件说明

项目中的 ".gitignore" 用于忽略不应该提交到仓库的文件，例如依赖目录、构建产物、缓存文件和本地环境变量。

常见不提交内容：

node_modules
dist
.astro
.cache
.vite
.env
.env.local
*.log

这些内容通常可以在本地重新生成，不应该进入 Git 仓库。

多设备开发说明

当前项目适合在多设备之间同步源码，但不建议同步依赖目录和构建产物。

推荐方式：

主力开发目录：本地硬盘
移动备份目录：U 盘
远程备份：GitHub
自动部署：Cloudflare Pages

不建议同步：

node_modules
dist
.astro
.cache
.vite
.env
.env.local

建议同步：

src
public
package.json
pnpm-lock.yaml
astro.config.mjs
tsconfig.json
README.md
.gitignore
.gitattributes
.git

其中 ".git" 是否同步取决于个人工作流。如果需要让 U 盘保留完整 Git 历史，可以同步 ".git"，但需要避免多台电脑同时修改同一个仓库。

部署说明

本项目适合部署到静态网站托管平台。

Cloudflare Pages 推荐配置：

配置项| 推荐值
Framework preset| Astro
Build command| "pnpm build"
Build output directory| "dist"
Root directory| "/"
Production branch| "main"

部署流程通常是：

本地开发
→ Git 提交
→ Push 到 GitHub
→ Cloudflare Pages 自动构建
→ 生成线上静态站点

由于本项目是静态网站，不需要后端服务器即可部署。

当前状态

当前项目已经完成：

- Astro 项目初始化
- 首页初版
- 关于页
- 项目页
- 链接页
- 本地开发环境
- 生产构建测试
- GitHub 仓库托管
- README 文档整理

当前项目重点是保持主站结构稳定，并逐步优化页面内容、组件结构和视觉体验。

设计方向

当前网站整体视觉方向偏向：

- 深色背景
- 科技感
- 简洁导航
- 卡片式布局
- 高级感渐变
- 清晰的信息层级
- 适合个人主页和项目展示

主站不追求复杂功能，而是优先保证：

- 打开速度快
- 页面结构清楚
- 视觉风格统一
- 后续易于扩展
- 部署和维护简单

后续可优化方向

后续可以逐步优化以下内容：

- 拆分公共组件
- 添加统一布局
- 优化移动端体验
- 添加 favicon
- 添加个人头像或 Logo
- 优化 SEO 信息
- 添加 Open Graph 信息
- 添加项目数据文件
- 把页面内容从硬编码逐步整理为数据驱动
- 增加更完整的项目展示区域
- 增加更清晰的链接分类

这些优化可以逐步完成，不需要一次性全部实现。

仓库命名说明

仓库名称：

azek431-home

含义：

Azek431 的个人主页与主站导航入口

使用 "Azek431" 作为统一名称，可以保持 GitHub 用户名、项目命名和网站品牌的一致性。

作者

Azek431

GitHub：

https://github.com/Azek431

许可证

当前项目暂未选择开源许可证。

在没有明确添加开源许可证之前，默认保留所有权利。
