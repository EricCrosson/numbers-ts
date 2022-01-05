---
title: Zero.ts
nav_order: 26
parent: Modules
---

## Zero overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Zero](#zero)
  - [Zero (type alias)](#zero-type-alias)
  - [ZeroBrand (interface)](#zerobrand-interface)

---

# utils

## Zero

**Signature**

```ts
export declare const Zero: t.IntersectionC<
  [t.BrandC<t.NumberC, ZeroBrand>, t.BrandC<t.NumberC, t.IntBrand>]
>
```

Added in v0.0.1

## Zero (type alias)

**Signature**

```ts
export type Zero = t.TypeOf<typeof Zero>
```

Added in v0.0.1

## ZeroBrand (interface)

**Signature**

```ts
export interface ZeroBrand {
  readonly Zero: unique symbol
}
```

Added in v0.0.1
