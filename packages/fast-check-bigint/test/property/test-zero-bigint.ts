import { testProp } from 'ava-fast-check'
import { ZeroBigInt } from 'io-ts-bigint'

import { ZeroBigIntArbitrary } from '../../src/ZeroBigInt'

testProp(
  'should yield zero',
  [ZeroBigIntArbitrary],
  (t, num) => {
    t.true(ZeroBigInt.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
