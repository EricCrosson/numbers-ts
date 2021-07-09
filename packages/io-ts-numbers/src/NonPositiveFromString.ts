/**
 * @since 0.0.1
 */

import { NonPositive } from './NonPositive'
import { NumberFromString } from './NumberFromString'

/**
 * @since 0.0.1
 */
export const NonPositiveFromString = NumberFromString.pipe(NonPositive)
