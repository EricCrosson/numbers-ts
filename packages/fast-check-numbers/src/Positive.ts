/**
 * @since 1.0.0
 */

import * as fc from 'fast-check'
import { Positive } from 'io-ts-numbers'

/**
 * @since 1.0.0
 */
export const PositiveArbitrary: fc.Arbitrary<Positive> = fc
  .tuple(fc.float(), fc.integer())
  .map(([f, i]) => f * i)
  .filter(Positive.is)
