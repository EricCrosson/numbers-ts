---
title: NonNegativeInt.ts
nav_order: 6
parent: Modules
---

## NonNegativeInt overview

Added in v1.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NonNegativeIntArbitrary](#nonnegativeintarbitrary)

---

# utils

## NonNegativeIntArbitrary

**Signature**

```ts
export declare const NonNegativeIntArbitrary: fc.Arbitrary<
  (number & t.Brand<ZeroBrand> & t.Brand<t.IntBrand>) | (number & t.Brand<PositiveBrand> & t.Brand<t.IntBrand>)
>
```

Added in v1.1.0
