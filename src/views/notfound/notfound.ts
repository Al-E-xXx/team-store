import { el } from '../../shared/dom';

// Полноценная страница: по критерию #5 любой неизвестный адрес показывает 404.
// Доработка вида — задача #7.
export function notFoundView(hash: string): HTMLElement {
  return el('section', { class: 'page page--notfound' },
    el('h1', {}, 'Страница не найдена'),
    el('p', {}, `Адрес «${hash || '#'}» неизвестен. Проверьте опечатку или вернитесь на главную.`),
    el('a', { class: 'page__link', href: '#/about' }, 'Вернуться на главную'),
  );
}
