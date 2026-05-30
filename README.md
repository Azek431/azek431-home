azek431-home

"azek431-home" 是 Azek431 的个人主站与导航入口项目。

这个项目用于展示个人介绍、项目入口、常用链接、GitHub 主页以及其他公开内容入口。它不是一个复杂的后台系统，也不是单纯的博客项目，而是一个以 个人主页 + 导航中心 + 项目入口 为核心定位的静态网站。

项目基于 Astro 构建，目标是保持页面轻量、加载快速、结构清晰，并方便后续长期维护和扩展。

项目简介

"azek431-home" 主要负责维护 Azek431 的个人主站页面。

当前网站包含首页、关于页、项目页和链接页，用于承载个人品牌展示、项目导航和常用入口整理。这个项目更偏向“主入口”和“导航站”，因此不会把所有内容都集中在同一个仓库中。

博客、项目官网、工具项目、文档站等内容更适合独立仓库维护。这样可以让每个项目职责更清晰，也方便他人单独查看对应项目的源码和说明。

项目定位

这个仓库的主要定位是：

个人主页
项目导航站
GitHub 展示入口
常用链接集合
公开内容入口
个人网站生态的主入口

当前项目重点不是做复杂功能，而是先完成一个稳定、清晰、可访问、可维护的个人主站。

当前页面

当前项目包含以下页面：

页面路径| 页面说明
"/"| 首页，展示个人介绍、主站定位和主要入口
"/about/"| 关于页，介绍个人方向和网站内容定位
"/projects/"| 项目页，用于展示当前和后续项目入口
"/links/"| 链接页，用于整理 GitHub、项目、博客等公开链接

页面路由对应关系：

src/pages/index.astro     → /
src/pages/about.astro     → /about/
src/pages/projects.astro  → /projects/
src/pages/links.astro     → /links/

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

选择 Astro 的原因：

适合个人主页、博客、文档和导航站
静态构建速度快
页面加载性能好
项目结构清晰
部署流程简单
后续扩展页面和组件比较方便
不需要复杂后端即可完成主站需求

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

目录说明

"public"

"public" 目录用于存放静态资源。

适合放置：

favicon
头像
Logo
站点图标
不会被 Astro 处理的静态文件

放在 "public" 里的资源会被原样复制到构建结果中。

"src/pages"

"src/pages" 是页面路由目录。

Astro 使用基于文件的路由系统，所以这个目录里的 ".astro" 文件会自动生成对应页面。

当前页面：

index.astro      首页
about.astro      关于页
projects.astro   项目页
links.astro      链接页

"src/components"

"src/components" 用于存放可复用组件。

后续可以逐步拆分：

Header.astro
Footer.astro
Hero.astro
NavCard.astro
ProjectCard.astro
LinkCard.astro

这样可以减少页面重复代码，让项目结构更清晰。

"src/layouts"

"src/layouts" 用于存放页面布局组件。

后续可以添加统一布局，例如：

BaseLayout.astro

统一管理：

HTML 基础结构
页面标题
meta 描述
顶部导航
页脚
全局容器
SEO 信息

"src/assets"

"src/assets" 用于存放会被 Astro / Vite 处理的本地资源。

适合放置：

本地图片
SVG
组件中引用的资源
需要经过构建工具处理的文件

本地开发

环境要求

建议使用以下环境：

Node.js 22.12.0 或更高版本
pnpm
Git
VS Code

当前项目使用 pnpm 管理依赖，建议统一使用 pnpm，不要在同一个项目中混用 npm、yarn 和 pnpm。

安装依赖

在项目根目录执行：

pnpm install

依赖会安装到本地 "node_modules" 目录。

"node_modules" 是依赖目录，不需要提交到 Git 仓库，也不建议跨设备同步。

启动开发服务器

pnpm dev

启动后通常可以访问：

http://localhost:4321

开发服务器支持实时预览。修改页面后，浏览器会自动刷新或更新。

构建项目

