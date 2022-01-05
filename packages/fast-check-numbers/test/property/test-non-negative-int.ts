import { testProp } from 'ava-fast-check'
import { Int } from 'io-ts'
import { NonNegative, NonNegativeInt } from 'io-ts-numbers'

import { NonNegativeIntArbitrary } from '../../src/NonNegativeInt'

testProp(
  'should yield non-negative integers',
  [NonNegativeIntArbitrary],
  (t, num) => {
    t.true(NonNegative.is(num))
    t.true(Int.is(num))
    t.true(NonNegativeInt.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
