import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { Int } from "io-ts";
import { NonPositive, NonPositiveInt } from "io-ts-numbers";

import { NonPositiveIntArbitrary } from "../../src/NonPositiveInt";

test("should yield non-positive integers", () => {
  fc.assert(
    fc.property(NonPositiveIntArbitrary, (num) => {
      assert.ok(NonPositive.is(num));
      assert.ok(Int.is(num));
      assert.ok(NonPositiveInt.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
