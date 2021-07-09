/**
 * @since 0.0.1
 */

import { Negative } from './Negative'
import { NumberFromString } from './NumberFromString'

/**
 * @since 0.0.1
 */
export const NegativeFromString = NumberFromString.pipe(Negative)
