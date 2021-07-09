/**
 * @since 1.0.0
 */

import * as fc from 'fast-check'
import { NonPositive } from 'io-ts-numbers'

/**
 * @since 1.0.0
 */
export const NonPositiveArbitrary: fc.Arbitrary<NonPositive> = fc
  .tuple(fc.float(), fc.integer())
  .map(([f, i]) => f * i)
  .filter(NonPositive.is)
