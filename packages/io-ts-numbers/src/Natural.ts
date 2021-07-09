/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

import { Finite } from './Finite'
import { NonNegative } from './NonNegative'

/**
 * @since 0.0.1
 */
export const Natural = t.intersection([t.Int, NonNegative, Finite])

/**
 * @since 0.0.1
 */
export type Natural = t.TypeOf<typeof Natural>
