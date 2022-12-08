/**
 * @since 1.0.0
 */

import { BigNumber } from 'bignumber.js'
import { identity } from 'fp-ts/function'
import * as t from 'io-ts'

/**
 * @since 1.0.0
 */
export type BigNumberC = t.Type<BigNumber>

/**
 * @since 1.0.0
 */
export const BigNumberC: BigNumberC = new t.Type<BigNumber, BigNumber, unknown>(
  'BigNumberC',
  (u): u is BigNumber => BigNumber.isBigNumber(u),
  (u, c) =>
    BigNumber.isBigNumber(u) ? t.success(new BigNumber(u)) : t.failure(u, c),
  identity,
)
