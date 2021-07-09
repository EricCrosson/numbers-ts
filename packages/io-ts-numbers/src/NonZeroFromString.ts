/**
 * @since 0.0.1
 */

import { NonZero } from './NonZero'
import { NumberFromString } from './NumberFromString'

/**
 * @since 0.0.1
 */
export const NonZeroFromString = NumberFromString.pipe(NonZero)
