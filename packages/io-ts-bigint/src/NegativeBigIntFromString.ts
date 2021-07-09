/**
 * @since 0.0.1
 */

import { BigIntFromString } from './BigIntFromString'
import { NegativeBigInt } from './NegativeBigInt'

/**
 * @since 0.0.1
 */
export const NegativeBigIntFromString = BigIntFromString.pipe(
  NegativeBigInt,
  'NegativeBigIntFromString',
)
