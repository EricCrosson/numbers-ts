/**
 * @since 1.0.0
 */

import { BigNumber } from 'bignumber.js'
import * as t from 'io-ts'

import { BigNumberC } from './BigNumberC'

/**
 * @since 1.0.0
 */
export interface PositiveBigNumberBrand {
  readonly PositiveBigNumber: unique symbol
}

/**
 * @since 1.0.0
 */
export const PositiveBigNumber = t.brand(
  BigNumberC,
  (n): n is t.Branded<BigNumber, PositiveBigNumberBrand> => n.isPositive(),
  'PositiveBigNumber',
)

/**
 * @since 1.0.0
 */
export type PositiveBigNumber = t.TypeOf<typeof PositiveBigNumber>
