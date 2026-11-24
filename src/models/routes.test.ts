import { describe, expect, it } from 'vitest';

import { parseRoute } from './routes';

describe('parseRoute', () => {
  it('понимает известные адреса', () => {
    expect(parseRoute('#/catalog')).toBe('catalog');
    expect(parseRoute('#/cart')).toBe('cart');
    expect(parseRoute('#/about')).toBe('about');
  });

  it('открывает «О нас» по пустому адресу (стартовая страница по ТЗ)', () => {
    expect(parseRoute('')).toBe('about');
    expect(parseRoute('#')).toBe('about');
    expect(parseRoute('#/')).toBe('about');
  });

  it('толерантен к слэшу после # и завершающему слэшу', () => {
    expect(parseRoute('#catalog')).toBe('catalog');
    expect(parseRoute('#/catalog/')).toBe('catalog');
  });

  it('игнорирует регистр', () => {
    expect(parseRoute('#/About')).toBe('about');
    expect(parseRoute('#/CART')).toBe('cart');
  });

  it('неизвестный адрес -> 404', () => {
    expect(parseRoute('#/foo')).toBe('404');
    expect(parseRoute('#/catalog/extra')).toBe('404');
    expect(parseRoute('#cart2')).toBe('404');
  });
});
