/**
 * @since 0.1.0
 */

import * as t from 'io-ts'

import { NonNegative } from './NonNegative'

/**
 * @since 0.1.0
 */
export const NonNegativeInt = t.intersection(
  [NonNegative, t.Int],
  'NonNegativeInt',
)

/**
 * @since 0.1.0
 */
export type NonNegativeInt = t.TypeOf<typeof NonNegativeInt>
