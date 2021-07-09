/**
 * @since 0.0.1
 */

import { BigIntFromString } from './BigIntFromString'
import { ZeroBigInt } from './ZeroBigInt'

/**
 * @since 0.0.1
 */
export const ZeroBigIntFromString = BigIntFromString.pipe(
  ZeroBigInt,
  'ZeroBigIntFromString',
)