pnpm build

构建成功后，静态文件会输出到：

dist/

"dist" 是构建产物目录，不需要提交到 Git 仓库。

本地预览构建结果

pnpm preview

这个命令用于在本地预览生产构建后的页面效果。

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

更新首页内容
添加新页面
优化 README
调整样式
修复构建问题
整理项目结构

这样可以让每次修改都有清晰记录，也方便后续回滚和追踪。

分支说明

当前主要分支：

main

"main" 分支用于保存稳定版本，并作为后续部署的生产分支。

建议日常开发时保持一个简单流程：

修改代码
本地预览
构建测试
Git 提交
Push 到 GitHub
自动部署

换行符规则

由于项目可能会在 Windows 和 Linux 环境之间切换开发，因此仓库使用 ".gitattributes" 统一换行符规则。

推荐策略：

普通源码文件：LF
Windows 脚本文件：CRLF
图片、压缩包等资源：二进制文件，不做文本转换

这样可以减少跨系统同步时出现无意义的 Git 变更。

示例规则：

* text=auto eol=lf

*.bat text eol=crlf
*.cmd text eol=crlf
*.ps1 text eol=crlf

*.png binary
*.jpg binary
*.jpeg binary
*.gif binary
*.webp binary
*.ico binary
*.zip binary
*.7z binary
*.rar binary

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

推荐 ".gitignore" 重点包含：

# dependencies
node_modules/

# build output
dist/

# generated files
.astro/

# cache
.cache/
.vite/

# logs
*.log
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*

# environment variables
.env
.env.local
.env.production

# OS files
.DS_Store
Thumbs.db
desktop.ini

# editor
.idea/

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

关于依赖目录

"node_modules" 不应该进入 Git，也不建议放入同步目录。

原因：

文件数量非常多
体积较大
不同系统之间依赖可能不兼容
容易拖慢同步速度
删除后可以重新安装

每台设备应该单独执行：

pnpm install

来生成自己的依赖目录。

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

构建输出说明

执行：

pnpm build

会生成：

dist/

"dist" 目录是构建产物，不需要手动修改，也不需要提交到 Git。

如果需要预览构建结果，可以执行：

pnpm preview

当前状态

当前项目已经完成：

Astro 项目初始化
首页初版
关于页
项目页
链接页
本地开发环境
生产构建测试
GitHub 仓库托管
README 文档整理

当前项目重点是保持主站结构稳定，并逐步优化页面内容、组件结构和视觉体验。

设计方向

当前网站整体视觉方向偏向：

深色背景
科技感
简洁导航
卡片式布局
高级感渐变
清晰的信息层级
适合个人主页和项目展示

主站不追求复杂功能，而是优先保证：

打开速度快
页面结构清楚
视觉风格统一
后续易于扩展
部署和维护简单

后续可优化方向

后续可以逐步优化以下内容：

拆分公共组件
添加统一布局
优化移动端体验
添加 favicon
添加个人头像或 Logo
优化 SEO 信息
添加 Open Graph 信息
添加项目数据文件
把页面内容从硬编码逐步整理为数据驱动
增加更完整的项目展示区域
增加更清晰的链接分类

这些优化可以逐步完成，不需要一次性全部实现。

维护建议

推荐保持以下维护习惯：

每次修改前先确认当前分支
每次修改后先本地预览
提交前运行 pnpm build
提交内容保持清晰
不要提交 node_modules 和 dist
不要把密钥、Token、环境变量提交到仓库

提交前建议检查：

git status
pnpm build

如果构建通过，再进行提交。

仓库命名说明

仓库名称：

azek431-home

含义：

Azek431 的个人主页与主站导航入口

使用 "Azek431" 作为统一名称，可以保持 GitHub 用户名、项目命名和网站品牌的一致性。

作者

Azek431

GitHub 用户名：

Azek431

许可证

当前项目暂未选择开源许可证。

在没有明确添加开源许可证之前，默认保留所有权利。
