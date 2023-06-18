import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { Positive } from "io-ts-numbers";

import { PositiveArbitrary } from "../../src/Positive";

test("should yield positive numbers", () => {
  fc.assert(
    fc.property(PositiveArbitrary, (num) => {
      assert.ok(Positive.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
