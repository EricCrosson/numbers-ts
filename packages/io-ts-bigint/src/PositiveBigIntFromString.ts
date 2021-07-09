/**
 * @since 0.0.1
 */

import { BigIntFromString } from './BigIntFromString'
import { PositiveBigInt } from './PositiveBigInt'

/**
 * @since 0.0.1
 */
export const PositiveBigIntFromString = BigIntFromString.pipe(
  PositiveBigInt,
  'PositiveBigIntFromString',
)
