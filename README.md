# buffer-map

An implementation of Map that uses the value of Uint8Arrays as keys instead of instances.

## Usage

The BufferMap follows the same interface as a map so you can use it exactly as you would a normal map with the only difference being that the keys are only Uint8Arrays and the value of the array is used as the key instead of the instance itself.

```javascript
import BufferMap from "buffer-map";

const map = new BufferMap();

const key = new Uint8Array([1]);
const value = "value";

map.set(key, value);

console.log(map.has(new Uint8Array(key))); // true
console.log(map.get(new Uint8Array(key)) === value); // true
```

You can also type the values with TypeScript like so:

```typescript
new BufferMap<string>();
```
