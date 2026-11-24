import { el } from '../../shared/dom';

export function catalogView(): HTMLElement {
  return el('section', { class: 'page' },
    el('h1', {}, 'Каталог'),
    el('p', { class: 'page__note' }, 'Заглушка. Поиск, фильтры и карточки товаров — задачи #10 и #11.'),
  );
}
