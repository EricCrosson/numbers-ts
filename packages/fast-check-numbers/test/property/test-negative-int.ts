import { testProp } from 'ava-fast-check'
import { Int } from 'io-ts'
import { Negative, NegativeInt } from 'io-ts-numbers'

import { NegativeIntArbitrary } from '../../src/NegativeInt'

testProp(
  'should yield negative integers',
  [NegativeIntArbitrary],
  (t, num) => {
    t.true(Negative.is(num))
    t.true(Int.is(num))
    t.true(NegativeInt.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
