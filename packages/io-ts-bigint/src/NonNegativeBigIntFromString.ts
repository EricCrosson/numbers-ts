/**
 * @since 0.0.1
 */

import { BigIntFromString } from './BigIntFromString'
import { NonNegativeBigInt } from './NonNegativeBigInt'

/**
 * @since 0.0.1
 */
export const NonNegativeBigIntFromString = BigIntFromString.pipe(
  NonNegativeBigInt,
  'NonNegativeBigIntFromString',
)
