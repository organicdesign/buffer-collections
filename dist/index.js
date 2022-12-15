import { toString as uint8ArrayToString } from "uint8arrays/to-string";
import { fromString as uint8ArrayFromString } from "uint8arrays/from-string";
const toString = (data) => uint8ArrayToString(data, "ascii");
const fromString = (data) => uint8ArrayFromString(data, "ascii");
export default class BufferMap {
    get [Symbol.toStringTag]() {
        return this.data[Symbol.toStringTag];
    }
    [Symbol.iterator]() {
        const itr = this.data.entries();
        return (function* () {
            for (const [str, value] of itr) {
                yield [fromString(str), value];
            }
        })();
    }
    constructor(iterable) {
        this.data = new Map();
        if (iterable != null) {
            this.data = new Map((function* () {
                for (const [buf, value] of iterable) {
                    yield [toString(buf), value];
                }
            })());
        }
    }
    clear() {
        this.data.clear();
    }
    delete(key) {
        return this.data.delete(toString(key));
    }
    forEach(callbackfn, thisArg) {
        this.data.forEach((value, key) => {
            callbackfn.apply(thisArg, [value, fromString(key), this]);
        });
    }
    get(key) {
        return this.data.get(toString(key));
    }
    has(key) {
        return this.data.has(toString(key));
    }
    set(key, value) {
        this.data.set(toString(key), value);
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
                yield fromString(key);
            }
        })();
    }
    get size() {
        return this.data.size;
    }
}
