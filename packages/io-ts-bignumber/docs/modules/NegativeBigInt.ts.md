---
title: NegativeBigInt.ts
nav_order: 3
parent: Modules
---

## NegativeBigInt overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NegativeBigInt](#negativebigint)
  - [NegativeBigInt (type alias)](#negativebigint-type-alias)
  - [NegativeBigIntBrand (interface)](#negativebigintbrand-interface)

---

# utils

## NegativeBigInt

**Signature**

```ts
export declare const NegativeBigInt: t.BrandC<t.BigIntC, NegativeBigIntBrand>
```

Added in v0.0.1

## NegativeBigInt (type alias)

**Signature**

```ts
export type NegativeBigInt = t.TypeOf<typeof NegativeBigInt>
```

Added in v0.0.1

## NegativeBigIntBrand (interface)

**Signature**

```ts
export interface NegativeBigIntBrand {
  readonly NegativeBigInt: unique symbol
}
```

Added in v0.0.1
