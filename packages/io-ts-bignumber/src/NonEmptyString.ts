/**
 * @since 1.0.0
 */

// only used transiently so OK to duplicate from io-ts-types here

import * as t from 'io-ts'

/**
 * @since 1.0.0
 */
export interface NonEmptyStringBrand {
  readonly NonEmptyString: unique symbol
}

/**
 * @since 1.0.0
 */
export type NonEmptyString = t.Branded<string, NonEmptyStringBrand>

/**
 * @since 1.0.0
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
 * @since 1.0.0
 */
export const NonEmptyString: NonEmptyStringC = t.brand(
  t.string,
  (s): s is NonEmptyString => s.length > 0,
  'NonEmptyString',
)
