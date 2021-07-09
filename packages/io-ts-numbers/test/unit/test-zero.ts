import test from 'ava'

import { Zero } from '../../src/Zero'
import { includes, excludes } from '../assert'

/**
 * Unit under test
 */

test('includes zero', includes, Zero, 0)
test('excludes one', excludes, Zero, 1)
test('excludes negative one', excludes, Zero, -1)
