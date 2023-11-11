---
title: NonZeroInt.ts
nav_order: 19
parent: Modules
---

## NonZeroInt overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NonZeroInt](#nonzeroint)
  - [NonZeroInt (type alias)](#nonzeroint-type-alias)

---

# utils

## NonZeroInt

**Signature**

```ts
export declare const NonZeroInt: t.IntersectionC<
  [
    t.UnionC<
      [t.BrandC<t.NumberC, NegativeBrand>, t.BrandC<t.NumberC, PositiveBrand>]
    >,
    t.BrandC<t.NumberC, t.IntBrand>,
  ]
>;
```

Added in v0.1.0

## NonZeroInt (type alias)

**Signature**

```ts
export type NonZeroInt = t.TypeOf<typeof NonZeroInt>;
```

Added in v0.1.0
