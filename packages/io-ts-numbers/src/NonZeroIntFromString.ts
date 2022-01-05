/**
 * @since 0.1.0
 */

import { NumberFromString } from 'io-ts-types'

import { NonZeroInt } from './NonZeroInt'

/**
 * @since 0.1.0
 */
export const NonZeroIntFromString = NumberFromString.pipe(NonZeroInt)
