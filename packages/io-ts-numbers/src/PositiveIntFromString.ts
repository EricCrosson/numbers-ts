/**
 * @since 0.1.0
 */

import { NumberFromString } from 'io-ts-types'

import { PositiveInt } from './PositiveInt'

/**
 * @since 0.1.0
 */
export const PositiveIntFromString = NumberFromString.pipe(PositiveInt)
