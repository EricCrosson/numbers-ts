---
title: NonPositiveInt.ts
nav_order: 8
parent: Modules
---

## NonPositiveInt overview

Added in v1.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NonPositiveIntArbitrary](#nonpositiveintarbitrary)

---

# utils

## NonPositiveIntArbitrary

**Signature**

```ts
export declare const NonPositiveIntArbitrary: fc.Arbitrary<
  (number & t.Brand<NegativeBrand> & t.Brand<t.IntBrand>) | (number & t.Brand<ZeroBrand> & t.Brand<t.IntBrand>)
>
```

Added in v1.1.0
