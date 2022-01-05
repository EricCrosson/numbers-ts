/**
 * @since 0.1.0
 */

import * as t from 'io-ts'

import { Negative } from './Negative'

/**
 * @since 0.1.0
 */
export const NegativeInt = t.intersection([Negative, t.Int], 'NegativeInt')

/**
 * @since 0.1.0
 */
export type NegativeInt = t.TypeOf<typeof NegativeInt>
