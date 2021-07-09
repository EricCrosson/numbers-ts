/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

import { Positive } from './Positive'
import { Zero } from './Zero'

/**
 * @since 0.0.1
 */
export const NonNegative = t.union([Zero, Positive])

/**
 * @since 0.0.1
 */
export type NonNegative = t.TypeOf<typeof NonNegative>
