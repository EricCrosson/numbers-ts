import { testProp } from 'ava-fast-check'
import { NonZeroBigInt } from 'io-ts-bigint'

import { NonZeroBigIntArbitrary } from '../../src/NonZeroBigInt'

testProp(
  'should yield non-zero integers',
  [NonZeroBigIntArbitrary],
  (t, num) => {
    t.true(NonZeroBigInt.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
