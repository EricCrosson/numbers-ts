/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

import { PositiveBigInt } from './PositiveBigInt'
import { ZeroBigInt } from './ZeroBigInt'

/**
 * @since 0.0.1
 */
export const NonNegativeBigInt = t.union([ZeroBigInt, PositiveBigInt])

/**
 * @since 0.0.1
 */
export type NonNegativeBigInt = t.TypeOf<typeof NonNegativeBigInt>
