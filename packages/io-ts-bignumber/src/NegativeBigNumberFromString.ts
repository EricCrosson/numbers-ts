/**
 * @since 1.0.0
 */

import { BigNumberFromString } from './BigNumberFromString'
import { NegativeBigNumber } from './NegativeBigNumber'

/**
 * @since 1.0.0
 */
export const NegativeBigNumberFromString = BigNumberFromString.pipe(
  NegativeBigNumber,
  'NegativeBigIntFromString',
)
