/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export interface PositiveBrand {
  readonly Positive: unique symbol
}

/**
 * @since 0.0.1
 */
export const Positive = t.brand(
  t.number,
  (n): n is t.Branded<number, PositiveBrand> => 0 < n,
  'Positive',
)

/**
 * @since 0.0.1
 */
export type Positive = t.TypeOf<typeof Positive>
