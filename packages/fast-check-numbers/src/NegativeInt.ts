/**
 * @since 1.1.0
 */

import * as fc from 'fast-check'
import * as t from 'io-ts'
import { Negative } from 'io-ts-numbers'

/**
 * @since 1.1.0
 */
export const NegativeIntArbitrary: fc.Arbitrary<Negative & t.Int> = fc
  .integer({ max: -1 })
  .filter((n): n is Negative & t.Int => Negative.is(n) && t.Int.is(n))
