// Контроллер маршрутизации: слушает hashchange и подменяет страницу.
// Единственный слушатель hashchange в приложении.

import { parseRoute } from '../models/routes';
import type { RouteName } from '../shared/types';

// Функция отрисовки страницы: получает хэш (нужен только 404), возвращает узел.
export type PageView = (hash: string) => HTMLElement;

export function startRouter(container: HTMLElement, pages: Record<RouteName, PageView>): void {
  const render = (): void => {
    const hash = window.location.hash;
    container.replaceChildren(pages[parseRoute(hash)](hash));
  };

  window.addEventListener('hashchange', render);
  render(); // первый рендер без смены хэша
}
