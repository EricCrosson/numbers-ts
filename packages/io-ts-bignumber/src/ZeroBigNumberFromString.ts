/**
 * @since 1.0.0
 */

import { BigNumberFromString } from './BigNumberFromString'
import { ZeroBigNumber } from './ZeroBigNumber'

/**
 * @since 1.0.0
 */
export const ZeroBigNumberFromString = BigNumberFromString.pipe(
  ZeroBigNumber,
  'ZeroBigNumberFromString',
)
