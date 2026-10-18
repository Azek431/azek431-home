#!/system/bin/sh
# =============================================================================
# site.sh — azek431-home 手机端一键工作流（Termux 环境）
#
# 设计：
#   FUSE (/sdcard/编程/网站/azek431-home)   = 源码真相源 + .git（不能装依赖，
#                                              FUSE 不支持 symlink）
#   WORK (~home/dev-azek431-home)           = 本地可跑工作区（支持 symlink，
#                                              node_modules 持久保留，git 正常）
#   每次构建前 FUSE->WORK 同步源码；修格式后 WORK->FUSE 回写。
#
# 用法：
#   site.sh setup     装 pnpm + 初始化本地工作区 + 装依赖（首次必跑一次）
#   site.sh build     同步源码并构建静态站（产物在 WORK/dist）
#   site.sh preview   构建并本地预览 http://127.0.0.1:4321
#   site.sh verify    同步 + prettier 修格式 + astro check + build（还 CI 债）
#   site.sh push      同步 + 修格式 + 提交 + 推送 GitHub（CI/CF 自动构建）
#   site.sh run <x>   在本地工作区直接跑 pnpm <x>
# =============================================================================
export HOME=/data/data/com.termux/files/home
export PATH="$HOME/.local/share/pnpm:$HOME/.npm-global/bin:$HOME/.local/bin:/data/data/com.termux/files/usr/bin:$PATH"

FUSE="/sdcard/编程/网站/azek431-home"
WORK="$HOME/dev-azek431-home"
GH="/data/data/com.termux/files/usr/bin/gh"
[ -x "$GH" ] || GH="$(command -v gh)"
TOK=$(awk '/oauth_token:/{print $2; exit}' "$HOME/.config/gh/hosts.yml" 2>/dev/null)

FILES="package.json pnpm-lock.yaml astro.config.mjs tsconfig.json .prettierrc .prettierignore .editorconfig .gitignore"

find_pnpm() { command -v pnpm >/dev/null 2>&1 && return 0; [ -x "$HOME/.npm-global/bin/pnpm" ] && return 0; return 1; }
ensure_pnpm() { find_pnpm || { echo "安装 pnpm ..."; npm install -g pnpm >/dev/null 2>&1; find_pnpm || { echo "pnpm 安装失败"; exit 1; }; }; }
ensure_work() {
  if [ ! -d "$WORK/.git" ]; then
    echo "首次初始化本地工作区 $WORK ..."
    rm -rf "$WORK"
    git clone https://github.com/Azek431/azek431-home.git "$WORK" 2>&1 | tail -2
    ( cd "$WORK" && git config user.name Azek431 && git config user.email Azek431@163.com )
  fi
}
ensure_deps() { [ -d "$WORK/node_modules" ] || { echo "安装依赖 ..."; ( cd "$WORK" && pnpm install ); }; }
sync_src() {
  cd "$WORK" || exit 1
  for f in $FILES; do [ -f "$FUSE/$f" ] && cp -f "$FUSE/$f" "$WORK/$f" 2>/dev/null; done
  rm -rf src 2>/dev/null; cp -rf "$FUSE/src" "$WORK/src" 2>/dev/null
  [ -d "$FUSE/public" ] && { rm -rf public 2>/dev/null; cp -rf "$FUSE/public" "$WORK/public"; }
  echo "已同步 FUSE -> WORK"
}
sync_back() {
  rm -rf "$FUSE/src" 2>/dev/null; cp -rf "$WORK/src" "$FUSE/src" 2>/dev/null
  for f in $FILES; do [ -f "$WORK/$f" ] && cp -f "$WORK/$f" "$FUSE/$f" 2>/dev/null; done
  echo "已回写 WORK -> FUSE"
}

cmd="$1"; sub="$2"
case "$cmd" in
  setup)   ensure_pnpm; ensure_work; sync_src; ensure_deps; echo "=== setup 完成 ===" ;;
  build)   ensure_pnpm; ensure_work; sync_src; ensure_deps; ( cd "$WORK" && pnpm build ); echo "构建完成：$WORK/dist" ;;
  preview) ensure_pnpm; ensure_work; sync_src; ensure_deps; ( cd "$WORK" && pnpm build && pnpm preview --host 127.0.0.1 --port 4321 ) ;;
  verify)
    ensure_pnpm; ensure_work; sync_src; ensure_deps
    ( cd "$WORK" && pnpm format && pnpm check && pnpm build ) || { echo "verify 失败"; exit 1; }
    sync_back
    echo "=== verify 全绿，已回写 FUSE ==="
    ;;
  push)
    ensure_pnpm; ensure_work; ensure_deps
    sync_src
    ( cd "$WORK" && pnpm format )
    cd "$WORK"; git add -A
    git commit -m "chore: prettier 格式化 + 站点数据（修 CI verify）" --allow-empty 2>&1 | tail -2
    if [ -n "$TOK" ]; then
      git push "https://x-access-token:${TOK}@github.com/Azek431/azek431-home.git" HEAD:main 2>&1 | tail -4
    else
      echo "未找到 gh token（$HOME/.config/gh/hosts.yml），请先在 Termux 里 gh auth login"; exit 1
    fi
    sync_back
    echo "=== push 完成，CI/Cloudflare 将自动构建 ==="
    ;;
  run)
    ensure_pnpm; ensure_work; ensure_deps
    ( cd "$WORK" && pnpm "$sub" )
    ;;
  *)
    echo "用法: site.sh [setup|build|preview|verify|push|run <sub>]"; exit 1 ;;
esac