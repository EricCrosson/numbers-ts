/**
 * @since 1.0.0
 */

import * as t from 'io-ts'

import { PositiveBigNumber } from './PositiveBigNumber'
import { ZeroBigNumber } from './ZeroBigNumber'

/**
 * @since 1.0.0
 */
export const NonNegativeBigNumber = t.union([ZeroBigNumber, PositiveBigNumber])

/**
 * @since 1.0.0
 */
export type NonNegativeBigNumber = t.TypeOf<typeof NonNegativeBigNumber>
