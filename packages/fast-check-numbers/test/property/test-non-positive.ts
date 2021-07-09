import { testProp } from 'ava-fast-check'
import { NonPositive } from 'io-ts-numbers'

import { NonPositiveArbitrary } from '../../src/NonPositive'

testProp(
  'should yield non-positive numbers',
  [NonPositiveArbitrary],
  (t, num) => {
    t.true(NonPositive.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
