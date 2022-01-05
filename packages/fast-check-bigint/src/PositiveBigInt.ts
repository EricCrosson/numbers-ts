/**
 * @since 0.0.1
 */

import * as fc from 'fast-check'
import { PositiveBigInt } from 'io-ts-bigint'

/**
 * @since 0.0.1
 */
export const PositiveBigIntArbitrary: fc.Arbitrary<PositiveBigInt> = fc
  .bigInt({ min: BigInt(1) })
  .filter((n): n is PositiveBigInt => typeof n === 'bigint' && BigInt(0) < n)
