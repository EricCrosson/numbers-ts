/**
 * @since 0.0.1
 */

import * as fc from 'fast-check'
import { NonPositiveBigInt } from 'io-ts-bigint'

/**
 * @since 0.0.1
 */
export const NonPositiveBigIntArbitrary: fc.Arbitrary<NonPositiveBigInt> = fc
  .bigInt({ max: BigInt(0) })
  .filter(NonPositiveBigInt.is)
