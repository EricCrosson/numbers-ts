import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { ZeroBigInt } from "io-ts-bigint";

import { ZeroBigIntArbitrary } from "../../src/ZeroBigInt";

test("should yield zero", () => {
  fc.assert(
    fc.property(ZeroBigIntArbitrary, (num) => {
      assert.ok(ZeroBigInt.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
