/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export interface FiniteBrand {
  readonly Finite: unique symbol
}

/**
 * @since 0.0.1
 */
export const Finite = t.brand(
  t.number,
  (n): n is t.Branded<number, FiniteBrand> => Number.isFinite(n),
  'Finite',
)

/**
 * @since 0.0.1
 */
export type Finite = t.TypeOf<typeof Finite>
