/**
 * @since 0.0.1
 */

import { BigIntFromString } from './BigIntFromString'
import { NonZeroBigInt } from './NonZeroBigInt'

/**
 * @since 0.0.1
 */
export const NonZeroBigIntFromString = BigIntFromString.pipe(
  NonZeroBigInt,
  'NonZeroBigIntFromString',
)
