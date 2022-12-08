---
title: ZeroBigInt.ts
nav_order: 14
parent: Modules
---

## ZeroBigInt overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [ZeroBigInt](#zerobigint)
  - [ZeroBigInt (type alias)](#zerobigint-type-alias)
  - [ZeroBigIntBrand (interface)](#zerobigintbrand-interface)

---

# utils

## ZeroBigInt

**Signature**

```ts
export declare const ZeroBigInt: t.BrandC<t.BigIntC, ZeroBigIntBrand>
```

Added in v0.0.1

## ZeroBigInt (type alias)

**Signature**

```ts
export type ZeroBigInt = t.TypeOf<typeof ZeroBigInt>
```

Added in v0.0.1

## ZeroBigIntBrand (interface)

**Signature**

```ts
export interface ZeroBigIntBrand {
  readonly ZeroBigInt: unique symbol
}
```

Added in v0.0.1
