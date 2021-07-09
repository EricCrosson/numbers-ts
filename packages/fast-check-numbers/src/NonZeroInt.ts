/**
 * @since 1.1.0
 */

import * as fc from 'fast-check'
import * as t from 'io-ts'
import { NonZero } from 'io-ts-numbers'

/**
 * @since 1.1.0
 */
export const NonZeroIntArbitrary: fc.Arbitrary<
  NonZero & t.Int
> = fc
  .integer()
  .filter((n): n is NonZero & t.Int => NonZero.is(n) && t.Int.is(n))
