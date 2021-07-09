/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

import { Negative } from './Negative'
import { Zero } from './Zero'

/**
 * @since 0.0.1
 */
export const NonPositive = t.union([Negative, Zero])

/**
 * @since 0.0.1
 */
export type NonPositive = t.TypeOf<typeof NonPositive>
