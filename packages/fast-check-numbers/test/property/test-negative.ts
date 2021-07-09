import { testProp } from 'ava-fast-check'
import { Negative } from 'io-ts-numbers'

import { NegativeArbitrary } from '../../src/Negative'

testProp(
  'should yield negative numbers',
  [NegativeArbitrary],
  (t, num) => {
    t.true(Negative.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
