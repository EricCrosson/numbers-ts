import { testProp } from 'ava-fast-check'
import { NonZero } from 'io-ts-numbers'

import { NonZeroArbitrary } from '../../src/NonZero'

testProp(
  'should yield non-zero numbers',
  [NonZeroArbitrary],
  (t, num) => {
    t.true(NonZero.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
