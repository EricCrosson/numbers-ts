/**
 * @since 0.0.1
 */

import * as fc from 'fast-check'
import { NonNegativeBigInt } from 'io-ts-bigint'

/**
 * @since 0.0.1
 */
export const NonNegativeBigIntArbitrary: fc.Arbitrary<NonNegativeBigInt> = fc
  .bigInt({ min: BigInt(0) })
  .filter(NonNegativeBigInt.is)
