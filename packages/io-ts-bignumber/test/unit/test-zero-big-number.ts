import test from 'ava'
import { BigNumber } from 'bignumber.js'

import { ZeroBigNumber } from '../../src/ZeroBigNumber'
import { includes, excludes } from '../assert'

/**
 * Unit under test
 */

test('includes zero', includes, ZeroBigNumber, new BigNumber(0))
test('excludes one', excludes, ZeroBigNumber, new BigNumber(1))
test('excludes negative one', excludes, ZeroBigNumber, new BigNumber(-1))
