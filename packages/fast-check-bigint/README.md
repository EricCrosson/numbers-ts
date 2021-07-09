# fast-check-bigint

[![License][]](https://opensource.org/licenses/ISC)
[![NPM Package][]](https://npmjs.org/package/fast-check-bigint)

[license]: https://img.shields.io/badge/License-ISC-blue.svg
[npm package]: https://img.shields.io/npm/v/fast-check-bigint.svg

> fast-check arbitraries for narrowed bigint types

## Install

```shell
npm install fast-check-bigint
```

## Use

```typescript
import * as fc from 'fast-check'
import { PositiveBigIntArbitrary } from 'fast-check-numbers'

fc.sample(PositiveBigIntArbitrary, 1)
// => [ 15892607245196815218953186833522000282831428489834799369510614168515167883037n ]
```

## Related

- [io-ts-bigint](https://github.com/EricCrosson/numbers-ts/blob/master/packages/io-ts-bigint)

## Acknowledgments

- [fast-check](https://github.com/dubzzz/fast-check)
