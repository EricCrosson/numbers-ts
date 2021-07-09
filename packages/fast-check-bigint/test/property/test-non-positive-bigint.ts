import { testProp } from 'ava-fast-check'
import { NonPositiveBigInt } from 'io-ts-bigint'

import { NonPositiveBigIntArbitrary } from '../../src/NonPositiveBigInt'

testProp(
  'should yield non-positive integers',
  [NonPositiveBigIntArbitrary],
  (t, num) => {
    t.true(NonPositiveBigInt.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
