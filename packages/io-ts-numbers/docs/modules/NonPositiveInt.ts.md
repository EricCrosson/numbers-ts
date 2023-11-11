---
title: NonPositiveInt.ts
nav_order: 15
parent: Modules
---

## NonPositiveInt overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NonPositiveInt](#nonpositiveint)
  - [NonPositiveInt (type alias)](#nonpositiveint-type-alias)

---

# utils

## NonPositiveInt

**Signature**

```ts
export declare const NonPositiveInt: t.IntersectionC<
  [
    t.UnionC<
      [
        t.BrandC<t.NumberC, NegativeBrand>,
        t.IntersectionC<
          [t.BrandC<t.NumberC, ZeroBrand>, t.BrandC<t.NumberC, t.IntBrand>]
        >,
      ]
    >,
    t.BrandC<t.NumberC, t.IntBrand>,
  ]
>;
```

Added in v0.1.0

## NonPositiveInt (type alias)

**Signature**

```ts
export type NonPositiveInt = t.TypeOf<typeof NonPositiveInt>;
```

Added in v0.1.0
