/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

import { Negative } from './Negative'
import { Positive } from './Positive'

/**
 * @since 0.0.1
 */
export const NonZero = t.union([Negative, Positive])

/**
 * @since 0.0.1
 */
export type NonZero = t.TypeOf<typeof NonZero>
