import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { Int } from "io-ts";
import { Positive, PositiveInt } from "io-ts-numbers";

import { PositiveIntArbitrary } from "../../src/PositiveInt";

test("should yield positive integers", () => {
  fc.assert(
    fc.property(PositiveIntArbitrary, (num) => {
      assert.ok(Positive.is(num));
      assert.ok(Int.is(num));
      assert.ok(PositiveInt.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
