/**
 * @since 0.0.1
 */

import { NonNegative } from './NonNegative'
import { NumberFromString } from './NumberFromString'

/**
 * @since 0.0.1
 */
export const NonNegativeFromString = NumberFromString.pipe(NonNegative)
