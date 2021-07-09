---
title: NonNegativeBigInt.ts
nav_order: 3
parent: Modules
---

## NonNegativeBigInt overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NonNegativeBigIntArbitrary](#nonnegativebigintarbitrary)

---

# utils

## NonNegativeBigIntArbitrary

**Signature**

```ts
export declare const NonNegativeBigIntArbitrary: fc.Arbitrary<
  Branded<bigint, ZeroBigIntBrand> | Branded<bigint, PositiveBigIntBrand>
>
```

Added in v0.0.1
