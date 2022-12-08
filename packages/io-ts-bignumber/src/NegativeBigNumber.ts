/**
 * @since 1.0.0
 */

import { BigNumber } from 'bignumber.js'
import * as t from 'io-ts'

import { BigNumberC } from './BigNumberC'

/**
 * @since 1.0.0
 */
export interface NegativeBigNumberBrand {
  readonly NegativeBigNumber: unique symbol
}

/**
 * @since 1.0.0
 */
export const NegativeBigNumber = t.brand(
  BigNumberC,
  (n): n is t.Branded<BigNumber, NegativeBigNumberBrand> => n.isNegative(),
  'NegativeBigNumber',
)

/**
 * @since 1.0.0
 */
export type NegativeBigNumber = t.TypeOf<typeof NegativeBigNumber>
