import { toString as uint8ArrayToString } from "uint8arrays/to-string";
import { fromString as uint8ArrayFromString } from "uint8arrays/from-string";
export default class BufferMap {
    constructor(iterable) {
        this.data = new Map();
        if (iterable != null) {
            this.data = new Map((function* () {
                for (const [buf, value] of iterable) {
                    yield [uint8ArrayToString(buf), value];
                }
            })());
        }
    }
    get [Symbol.toStringTag]() {
        return this.data[Symbol.toStringTag];
    }
    [Symbol.iterator]() {
        const itr = this.data.entries();
        return (function* () {
            for (const [str, value] of itr) {
                yield [uint8ArrayFromString(str), value];
            }
        })();
    }
    clear() {
        this.data.clear();
    }
    delete(key) {
        return this.data.delete(uint8ArrayToString(key));
    }
    forEach(callbackfn, thisArg) {
        this.data.forEach((value, key) => {
            callbackfn.apply(thisArg, [value, uint8ArrayFromString(key), this]);
        });
    }
    get(key) {
        return this.data.get(uint8ArrayToString(key));
    }
    has(key) {
        return this.data.has(uint8ArrayToString(key));
    }
    set(key, value) {
        this.data.set(uint8ArrayToString(key), value);
        return this;
    }
    entries() {
        return this[Symbol.iterator]();
    }
    values() {
        return this.data.values();
    }
    keys() {
        const itr = this.data.keys();
        return (function* () {
            for (const key of itr) {
                yield uint8ArrayFromString(key);
            }
        })();
    }
    get size() {
        return this.data.size;
    }
}
