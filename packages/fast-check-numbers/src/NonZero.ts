/**
 * @since 1.0.0
 */

import * as fc from 'fast-check'
import { NonZero } from 'io-ts-numbers'

/**
 * @since 1.0.0
 */
export const NonZeroArbitrary: fc.Arbitrary<NonZero> = fc
  .tuple(fc.float(), fc.integer())
  .map(([f, i]) => f * i)
  .filter(NonZero.is)
