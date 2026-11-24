// Generic Store<T>: состояние + подписчики. Механизм без предметной логики.
// Никто, кроме владельца стора, не вызывает setState напрямую из view.

export type Listener<T> = (state: T) => void;

export class Store<T> {
  private state: T;
  private readonly listeners = new Set<Listener<T>>();

  constructor(initial: T) {
    this.state = initial;
  }

  getState(): T {
    return this.state;
  }

  setState(next: T): void {
    this.state = next;
    for (const listener of this.listeners) {
      listener(next);
    }
  }

  // Возвращает функцию отписки.
  subscribe(listener: Listener<T>): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }
}
