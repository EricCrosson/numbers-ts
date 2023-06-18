import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { Int } from "io-ts";
import { NonNegative, NonNegativeInt } from "io-ts-numbers";

import { NonNegativeIntArbitrary } from "../../src/NonNegativeInt";

test("should yield non-negative integers", () => {
  fc.assert(
    fc.property(NonNegativeIntArbitrary, (num) => {
      assert.ok(NonNegative.is(num));
      assert.ok(Int.is(num));
      assert.ok(NonNegativeInt.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
