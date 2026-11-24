import { el } from '../../shared/dom';

export function cartView(): HTMLElement {
  return el('section', { class: 'page' },
    el('h1', {}, 'Корзина'),
    el('p', { class: 'page__note' }, 'Заглушка. Логика и страница корзины — задачи #9 и #12.'),
  );
}
