/**
 * @since 0.0.1
 */

import * as fc from 'fast-check'
import { NonZeroBigInt } from 'io-ts-bigint'

/**
 * @since 0.0.1
 */
export const NonZeroBigIntArbitrary: fc.Arbitrary<NonZeroBigInt> = fc
  .bigInt()
  .filter(NonZeroBigInt.is)
