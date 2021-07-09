import test from 'ava'

import { ZeroBigInt } from '../../src/ZeroBigInt'
import { includes, excludes } from '../assert'

/**
 * Unit under test
 */

test('includes zero', includes, ZeroBigInt, BigInt(0))
test('excludes one', excludes, ZeroBigInt, BigInt(1))
test('excludes negative one', excludes, ZeroBigInt, BigInt(-1))
