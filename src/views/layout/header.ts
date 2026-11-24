import { el } from '../../shared/dom';
import './header.css';

// Шапка: меню + счётчик корзины. Получает готовое число — ничего не считает сама.
export function headerView(cartCount: number): HTMLElement {
  return el('div', { class: 'header__inner' },
    el('a', { class: 'header__logo', href: '#/about' }, 'team-store'),
    el('nav', { class: 'header__nav' },
      el('a', { class: 'header__link', href: '#/about' }, 'О нас'),
      el('a', { class: 'header__link', href: '#/catalog' }, 'Каталог'),
      el('a', { class: 'header__link header__link--cart', href: '#/cart' },
        'Корзина',
        el('span', { class: 'header__cart-count' }, String(cartCount)),
      ),
    ),
  );
}
