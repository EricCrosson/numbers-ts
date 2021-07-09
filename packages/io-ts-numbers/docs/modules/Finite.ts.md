---
title: Finite.ts
nav_order: 1
parent: Modules
---

## Finite overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Finite](#finite)
  - [Finite (type alias)](#finite-type-alias)
  - [FiniteBrand (interface)](#finitebrand-interface)

---

# utils

## Finite

**Signature**

```ts
export declare const Finite: t.BrandC<t.NumberC, FiniteBrand>
```

Added in v0.0.1

## Finite (type alias)

**Signature**

```ts
export type Finite = t.TypeOf<typeof Finite>
```

Added in v0.0.1

## FiniteBrand (interface)

**Signature**

```ts
export interface FiniteBrand {
  readonly Finite: unique symbol
}
```

Added in v0.0.1
