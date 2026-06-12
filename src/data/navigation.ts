import { navItems, secondaryNavItems } from './site';

export interface NavigationShortcut {
  keys: string[];
  label: string;
  href?: string;
  category: 'navigation' | 'action';
}

export const shortcutKeysByHref: Record<string, string[]> = {
  '/': ['g', 'h'],
  '/about/': ['g', 'a'],
  '/projects/': ['g', 'p'],
  '/links/': ['g', 'l'],
  '/now/': ['g', 'n'],
  '/uses/': ['g', 'u'],
  '/blog/': ['g', 'b'],
  '/colophon/': ['g', 'c'],
  '/changelog/': ['g', 'k'],
  '/stats/': ['g', 's'],
  '/search/': ['/'],
};

const shortcutLabelOverrides: Record<string, string> = {
  '/search/': '站内搜索',
};

const allNavigationItems = [...navItems, ...secondaryNavItems];

export const navigationShortcutItems: NavigationShortcut[] = allNavigationItems
  .filter((item) => shortcutKeysByHref[item.href])
  .map((item) => ({
    keys: shortcutKeysByHref[item.href],
    label: shortcutLabelOverrides[item.href] ?? item.label,
    href: item.href,
    category: 'navigation',
  }));

export const actionShortcutItems: NavigationShortcut[] = [
  {
    keys: ['t'],
    label: '切换明 / 暗主题',
    category: 'action',
  },
  {
    keys: ['r'],
    label: '随机打开一个项目',
    category: 'action',
  },
  {
    keys: ['?'],
    label: '显示 / 隐藏快捷键面板',
    category: 'action',
  },
  {
    keys: ['Esc'],
    label: '关闭当前面板',
    category: 'action',
  },
];

export const allShortcutItems: NavigationShortcut[] = [
  ...navigationShortcutItems,
  ...actionShortcutItems,
];

export const shortcutLabelByHref = Object.fromEntries(
  Object.entries(shortcutKeysByHref).map(([href, keys]) => [href, keys.join(' ')]),
) as Record<string, string>;

export const routeShortcutMap = Object.fromEntries(
  navigationShortcutItems
    .filter((item) => item.href && item.keys.length === 2 && item.keys[0].toLowerCase() === 'g')
    .map((item) => [item.keys[1].toLowerCase(), item.href as string]),
) as Record<string, string>;
