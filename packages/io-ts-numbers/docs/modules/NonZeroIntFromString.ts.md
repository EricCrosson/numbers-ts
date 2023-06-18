---
title: NonZeroIntFromString.ts
nav_order: 20
parent: Modules
---

## NonZeroIntFromString overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NonZeroIntFromString](#nonzerointfromstring)

---

# utils

## NonZeroIntFromString

**Signature**

```ts
export declare const NonZeroIntFromString: Type<
  | (number & Brand<PositiveBrand> & Brand<IntBrand>)
  | (number & Brand<NegativeBrand> & Brand<IntBrand>),
  string,
  unknown
>;
```

Added in v0.1.0
