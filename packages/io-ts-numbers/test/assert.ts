import { strict as assert } from "node:assert";

import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as t from "io-ts";

export const includes =
  <C extends t.Mixed>(codec: C, a: number) =>
  (): void => {
    pipe(
      codec.decode(a),
      E.fold(
        () => assert.fail(`${codec.name} should not include ${a}`),
        () => assert.ok(true)
      )
    );
  };

export const excludes =
  <C extends t.Mixed>(codec: C, a: number) =>
  (): void => {
    pipe(
      codec.decode(a),
      E.fold(
        () => assert.ok(true),
        () => assert.fail(`${codec.name} should include ${a}`)
      )
    );
  };
