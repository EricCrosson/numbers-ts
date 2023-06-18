import test from "node:test";
import { strict as assert } from "node:assert";

import fc from "fast-check";
import { NegativeBigInt } from "io-ts-bigint";

import { NegativeBigIntArbitrary } from "../../src/NegativeBigInt";

test("should yield negative bigints", () => {
  fc.assert(
    fc.property(NegativeBigIntArbitrary, (num) => {
      assert.ok(NegativeBigInt.is(num));
    }),
    {
      verbose: true,
      numRuns: 100,
    }
  );
});
