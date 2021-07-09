/**
 * @since 1.1.0
 */

import * as fc from 'fast-check'
import * as t from 'io-ts'
import { Positive } from 'io-ts-numbers'

/**
 * @since 1.1.0
 */
export const PositiveIntArbitrary: fc.Arbitrary<Positive & t.Int> = fc
  .integer({ min: 1 })
  .filter((n): n is Positive & t.Int => Positive.is(n) && t.Int.is(n))
