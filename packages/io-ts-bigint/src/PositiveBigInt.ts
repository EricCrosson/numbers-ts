/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export interface PositiveBigIntBrand {
  readonly PositiveBigInt: unique symbol
}

/**
 * @since 0.0.1
 */
export const PositiveBigInt = t.brand(
  t.bigint,
  (n): n is t.Branded<bigint, PositiveBigIntBrand> => BigInt(0) < n,
  'PositiveBigInt',
)

/**
 * @since 0.0.1
 */
export type PositiveBigInt = t.TypeOf<typeof PositiveBigInt>
