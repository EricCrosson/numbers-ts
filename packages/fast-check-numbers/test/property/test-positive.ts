import { testProp } from 'ava-fast-check'
import { Positive } from 'io-ts-numbers'

import { PositiveArbitrary } from '../../src/Positive'

testProp(
  'should yield positive numbers',
  [PositiveArbitrary],
  (t, num) => {
    t.true(Positive.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
