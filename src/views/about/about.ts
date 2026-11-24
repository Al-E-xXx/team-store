import { el } from '../../shared/dom';

export function aboutView(): HTMLElement {
  return el('section', { class: 'page' },
    el('h1', {}, 'О нас'),
    el('p', { class: 'page__note' }, 'Заглушка. Содержание страницы — задача #6.'),
  );
}
