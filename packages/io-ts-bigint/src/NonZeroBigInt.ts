/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

import { NegativeBigInt } from './NegativeBigInt'
import { PositiveBigInt } from './PositiveBigInt'

/**
 * @since 0.0.1
 */
export const NonZeroBigInt = t.union([NegativeBigInt, PositiveBigInt])

/**
 * @since 0.0.1
 */
export type NonZeroBigInt = t.TypeOf<typeof NonZeroBigInt>
