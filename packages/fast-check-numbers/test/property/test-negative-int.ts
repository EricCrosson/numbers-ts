import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { Int } from "io-ts";
import { Negative, NegativeInt } from "io-ts-numbers";

import { NegativeIntArbitrary } from "../../src/NegativeInt";

test("should yield negative integers", () => {
  fc.assert(
    fc.property(NegativeIntArbitrary, (num) => {
      assert.ok(Negative.is(num));
      assert.ok(Int.is(num));
      assert.ok(NegativeInt.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
