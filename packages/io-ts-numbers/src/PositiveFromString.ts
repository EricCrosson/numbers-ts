/**
 * @since 0.0.1
 */

import { NumberFromString } from './NumberFromString'
import { Positive } from './Positive'

/**
 * @since 0.0.1
 */
export const PositiveFromString = NumberFromString.pipe(Positive)
