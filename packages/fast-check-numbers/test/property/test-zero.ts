import { testProp } from 'ava-fast-check'
import { Zero } from 'io-ts-numbers'

import { ZeroArbitrary } from '../../src/Zero'

testProp(
  'should yield zero',
  [ZeroArbitrary],
  (t, num) => {
    t.true(Zero.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
