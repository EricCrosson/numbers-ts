/**
 * @since 1.0.0
 */

import * as fc from 'fast-check'
import { Zero } from 'io-ts-numbers'

/**
 * @since 1.0.0
 */
export const ZeroArbitrary: fc.Arbitrary<Zero> = fc
  .oneof(fc.constant(0), fc.constant(-0))
  .filter(Zero.is)
