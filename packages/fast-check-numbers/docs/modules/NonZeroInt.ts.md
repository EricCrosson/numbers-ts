---
title: NonZeroInt.ts
nav_order: 10
parent: Modules
---

## NonZeroInt overview

Added in v1.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NonZeroIntArbitrary](#nonzerointarbitrary)

---

# utils

## NonZeroIntArbitrary

**Signature**

```ts
export declare const NonZeroIntArbitrary: fc.Arbitrary<
  (number & t.Brand<NegativeBrand> & t.Brand<t.IntBrand>) | (number & t.Brand<PositiveBrand> & t.Brand<t.IntBrand>)
>
```

Added in v1.1.0
