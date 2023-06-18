import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { PositiveBigInt } from "io-ts-bigint";

import { PositiveBigIntArbitrary } from "../../src/PositiveBigInt";

test("should yield positive integers", () => {
  fc.assert(
    fc.property(PositiveBigIntArbitrary, (num) => {
      assert.ok(PositiveBigInt.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
