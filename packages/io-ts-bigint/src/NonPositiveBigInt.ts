/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

import { NegativeBigInt } from './NegativeBigInt'
import { ZeroBigInt } from './ZeroBigInt'

/**
 * @since 0.0.1
 */
export const NonPositiveBigInt = t.union([NegativeBigInt, ZeroBigInt])

/**
 * @since 0.0.1
 */
export type NonPositiveBigInt = t.TypeOf<typeof NonPositiveBigInt>
