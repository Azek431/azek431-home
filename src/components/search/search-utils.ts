export function normalize(value: string): string {
  return String(value || '')
    .toLowerCase()
    .trim();
}

export function scoreItem(item: Record<string, string | string[]>, query: string): number {
  if (!query) return 1;

  const title = normalize(String(item.title || ''));
  const desc = normalize(String(item.desc || ''));
  const href = normalize(String(item.href || ''));
  const tags = normalize(String((item.tags || []).join(' ')));

  if (title === query) return 100;
  if (title.indexOf(query) >= 0) return 80;
  if (tags.indexOf(query) >= 0) return 62;
  if (desc.indexOf(query) >= 0) return 42;
  if (href.indexOf(query) >= 0) return 24;

  return 0;
}

export function renderResults(
  items: Record<string, string | string[]>[],
  query: string,
  activeCategory: string,
): { results: string; hintHidden: boolean; emptyHidden: boolean; count: number } {
  const matched = items
    .map(function (item) {
      return {
        item: item,
        score: scoreItem(item, query),
      };
    })
    .filter(function (entry) {
      const categoryMatch = activeCategory === '全部' || entry.item.category === activeCategory;
      return categoryMatch && entry.score > 0;
    })
    .sort(function (a, b) {
      return b.score - a.score;
    })
    .slice(0, 40);

  const html = matched
    .map(function (entry) {
      const item = entry.item;
      const tags = (item.tags || [])
        .slice(0, 4)
        .map(function (tag) {
          return '<em>#' + tag + '</em>';
        })
        .join('');

      return (
        '<li><a href="' +
        item.href +
        '"><span>' +
        item.category +
        '</span><strong>' +
        item.title +
        '</strong><small>' +
        item.desc +
        '</small><div>' +
        tags +
        '</div></a></li>'
      );
    })
    .join('');

  return {
    results: html,
    hintHidden: query.length > 0 || activeCategory !== '全部',
    emptyHidden: matched.length !== 0,
    count: matched.length,
  };
}
