# Task Completion — Azek431.top

## After Any Change

```powershell
pnpm format
git status -sb
git diff --stat
```

## After Major Structural Change (build config, layouts, pages)

```powershell
pnpm build    # 验证构建
```

## Before Commit

1. 确认 `pnpm format` 通过
2. 确认 `git status` 干净（无意外文件）
3. 提交信息用自然中文（如"整理一下项目展示卡片"）
4. 不要提交 `.env` / 密钥 / node_modules / dist

## Verification Checklist

- [ ] 深色主题未破坏
- [ ] 移动端布局正常
- [ ] 无新增未声明依赖
- [ ] site.ts 数据与页面渲染一致
- [ ] 外部链接有 rel="noopener noreferrer"
- [ ] README/AGENTS.md 与真实功能一致
