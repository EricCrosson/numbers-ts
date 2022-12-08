---
title: NonEmptyString.ts
nav_order: 5
parent: Modules
---

## NonEmptyString overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [NonEmptyString](#nonemptystring)
  - [NonEmptyString (type alias)](#nonemptystring-type-alias)
  - [NonEmptyStringBrand (interface)](#nonemptystringbrand-interface)
  - [NonEmptyStringC (type alias)](#nonemptystringc-type-alias)

---

# utils

## NonEmptyString

A codec that succeeds if a string is not empty

**Signature**

```ts
export declare const NonEmptyString: NonEmptyStringC
```

**Example**

```ts
import { NonEmptyString } from 'io-ts-bigint/lib/NonEmptyString'
import { right } from 'fp-ts/lib/Either'
import { PathReporter } from 'io-ts/lib/PathReporter'

assert.deepStrictEqual(NonEmptyString.decode('a'), right('a'))
assert.deepStrictEqual(PathReporter.report(NonEmptyString.decode('')), [
  'Invalid value "" supplied to : NonEmptyString',
])
```

Added in v0.0.1

## NonEmptyString (type alias)

**Signature**

```ts
export type NonEmptyString = t.Branded<string, NonEmptyStringBrand>
```

Added in v0.0.1

## NonEmptyStringBrand (interface)

**Signature**

```ts
export interface NonEmptyStringBrand {
  readonly NonEmptyString: unique symbol
}
```

Added in v0.0.1

## NonEmptyStringC (type alias)

**Signature**

```ts
export type NonEmptyStringC = t.Type<NonEmptyString, string>
```

Added in v0.0.1
