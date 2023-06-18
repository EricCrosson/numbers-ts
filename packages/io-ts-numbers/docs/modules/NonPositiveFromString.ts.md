---
title: NonPositiveFromString.ts
nav_order: 14
parent: Modules
---

## NonPositiveFromString overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NonPositiveFromString](#nonpositivefromstring)

---

# utils

## NonPositiveFromString

**Signature**

```ts
export declare const NonPositiveFromString: Type<
  | (number & Brand<ZeroBrand> & Brand<IntBrand>)
  | Branded<number, NegativeBrand>,
  string,
  unknown
>;
```

Added in v0.0.1
