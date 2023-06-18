---
title: NonNegativeInt.ts
nav_order: 11
parent: Modules
---

## NonNegativeInt overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NonNegativeInt](#nonnegativeint)
  - [NonNegativeInt (type alias)](#nonnegativeint-type-alias)

---

# utils

## NonNegativeInt

**Signature**

```ts
export declare const NonNegativeInt: t.IntersectionC<
  [
    t.UnionC<
      [
        t.IntersectionC<
          [t.BrandC<t.NumberC, ZeroBrand>, t.BrandC<t.NumberC, t.IntBrand>]
        >,
        t.BrandC<t.NumberC, PositiveBrand>
      ]
    >,
    t.BrandC<t.NumberC, t.IntBrand>
  ]
>;
```

Added in v0.1.0

## NonNegativeInt (type alias)

**Signature**

```ts
export type NonNegativeInt = t.TypeOf<typeof NonNegativeInt>;
```

Added in v0.1.0
