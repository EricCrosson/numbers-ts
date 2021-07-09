import { testProp } from 'ava-fast-check'
import { Int } from 'io-ts'

import { IntArbitrary } from '../../src/Int'

testProp(
  'should yield integers',
  [IntArbitrary],
  (t, num) => {
    t.true(Int.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
