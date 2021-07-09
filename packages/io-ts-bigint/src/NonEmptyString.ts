/**
 * @since 0.0.1
 */

// This file imported from io-ts-types to avoid 3 peer dependencies

import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export interface NonEmptyStringBrand {
  readonly NonEmptyString: unique symbol
}

/**
 * @since 0.0.1
 */
export type NonEmptyString = t.Branded<string, NonEmptyStringBrand>

/**
 * @since 0.0.1
 */
export type NonEmptyStringC = t.Type<NonEmptyString, string>

/**
 * A codec that succeeds if a string is not empty
 *
 * @example
 * import { NonEmptyString } from 'io-ts-bigint/lib/NonEmptyString'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(NonEmptyString.decode('a'), right('a'))
 * assert.deepStrictEqual(PathReporter.report(NonEmptyString.decode('')), ['Invalid value "" supplied to : NonEmptyString'])
 *
 * @since 0.0.1
 */
export const NonEmptyString: NonEmptyStringC = t.brand(
  t.string,
  (s): s is NonEmptyString => s.length > 0,
  'NonEmptyString',
)
