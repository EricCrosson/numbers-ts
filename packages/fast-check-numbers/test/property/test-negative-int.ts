import { testProp } from 'ava-fast-check'
import { Int } from 'io-ts'
import { Negative } from 'io-ts-numbers'

import { NegativeIntArbitrary } from '../../src/NegativeInt'

testProp(
  'should yield negative integers',
  [NegativeIntArbitrary],
  (t, num) => {
    t.true(Negative.is(num))
    t.true(Int.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
