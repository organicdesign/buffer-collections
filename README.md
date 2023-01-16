# buffer-collections

Implementations of JS collections that uses the value of Uint8Arrays as opposed to instances.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
  - [BufferMap](#buffermap)
- [TODO](#todo)

## Install

```
npm i @organicdesign/buffer-collections
```

## Usage

### BufferMap

The BufferMap follows the same interface as Map so you can use it exactly as you would normally use a Map object with the only difference being that the keys are only Uint8Arrays and the value of the array is used as the key instead of the instance itself.

```javascript
import { BufferMap } from "@organicdesign/buffer-collections";

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

## TODO

There are more classes that should be provided by this library but are currently not implemented.

- [ ] BufferWeakMap implementation.
- [ ] BufferSet implementation.
- [ ] BufferWeakSet implementation.
