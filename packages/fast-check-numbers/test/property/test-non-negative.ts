import { testProp } from 'ava-fast-check'
import { NonNegative } from 'io-ts-numbers'

import { NonNegativeArbitrary } from '../../src/NonNegative'

testProp(
  'should yield non-negative numbers',
  [NonNegativeArbitrary],
  (t, num) => {
    t.true(NonNegative.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
