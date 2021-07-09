import { testProp } from 'ava-fast-check'
import { NegativeBigInt } from 'io-ts-bigint'

import { NegativeBigIntArbitrary } from '../../src/NegativeBigInt'

testProp(
  'should yield negative bigints',
  [NegativeBigIntArbitrary],
  (t, num) => {
    t.true(NegativeBigInt.is(num))
  },
  {
    verbose: true,
    numRuns: 100,
  },
)
