import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { NonNegativeBigInt } from "io-ts-bigint";

import { NonNegativeBigIntArbitrary } from "../../src/NonNegativeBigInt";

test("should yield non-negative integers", () => {
  fc.assert(
    fc.property(NonNegativeBigIntArbitrary, (num) => {
      assert.ok(NonNegativeBigInt.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
