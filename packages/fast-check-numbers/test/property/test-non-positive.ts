import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { NonPositive } from "io-ts-numbers";

import { NonPositiveArbitrary } from "../../src/NonPositive";

test("should yield non-positive numbers", () => {
  fc.assert(
    fc.property(NonPositiveArbitrary, (num) => {
      assert.ok(NonPositive.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
