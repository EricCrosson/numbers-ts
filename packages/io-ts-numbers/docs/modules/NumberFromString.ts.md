---
title: NumberFromString.ts
nav_order: 13
parent: Modules
---

## NumberFromString overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NumberFromString](#numberfromstring)
  - [NumberFromStringC (type alias)](#numberfromstringc-type-alias)

---

# utils

## NumberFromString

**Signature**

```ts
export declare const NumberFromString: NumberFromStringC
```

**Example**

```ts
import { NumberFromString } from 'io-ts-numbers/lib/NumberFromString'

NumberFromString.decode('1') // right(1)
NumberFromString.decode('1.1') // right(1.1)
```

Added in v0.0.1

## NumberFromStringC (type alias)

**Signature**

```ts
export type NumberFromStringC = t.Type<number, string>
```

Added in v0.0.1
