import { testProp } from 'ava-fast-check'
import { PositiveBigInt } from 'io-ts-bigint'

import { PositiveBigIntArbitrary } from '../../src/PositiveBigInt'

testProp(
  'should yield positive integers',
  [PositiveBigIntArbitrary],
  (t, num) => {
    t.true(PositiveBigInt.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
