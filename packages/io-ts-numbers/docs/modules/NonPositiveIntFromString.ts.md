---
title: NonPositiveIntFromString.ts
nav_order: 16
parent: Modules
---

## NonPositiveIntFromString overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NonPositiveIntFromString](#nonpositiveintfromstring)

---

# utils

## NonPositiveIntFromString

**Signature**

```ts
export declare const NonPositiveIntFromString: Type<
  | (number & Brand<ZeroBrand> & Brand<IntBrand>)
  | (number & Brand<NegativeBrand> & Brand<IntBrand>),
  string,
  unknown
>;
```

Added in v0.1.0
