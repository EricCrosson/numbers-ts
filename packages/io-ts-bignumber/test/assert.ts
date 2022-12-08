import { ExecutionContext } from 'ava'
import { BigNumber } from 'bignumber.js'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as t from 'io-ts'

export function includes<C extends t.Mixed>(
  t: ExecutionContext,
  codec: C,
  a: BigNumber,
): void {
  pipe(
    codec.decode(a),
    E.fold(
      () => t.fail(`${codec.name} should not include ${a}`),
      () => t.pass(),
    ),
  )
}
includes.title = (providedTitle = ''): string => providedTitle

export function excludes<C extends t.Mixed>(
  t: ExecutionContext,
  codec: C,
  a: BigNumber,
): void {
  pipe(
    codec.decode(a),
    E.fold(() => t.pass(), () => t.fail(`${codec.name} should include ${a}`)),
  )
}
excludes.title = (providedTitle = ''): string => providedTitle
