/**
 * @since 0.0.1
 */

import * as fc from 'fast-check'
import { NegativeBigInt } from 'io-ts-bigint'

/**
 * @since 0.0.1
 */
export const NegativeBigIntArbitrary: fc.Arbitrary<NegativeBigInt> = fc
  .bigInt({ max: BigInt(-1) })
  .filter(NegativeBigInt.is)
