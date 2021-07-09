/**
 * @since 1.1.0
 */

import * as fc from 'fast-check'
import * as t from 'io-ts'

/**
 * @since 1.1.0
 */
export const IntArbitrary: fc.Arbitrary<t.Int> = fc.integer().filter(t.Int.is)
