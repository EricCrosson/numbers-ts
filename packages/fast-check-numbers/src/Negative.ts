/**
 * @since 1.0.0
 */

import * as fc from 'fast-check'
import { Negative } from 'io-ts-numbers'

/**
 * @since 1.0.0
 */
export const NegativeArbitrary: fc.Arbitrary<Negative> = fc
  .tuple(fc.float(), fc.integer())
  .map(([f, i]) => f * i)
  .filter(Negative.is)
