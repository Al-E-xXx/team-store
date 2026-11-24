// el(tag, attrs?, ...children) — надстройка над document.createElement.
// Механизм без предметной логики: ничего не знает про товары и корзину.

export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs?: Record<string, string>,
  ...children: (Node | string)[]
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);

  if (attrs) {
    for (const [name, value] of Object.entries(attrs)) {
      node.setAttribute(name, value);
    }
  }

  for (const child of children) {
    // строки вставляются как текст, а не как HTML — никаких инъекций
    node.append(child);
  }

  return node;
}
