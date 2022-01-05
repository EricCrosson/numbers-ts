/**
 * @since 0.1.0
 */

import { NumberFromString } from 'io-ts-types'

import { NegativeInt } from './NegativeInt'

/**
 * @since 0.1.0
 */
export const NegativeIntFromString = NumberFromString.pipe(NegativeInt)
