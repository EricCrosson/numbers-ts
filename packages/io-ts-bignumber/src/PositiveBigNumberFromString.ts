/**
 * @since 1.0.0
 */

import { BigNumberFromString } from './BigNumberFromString'
import { PositiveBigNumber } from './PositiveBigNumber'

/**
 * @since 1.0.0
 */
export const PositiveBigNumberFromString = BigNumberFromString.pipe(
  PositiveBigNumber,
  'PositiveBigNumberFromString',
)
