# Suggested Commands — Azek431.top

## Daily Dev (PowerShell)
```powershell
pnpm dev              # 实时预览
pnpm format           # 格式化代码
pnpm build            # 构建（仅大改/部署前使用）
git status -sb        # 查看工作区状态
git diff --stat       # 查看变更文件
```

## File Inspection
```powershell
git diff -- src\data\site.ts
git diff -- src\pages\projects.astro
git diff -- src\components\NavCard.astro
git diff -- src\styles\global.css
```

## Sync Cleanup
```powershell
Get-ChildItem -Force -Recurse -ErrorAction SilentlyContinue |
  Where-Object { $_.Name -like "*sync-conflict*" -or $_.Name -like "*.part" } |
  Select-Object FullName
```

## System Utils
- `curl.exe -I https://azek431.top` — 检查 Cloudflare 响应头
- `git ls-files | Select-String -Pattern "sync-conflict|\.stversions"` — 检查 Git 是否追踪同步垃圾
