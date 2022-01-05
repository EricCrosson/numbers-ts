---
title: NonPositive.ts
nav_order: 13
parent: Modules
---

## NonPositive overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NonPositive](#nonpositive)
  - [NonPositive (type alias)](#nonpositive-type-alias)

---

# utils

## NonPositive

**Signature**

```ts
export declare const NonPositive: t.UnionC<
  [
    t.BrandC<t.NumberC, NegativeBrand>,
    t.IntersectionC<
      [t.BrandC<t.NumberC, ZeroBrand>, t.BrandC<t.NumberC, t.IntBrand>]
    >,
  ]
>
```

Added in v0.0.1

## NonPositive (type alias)

**Signature**

```ts
export type NonPositive = t.TypeOf<typeof NonPositive>
```

Added in v0.0.1
