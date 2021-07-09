/**
 * @since 1.1.0
 */

import * as fc from 'fast-check'
import * as t from 'io-ts'
import { NonPositive } from 'io-ts-numbers'

/**
 * @since 1.1.0
 */
export const NonPositiveIntArbitrary: fc.Arbitrary<
  NonPositive & t.Int
> = fc
  .integer({ max: 0 })
  .filter((n): n is NonPositive & t.Int => NonPositive.is(n) && t.Int.is(n))
