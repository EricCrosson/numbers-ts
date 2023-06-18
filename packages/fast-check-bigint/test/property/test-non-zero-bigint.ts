import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { NonZeroBigInt } from "io-ts-bigint";

import { NonZeroBigIntArbitrary } from "../../src/NonZeroBigInt";

test("should yield non-zero integers", () => {
  fc.assert(
    fc.property(NonZeroBigIntArbitrary, (num) => {
      assert.ok(NonZeroBigInt.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
