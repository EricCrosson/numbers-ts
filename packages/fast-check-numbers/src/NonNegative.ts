/**
 * @since 1.0.0
 */

import * as fc from 'fast-check'
import { NonNegative } from 'io-ts-numbers'

/**
 * @since 1.0.0
 */
export const NonNegativeArbitrary: fc.Arbitrary<NonNegative> = fc
  .tuple(fc.float(), fc.integer())
  .map(([f, i]) => f * i)
  .filter(NonNegative.is)
