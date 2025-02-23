type Effect = () => void;
export declare function createSignal<T>(initialValue: T): [() => T, (newState: T) => T];
export declare function createEffect(callback: Effect): void;
export {};
