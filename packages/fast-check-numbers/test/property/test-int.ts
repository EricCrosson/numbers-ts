import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { Int } from "io-ts";

import { IntArbitrary } from "../../src/Int";

test("should yield integers", () => {
  fc.assert(
    fc.property(IntArbitrary, (num) => {
      assert.ok(Int.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
