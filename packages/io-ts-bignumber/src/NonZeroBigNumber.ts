/**
 * @since 1.0.0
 */

import * as t from 'io-ts'

import { NegativeBigNumber } from './NegativeBigNumber'
import { PositiveBigNumber } from './PositiveBigNumber'

/**
 * @since 1.0.0
 */
export const NonZeroBigNumber = t.union([NegativeBigNumber, PositiveBigNumber])

/**
 * @since 1.0.0
 */
export type NonZeroBigNumber = t.TypeOf<typeof NonZeroBigNumber>
