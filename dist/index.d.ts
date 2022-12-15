export default class BufferMap<V> implements Map<Uint8Array, V> {
    private data;
    get [Symbol.toStringTag](): string;
    [Symbol.iterator](): IterableIterator<[Uint8Array, V]>;
    constructor(iterable?: Iterable<[Uint8Array, V]>);
    clear(): void;
    delete(key: Uint8Array): boolean;
    forEach(callbackfn: (value: V, key: Uint8Array, map: this) => void, thisArg?: any): void;
    get(key: Uint8Array): V | undefined;
    has(key: Uint8Array): boolean;
    set(key: Uint8Array, value: V): this;
    entries(): IterableIterator<[Uint8Array, V]>;
    values(): IterableIterator<V>;
    keys(): IterableIterator<Uint8Array>;
    get size(): number;
}
