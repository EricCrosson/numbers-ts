---
title: NonPositive.ts
nav_order: 7
parent: Modules
---

## NonPositive overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NonPositiveArbitrary](#nonpositivearbitrary)

---

# utils

## NonPositiveArbitrary

**Signature**

```ts
export declare const NonPositiveArbitrary: fc.Arbitrary<
  (number & Brand<ZeroBrand> & Brand<IntBrand>) | Branded<number, NegativeBrand>
>;
```

Added in v1.0.0
