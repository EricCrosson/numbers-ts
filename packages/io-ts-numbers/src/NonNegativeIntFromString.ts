/**
 * @since 0.1.0
 */

import { NumberFromString } from 'io-ts-types'

import { NonNegativeInt } from './NonNegativeInt'

/**
 * @since 0.1.0
 */
export const NonNegativeIntFromString = NumberFromString.pipe(NonNegativeInt)
