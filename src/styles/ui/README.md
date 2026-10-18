# Azek431 UI System V2 — 分层结构

`src/styles/ui/` 下的样式由入口文件 `src/styles/ui-system-v2.css` 按顺序导入。
`src/styles/global.css` 负责设计令牌（颜色/字号/间距/圆角/动效/阴影）+ 基础重置 +
通用组件基类（`.card` / `.button` / `.tag` / 表单 / 焦点 / 无障碍）+ 本地字体。

## 文件职责（实际结构）

- `10-shell-header-footer.css` — 全站外壳：Header（含滚动玻璃、移动端汉堡）、Footer。
- `20-home.css` — 首页入口，聚合导入 6 个首页区块：
  - `home-hero.css` / `home-command.css` / `home-projects.css` /
    `home-now.css` / `home-navigation.css` / `home-activity.css`
- `30-pages.css` — 跨页共用：`.eyebrow`、`.section-heading`、`.home-section-head`。
- `page-404.css` — 404 页（大数字渐变 + 光晕）。
- `page-about.css` — About 叙事、技能条、专注领域。
- `page-changelog.css` — 更新日志时间轴 + 筛选器。
- `page-colophon.css` — Colophon / Uses 共用卡片网格。
- `page-links.css` — 链接页。
- `page-now.css` — Now 页项目列表。
- `page-projects.css` — 项目列表页统计 + 项目详情页布局。
- `page-search.css` — 搜索控制台 + 结果列表。
- `page-stats.css` — 统计仪表盘 + 大数字。
- `page-uses.css` — Uses 页。
- `40-responsiveness.css` — 统一响应式断点（768 / 1024 / 480 / 1280）+ 触摸/打印/减动效。

## 导入顺序约定

入口 `ui-system-v2.css` 的导入顺序不可随意调整：

1. `10-shell-header-footer`（外壳）
2. `20-home`（首页，内部再聚合 6 区块）
3. `30-pages`（跨页共用）
4. `page-*`（各内页专属，按页面名排序）
5. `40-responsiveness`（断点覆盖，必须最后，才能覆盖上面所有单页样式）

## 维护原则

1. 新增**全站外壳 / Header / Footer** → `10-shell-header-footer.css`。
2. 新增**首页区块** → 对应 `home-*.css`，并在 `20-home.css` 里 `@import`。
3. 新增**某内页专属** → 对应 `page-*.css`，并在入口 `ui-system-v2.css` 补 `@import`
   （`page-*` 必须在 `40-responsiveness.css` 之前）。
4. 新增**跨页共用** → `30-pages.css`。
5. 新增**断点 / 触摸 / 打印** → `40-responsiveness.css`。
6. 新增**令牌 / 通用组件** → `global.css`。
7. 仅当无法归类时临时覆盖，放最近的文件，事后归位。

> 变更点（2026-10-19）：入口此前漏导入 8 个 `page-*.css`（404/about/changelog/colophon/
> now/projects/search/stats），导致内页专属布局样式未生效；本次已全部补回，内页不再裸奔。
