import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { Int } from "io-ts";
import { NonZero, NonZeroInt } from "io-ts-numbers";

import { NonZeroIntArbitrary } from "../../src/NonZeroInt";

test("should yield non-zero integers", () => {
  fc.assert(
    fc.property(NonZeroIntArbitrary, (num) => {
      assert.ok(NonZero.is(num));
      assert.ok(Int.is(num));
      assert.ok(NonZeroInt.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
