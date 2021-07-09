import { testProp } from 'ava-fast-check'
import { Int } from 'io-ts'
import { NonPositive } from 'io-ts-numbers'

import { NonPositiveIntArbitrary } from '../../src/NonPositiveInt'

testProp(
  'should yield non-positive integers',
  [NonPositiveIntArbitrary],
  (t, num) => {
    t.true(NonPositive.is(num))
    t.true(Int.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
