/**
 * @since 0.1.0
 */

import * as t from 'io-ts'

import { NonZero } from './NonZero'

/**
 * @since 0.1.0
 */
export const NonZeroInt = t.intersection([NonZero, t.Int], 'NonZeroInt')

/**
 * @since 0.1.0
 */
export type NonZeroInt = t.TypeOf<typeof NonZeroInt>
