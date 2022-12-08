/**
 * @since 1.0.0
 */

import * as t from 'io-ts'

import { NegativeBigNumber } from './NegativeBigNumber'
import { ZeroBigNumber } from './ZeroBigNumber'

/**
 * @since 1.0.0
 */
export const NonPositiveBigNumber = t.union([NegativeBigNumber, ZeroBigNumber])

/**
 * @since 1.0.0
 */
export type NonPositiveBigNumber = t.TypeOf<typeof NonPositiveBigNumber>
