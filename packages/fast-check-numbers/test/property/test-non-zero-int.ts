import { testProp } from 'ava-fast-check'
import { Int } from 'io-ts'
import { NonZero } from 'io-ts-numbers'

import { NonZeroIntArbitrary } from '../../src/NonZeroInt'

testProp(
  'should yield non-zero integers',
  [NonZeroIntArbitrary],
  (t, num) => {
    t.true(NonZero.is(num))
    t.true(Int.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
