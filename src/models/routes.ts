// Чистая функция: хэш адресной строки -> имя маршрута. Никакого DOM.

import type { RouteName } from '../shared/types';

export function parseRoute(hash: string): RouteName {
  // Нормализуем: убираем '#', ведущий и завершающий слэши, приводим к нижнему регистру.
  const path = hash
    .replace(/^#\/?/, '')
    .replace(/\/+$/, '')
    .toLowerCase();

  switch (path) {
    case '':
    case 'about':
      return 'about'; // по ТЗ приложение открывается страницей «О нас»
    case 'catalog':
      return 'catalog';
    case 'cart':
      return 'cart';
    default:
      return '404';
  }
}
