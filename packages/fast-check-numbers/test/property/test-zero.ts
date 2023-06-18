import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { Zero } from "io-ts-numbers";

import { ZeroArbitrary } from "../../src/Zero";

test("should yield zero", () => {
  fc.assert(
    fc.property(ZeroArbitrary, (num) => {
      assert.ok(Zero.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
