export function normalize(value: string): string {
  return String(value || '')
    .toLowerCase()
    .trim();
}

// 将字符串切分为 token 列表（中文按字符、英文按单词）
function tokenize(text: string): string[] {
  const normalized = normalize(text);
  if (!normalized) return [];
  // 先按空格/标点拆分，再过滤空串
  return normalized.split(/[\s　,，.。;；:：!?！？()（）\[\]{}<>\/\\]+/).filter(Boolean);
}

export function scoreItem(item: Record<string, string | string[]>, query: string): number {
  if (!query) return 1;

  const title = normalize(String(item.title || ''));
  const desc = normalize(String(item.desc || ''));
  const href = normalize(String(item.href || ''));
  const extra = normalize(String(item.extra || ''));
  const rawTags = item.tags;
  const tags = Array.isArray(rawTags)
    ? rawTags.map(normalize).join(' ')
    : normalize(String(rawTags || ''));

  const qTokens = tokenize(query);
  if (qTokens.length === 0) return 0;

  // 精确全匹配（query 和 title 完全相等）
  if (title === query) return 100;

  // 多 token 查询：所有 token 都在 title 中出现
  if (qTokens.length > 1) {
    const titleTokens = tokenize(title);
    const allHit = qTokens.every((t) => titleTokens.some((tt) => tt.includes(t)));
    if (allHit) return 90;
  }

  // 单个 token 在 title 中出现
  if (qTokens.some((t) => title.includes(t))) return 80;

  // tags 精确 token 匹配（不是 substring）
  const tagTokens = tokenize(tags);
  if (tagTokens.some((tt) => qTokens.some((t) => tt.includes(t) || t.includes(tt)))) return 65;

  // extra 字段匹配（长描述、特性、亮点等）
  if (extra && qTokens.some((t) => extra.includes(t))) return 48;

  // desc 匹配
  if (qTokens.some((t) => desc.includes(t))) return 42;

  // href 匹配
  if (qTokens.some((t) => href.includes(t))) return 24;

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
      if (b.score !== a.score) return b.score - a.score;
      return 0; // 同分保持原始顺序
    })
    .slice(0, 40);

  const html = matched
    .map(function (entry) {
      const item = entry.item;
      const tags = (Array.isArray(item.tags) ? item.tags : [])
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
        '</small>' +
        (tags ? '<div class="search-result__meta">' + tags + '</div>' : '') +
        '</a></li>'
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
