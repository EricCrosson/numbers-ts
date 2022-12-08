/**
 * @since 1.0.0
 */

// This file imported from io-ts-types to avoid 3 peer dependencies

import { BigNumber } from 'bignumber.js'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as t from 'io-ts'

// only used transiently so OK to duplicate here
import { NonEmptyString } from './NonEmptyString'

/**
 * @since 1.0.0
 */
export type BigNumberFromStringC = t.Type<BigNumber, string>

/**
 * @import
 * example { BigNumberFromString } from 'io-ts-bignumber/lib/BigNumberFromString'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(BigNumberFromString.decode('1'), right(new BigNumber(1)))
 * assert.deepStrictEqual(PathReporter.report(BigNumberFromString.decode('')), ['Invalid value "" supplied to : BigNumberFromString'])
 * assert.deepStrictEqual(PathReporter.report(BigNumberFromString.decode(' ')), ['Invalid value " " supplied to : BigNumberFromString'])
 *
 * @since 1.0.0
 */
export const BigNumberFromString: BigNumberFromStringC = new t.Type<
  BigNumber,
  string,
  unknown
>(
  'BigNumberFromString',
  (u): u is BigNumber => BigNumber.isBigNumber(u),
  (u, c) =>
    pipe(
      t.string.validate(u, c),
      E.chain((s) => {
        if (!NonEmptyString.is(s.trim())) {
          return t.failure(u, c)
        }
        try {
          return t.success(new BigNumber(s))
        } catch (error) {
          return t.failure(u, c)
        }
      }),
    ),
  String,
)
