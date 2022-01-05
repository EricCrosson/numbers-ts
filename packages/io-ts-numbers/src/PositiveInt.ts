/**
 * @since 0.1.0
 */

import * as t from 'io-ts'

import { Positive } from './Positive'

/**
 * @since 0.1.0
 */
export const PositiveInt = t.intersection([Positive, t.Int], 'PositiveInt')

/**
 * @since 0.1.0
 */
export type PositiveInt = t.TypeOf<typeof PositiveInt>
