# Azek431 UI System V2 Layers

这个目录由第 29 步从原来的 `src/styles/ui-system-v2.css` 拆分而来。

`src/styles/ui-system-v2.css` 现在只作为入口文件，负责按顺序导入这些分层 CSS。

## 文件职责

- `00-foundation.css`：基础变量、通用规则和旧文件开头内容。
- `10-early-pages.css`：早期 UI v2 页面基础、Projects、Links、Search、Stats 等页面初始收敛。
- `20-aura-premium.css`：VisualAura、InterfaceFX、premium glass、liquid tech、HUD 和动效外壳。
- `30-home-legacy.css`：首页 home-v3、首页信息架构、第一代主页氛围回调和 legacy skin。
- `40-shell-pagehero.css`：全站第一代系统外壳、Header、Footer 基础、PageHero 统一。
- `50-components.css`：按钮、项目卡、Links、Search、核心交互组件视觉收敛。
- `60-dashboard-about-footer.css`：Stats 仪表盘、About 叙事、ShortcutPanel、Footer v3。
- `70-tokens-responsive-gitee.css`：颜色、字体、间距、响应式系统，以及 GitHub / Gitee 镜像入口。
- `90-overrides.css`：暂时无法自动归类的兜底覆盖层。

## 维护原则

1. 不要随意改变 `ui-system-v2.css` 的导入顺序。
2. 新增首页样式优先放到 `30-home-legacy.css`。
3. 新增全站外壳、Header、Footer、PageHero 样式优先放到 `40-shell-pagehero.css`。
4. 新增按钮、项目卡、Links、Search 组件样式优先放到 `50-components.css`。
5. 新增 Stats、About、Footer、ShortcutPanel 样式优先放到 `60-dashboard-about-footer.css`。
6. 新增颜色、字体、间距、响应式 token 优先放到 `70-tokens-responsive-gitee.css`。
7. 如果只是临时覆盖，先放到 `90-overrides.css`，之后再整理到对应层。
