/**
 * @since 0.1.0
 */

import { NumberFromString } from 'io-ts-types'

import { NonPositiveInt } from './NonPositiveInt'

/**
 * @since 0.1.0
 */
export const NonPositiveIntFromString = NumberFromString.pipe(NonPositiveInt)
