/**
 * @since 1.0.0
 */

import { BigNumber } from 'bignumber.js'
import * as t from 'io-ts'

import { BigNumberC } from './BigNumberC'

/**
 * @since 1.0.0
 */
export interface ZeroBigNumberBrand {
  readonly ZeroBigNumber: unique symbol
}

/**
 * @since 1.0.0
 */
export const ZeroBigNumber = t.brand(
  BigNumberC,
  (n): n is t.Branded<BigNumber, ZeroBigNumberBrand> => n.isZero(),
  'ZeroBigNumber',
)

/**
 * @since 1.0.0
 */
export type ZeroBigNumber = t.TypeOf<typeof ZeroBigNumber>
