---
title: NonNegativeIntFromString.ts
nav_order: 12
parent: Modules
---

## NonNegativeIntFromString overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NonNegativeIntFromString](#nonnegativeintfromstring)

---

# utils

## NonNegativeIntFromString

**Signature**

```ts
export declare const NonNegativeIntFromString: Type<
  | (number & Brand<ZeroBrand> & Brand<IntBrand>)
  | (number & Brand<PositiveBrand> & Brand<IntBrand>),
  string,
  unknown
>;
```

Added in v0.1.0
