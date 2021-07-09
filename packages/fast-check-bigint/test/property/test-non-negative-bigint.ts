import { testProp } from 'ava-fast-check'
import { NonNegativeBigInt } from 'io-ts-bigint'

import { NonNegativeBigIntArbitrary } from '../../src/NonNegativeBigInt'

testProp(
  'should yield non-negative integers',
  [NonNegativeBigIntArbitrary],
  (t, num) => {
    t.true(NonNegativeBigInt.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
