// Точка сборки: смонтировать каркас страницы, создать store, запустить роутер.
// В index.html только тег script — весь DOM строит код (el()).

import './style.css';

import { startRouter } from './controllers/router';
import { el } from './shared/dom';
import { Store } from './shared/store';
import type { CartItem } from './shared/types';
import { aboutView } from './views/about/about';
import { cartView } from './views/cart/cart';
import { catalogView } from './views/catalog/catalog';
import { headerView } from './views/layout/header';
import { notFoundView } from './views/notfound/notfound';

const header = el('header', { id: 'header', class: 'header' });
const page = el('main', { id: 'page' });
document.body.append(el('div', { id: 'app' }, header, page));

const cartStore = new Store<CartItem[]>([]);

const renderHeader = (): void => {
  const count = cartStore.getState().reduce((sum, item) => sum + item.quantity, 0);
  header.replaceChildren(headerView(count));
};
cartStore.subscribe(renderHeader);
renderHeader();

startRouter(page, {
  about: aboutView,
  cart: cartView,
  catalog: catalogView,
  '404': notFoundView,
});
