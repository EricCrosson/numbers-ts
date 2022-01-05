import { testProp } from 'ava-fast-check'
import { Int } from 'io-ts'
import { NonPositive, NonPositiveInt } from 'io-ts-numbers'

import { NonPositiveIntArbitrary } from '../../src/NonPositiveInt'

testProp(
  'should yield non-positive integers',
  [NonPositiveIntArbitrary],
  (t, num) => {
    t.true(NonPositive.is(num))
    t.true(Int.is(num))
    t.true(NonPositiveInt.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
