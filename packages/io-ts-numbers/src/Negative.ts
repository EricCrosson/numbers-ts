/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export interface NegativeBrand {
  readonly Negative: unique symbol
}

/**
 * @since 0.0.1
 */
export const Negative = t.brand(
  t.number,
  (n): n is t.Branded<number, NegativeBrand> => n < 0,
  'Negative',
)

/**
 * @since 0.0.1
 */
export type Negative = t.TypeOf<typeof Negative>
