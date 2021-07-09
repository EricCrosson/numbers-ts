/**
 * @since 1.1.0
 */

import * as fc from 'fast-check'
import * as t from 'io-ts'
import { NonNegative } from 'io-ts-numbers'

/**
 * @since 1.1.0
 */
export const NonNegativeIntArbitrary: fc.Arbitrary<
  NonNegative & t.Int
> = fc
  .integer({ min: 0 })
  .filter((n): n is NonNegative & t.Int => NonNegative.is(n) && t.Int.is(n))
