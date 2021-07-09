/**
 * @since 0.0.1
 */

import { BigIntFromString } from './BigIntFromString'
import { NonPositiveBigInt } from './NonPositiveBigInt'

/**
 * @since 0.0.1
 */
export const NonPositiveBigIntFromString = BigIntFromString.pipe(
  NonPositiveBigInt,
  'NonPositiveBigIntFromString',
)
