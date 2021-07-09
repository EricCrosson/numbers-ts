---
title: Natural.ts
nav_order: 3
parent: Modules
---

## Natural overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Natural](#natural)
  - [Natural (type alias)](#natural-type-alias)

---

# utils

## Natural

**Signature**

```ts
export declare const Natural: t.IntersectionC<
  [
    t.BrandC<t.NumberC, t.IntBrand>,
    t.UnionC<[t.BrandC<t.NumberC, ZeroBrand>, t.BrandC<t.NumberC, PositiveBrand>]>,
    t.BrandC<t.NumberC, FiniteBrand>
  ]
>
```

Added in v0.0.1

## Natural (type alias)

**Signature**

```ts
export type Natural = t.TypeOf<typeof Natural>
```

Added in v0.0.1
