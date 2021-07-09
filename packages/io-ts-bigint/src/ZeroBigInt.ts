/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export interface ZeroBigIntBrand {
  readonly ZeroBigInt: unique symbol
}

/**
 * @since 0.0.1
 */
export const ZeroBigInt = t.brand(
  t.bigint,
  (n): n is t.Branded<bigint, ZeroBigIntBrand> => BigInt(0) === n,
  'ZeroBigInt',
)

/**
 * @since 0.0.1
 */
export type ZeroBigInt = t.TypeOf<typeof ZeroBigInt>
