/**
 * @since 1.0.0
 */

import { BigNumberFromString } from './BigNumberFromString'
import { NonZeroBigNumber } from './NonZeroBigNumber'

/**
 * @since 1.0.0
 */
export const NonZeroBigNumberFromString = BigNumberFromString.pipe(
  NonZeroBigNumber,
  'NonZeroBigNumberFromString',
)
