export function applyLinkFilter(category: string): void {
  var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-link-filter]'));
  var cards = Array.prototype.slice.call(document.querySelectorAll('[data-link-card]'));
  var groups = Array.prototype.slice.call(document.querySelectorAll('[data-group]'));
  var empty = document.querySelector('[data-link-empty]');

  if (!buttons.length || !cards.length) return;

  var shown = 0;

  buttons.forEach(function (button) {
    var active = button.getAttribute('data-link-filter') === category;
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  cards.forEach(function (card) {
    var match = category === '全部' || card.getAttribute('data-category') === category;
    card.hidden = !match;
    if (match) shown += 1;
  });

  groups.forEach(function (group) {
    var groupCategory = group.getAttribute('data-group');
    var match = category === '全部' || groupCategory === category;
    group.hidden = !match;
  });

  if (empty) empty.hidden = shown !== 0;
}
