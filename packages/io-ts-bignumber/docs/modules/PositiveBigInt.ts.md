---
title: PositiveBigInt.ts
nav_order: 12
parent: Modules
---

## PositiveBigInt overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [PositiveBigInt](#positivebigint)
  - [PositiveBigInt (type alias)](#positivebigint-type-alias)
  - [PositiveBigIntBrand (interface)](#positivebigintbrand-interface)

---

# utils

## PositiveBigInt

**Signature**

```ts
export declare const PositiveBigInt: t.BrandC<t.BigIntC, PositiveBigIntBrand>
```

Added in v0.0.1

## PositiveBigInt (type alias)

**Signature**

```ts
export type PositiveBigInt = t.TypeOf<typeof PositiveBigInt>
```

Added in v0.0.1

## PositiveBigIntBrand (interface)

**Signature**

```ts
export interface PositiveBigIntBrand {
  readonly PositiveBigInt: unique symbol
}
```

Added in v0.0.1
