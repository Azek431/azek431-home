import { navItems, secondaryNavItems } from './site';

export type NavigationGroup = 'primary' | 'secondary' | 'action';

export interface NavigationEntry {
  label: string;
  href: string;
  description: string;
  group: Exclude<NavigationGroup, 'action'>;
  shortcut?: string[];
}

export interface NavigationShortcut {
  keys: string[];
  label: string;
  href?: string;
  category: 'navigation' | 'action';
}

const primaryOrder = new Map<string, number>([
  ['/', 0],
  ['/projects/', 1],
  ['/about/', 2],
  ['/links/', 3],
]);

const navigationDescriptions: Record<string, string> = {
  '/': '返回个人主站首页。',
  '/projects/': '浏览网站、资料库、工具和实验项目。',
  '/about/': '了解 Azek431 和这个数字空间。',
  '/links/': '查看公开主页、站内入口和订阅链接。',
  '/now/': '查看最近正在做、学习和关注的内容。',
  '/uses/': '查看日常开发设备、软件和工具。',
  '/blog/': '进入技术文章、笔记和长期记录。',
  '/colophon/': '了解网站技术栈、设计原则和构建方式。',
  '/changelog/': '查看主站每一次迭代和更新记录。',
  '/stats/': '查看网站页面、项目和构建统计。',
  '/search/': '搜索页面、项目、链接和更新内容。',
};

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

const normalizeNavigationEntry = (
  item: (typeof navItems)[number],
  group: Exclude<NavigationGroup, 'action'>,
): NavigationEntry => ({
  label: item.label,
  href: item.href,
  description: navigationDescriptions[item.href] ?? `打开 ${item.label} 页面。`,
  group,
  shortcut: shortcutKeysByHref[item.href],
});

export const primaryNavigationItems: NavigationEntry[] = [...navItems]
  .sort((left, right) => (primaryOrder.get(left.href) ?? 99) - (primaryOrder.get(right.href) ?? 99))
  .map((item) => normalizeNavigationEntry(item, 'primary'));

export const secondaryNavigationItems: NavigationEntry[] = secondaryNavItems.map((item) =>
  normalizeNavigationEntry(item, 'secondary'),
);

export const moreNavigationItems = secondaryNavigationItems.filter(
  (item) => item.href !== '/search/',
);

export const searchNavigationItem = secondaryNavigationItems.find(
  (item) => item.href === '/search/',
) ?? {
  label: '搜索',
  href: '/search/',
  description: '搜索页面、项目、链接和更新内容。',
  group: 'secondary' as const,
  shortcut: ['/'],
};

export const allNavigationItems: NavigationEntry[] = [
  ...primaryNavigationItems,
  ...secondaryNavigationItems,
];

export const navigationShortcutItems: NavigationShortcut[] = allNavigationItems
  .filter(
    (
      item,
    ): item is NavigationEntry & {
      shortcut: string[];
    } => Boolean(item.shortcut),
  )
  .map((item) => ({
    keys: item.shortcut,
    label: item.href === '/search/' ? '站内搜索' : item.label,
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
    .filter(
      (
        item,
      ): item is NavigationShortcut & {
        href: string;
      } => Boolean(item.href) && item.keys.length === 2 && item.keys[0].toLowerCase() === 'g',
    )
    .map((item) => [item.keys[1].toLowerCase(), item.href]),
) as Record<string, string>;
