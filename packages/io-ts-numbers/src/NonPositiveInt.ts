/**
 * @since 0.1.0
 */

import * as t from 'io-ts'

import { NonPositive } from './NonPositive'

/**
 * @since 0.1.0
 */
export const NonPositiveInt = t.intersection(
  [NonPositive, t.Int],
  'NonPositiveInt',
)

/**
 * @since 0.1.0
 */
export type NonPositiveInt = t.TypeOf<typeof NonPositiveInt>
