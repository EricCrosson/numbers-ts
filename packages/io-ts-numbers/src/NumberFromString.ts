/**
 * @since 0.0.1
 */

// This file imported from io-ts-types to avoid 3 peer dependencies

import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export type NumberFromStringC = t.Type<number, string>

/**
 * @example
 * import { NumberFromString } from 'io-ts-numbers/lib/NumberFromString'
 *
 * NumberFromString.decode('1') // right(1)
 * NumberFromString.decode('1.1') // right(1.1)
 *
 * @since 0.0.1
 */
export const NumberFromString: NumberFromStringC = new t.Type<
  number,
  string,
  unknown
>(
  'NumberFromString',
  t.number.is,
  (u, c) =>
    pipe(
      t.string.validate(u, c),
      E.chain((s) => {
        const n = +s
        return isNaN(n) || s.trim() === '' ? t.failure(u, c) : t.success(n)
      }),
    ),
  String,
)
