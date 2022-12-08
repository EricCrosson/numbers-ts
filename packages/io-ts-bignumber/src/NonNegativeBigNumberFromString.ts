/**
 * @since 1.0.0
 */

import { BigNumberFromString } from './BigNumberFromString'
import { NonNegativeBigNumber } from './NonNegativeBigNumber'

/**
 * @since 1.0.0
 */
export const NonNegativeBigNumberFromString = BigNumberFromString.pipe(
  NonNegativeBigNumber,
  'NonNegativeBigNumberFromString',
)
