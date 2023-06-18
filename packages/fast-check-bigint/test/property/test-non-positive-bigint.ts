import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { NonPositiveBigInt } from "io-ts-bigint";

import { NonPositiveBigIntArbitrary } from "../../src/NonPositiveBigInt";

test("should yield non-positive integers", () => {
  fc.assert(
    fc.property(NonPositiveBigIntArbitrary, (num) => {
      assert.ok(NonPositiveBigInt.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
