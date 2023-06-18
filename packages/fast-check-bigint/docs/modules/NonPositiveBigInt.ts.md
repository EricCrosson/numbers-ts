---
title: NonPositiveBigInt.ts
nav_order: 4
parent: Modules
---

## NonPositiveBigInt overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NonPositiveBigIntArbitrary](#nonpositivebigintarbitrary)

---

# utils

## NonPositiveBigIntArbitrary

**Signature**

```ts
export declare const NonPositiveBigIntArbitrary: fc.Arbitrary<
  Branded<bigint, ZeroBigIntBrand> | Branded<bigint, NegativeBigIntBrand>
>;
```

Added in v0.0.1
