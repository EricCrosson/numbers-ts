/**
 * @since 0.0.1
 */

import * as fc from 'fast-check'
import { ZeroBigInt } from 'io-ts-bigint'

/**
 * @since 0.0.1
 */
export const ZeroBigIntArbitrary: fc.Arbitrary<ZeroBigInt> = fc
  .constant(BigInt(0))
  .filter((n): n is ZeroBigInt => typeof n === 'bigint' && n === BigInt(0))
