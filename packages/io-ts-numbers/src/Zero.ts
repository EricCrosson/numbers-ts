/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export interface ZeroBrand {
  readonly Zero: unique symbol
}

/**
 * @since 0.0.1
 */
export const Zero = t.brand(
  t.number,
  (n): n is t.Branded<number, ZeroBrand> => 0 === n,
  'Zero',
)

/**
 * @since 0.0.1
 */
export type Zero = t.TypeOf<typeof Zero>
