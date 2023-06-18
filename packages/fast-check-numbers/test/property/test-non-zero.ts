import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { NonZero } from "io-ts-numbers";

import { NonZeroArbitrary } from "../../src/NonZero";

test("should yield non-zero numbers", () => {
  fc.assert(
    fc.property(NonZeroArbitrary, (num) => {
      assert.ok(NonZero.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
