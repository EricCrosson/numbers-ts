import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { NonNegative } from "io-ts-numbers";

import { NonNegativeArbitrary } from "../../src/NonNegative";

test("should yield non-negative numbers", () => {
  fc.assert(
    fc.property(NonNegativeArbitrary, (num) => {
      assert.ok(NonNegative.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
