/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export interface NegativeBigIntBrand {
  readonly NegativeBigInt: unique symbol
}

/**
 * @since 0.0.1
 */
export const NegativeBigInt = t.brand(
  t.bigint,
  (n): n is t.Branded<bigint, NegativeBigIntBrand> => n < BigInt(0),
  'NegativeBigInt',
)

/**
 * @since 0.0.1
 */
export type NegativeBigInt = t.TypeOf<typeof NegativeBigInt>
