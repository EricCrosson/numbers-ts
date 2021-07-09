/**
 * @since 0.0.1
 */

// This file imported from io-ts-types to avoid 3 peer dependencies

import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as t from 'io-ts'

import { NonEmptyString } from './NonEmptyString'

/**
 * @since 0.5.11
 */
export type BigIntFromStringC = t.Type<bigint, string>

/**
 * @import
 * example { BigIntFromString } from 'io-ts-bigint/lib/BigIntFromString'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(BigIntFromString.decode('1'), right(BigInt(1)))
 * assert.deepStrictEqual(PathReporter.report(BigIntFromString.decode('1.1')), ['Invalid value "1.1" supplied to : BigIntFromString'])
 * assert.deepStrictEqual(PathReporter.report(BigIntFromString.decode('')), ['Invalid value "" supplied to : BigIntFromString'])
 * assert.deepStrictEqual(PathReporter.report(BigIntFromString.decode(' ')), ['Invalid value " " supplied to : BigIntFromString'])
 *
 * @since 0.5.11
 */
export const BigIntFromString: BigIntFromStringC = new t.Type<
  bigint,
  string,
  unknown
>(
  'BigIntFromString',
  (u): u is bigint => typeof u === 'bigint',
  (u, c) =>
    pipe(
      t.string.validate(u, c),
      E.chain((s) => {
        if (!NonEmptyString.is(s.trim())) {
          return t.failure(u, c)
        }
        try {
          return t.success(BigInt(s))
        } catch (error) {
          return t.failure(u, c)
        }
      }),
    ),
  String,
)
