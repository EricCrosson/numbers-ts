---
title: NonZero.ts
nav_order: 9
parent: Modules
---

## NonZero overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NonZeroArbitrary](#nonzeroarbitrary)

---

# utils

## NonZeroArbitrary

**Signature**

```ts
export declare const NonZeroArbitrary: fc.Arbitrary<
  Branded<number, PositiveBrand> | Branded<number, NegativeBrand>
>;
```

Added in v1.0.0
