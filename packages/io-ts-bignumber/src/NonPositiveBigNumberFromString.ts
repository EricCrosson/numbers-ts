/**
 * @since 1.0.0
 */

import { BigNumberFromString } from './BigNumberFromString'
import { NonPositiveBigNumber } from './NonPositiveBigNumber'

/**
 * @since 1.0.0
 */
export const NonPositiveBigNumberFromString = BigNumberFromString.pipe(
  NonPositiveBigNumber,
  'NonPositiveBigNumberFromString',
)
