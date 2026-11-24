// Общие типы проекта. Product дополнится полями в задаче #8 (данные товаров).

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number; // целые условные единицы, см. ARCHITECTURE.md «Деньги»
}

export interface CartItem {
  product: Product;
  quantity: number;
}

// Имя маршрута, которое возвращает parseRoute; '404' — любой неизвестный адрес.
export type RouteName = 'about' | 'catalog' | 'cart' | '404';
