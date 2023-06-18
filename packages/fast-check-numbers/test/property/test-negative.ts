import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { Negative } from "io-ts-numbers";

import { NegativeArbitrary } from "../../src/Negative";

test("should yield negative numbers", () => {
  fc.assert(
    fc.property(NegativeArbitrary, (num) => {
      assert.ok(Negative.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
