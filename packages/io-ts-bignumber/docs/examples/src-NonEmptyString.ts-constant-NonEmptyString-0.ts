import * as assert from 'assert'
import { NonEmptyString } from 'io-ts-bigint/lib/NonEmptyString'
import { right } from 'fp-ts/lib/Either'
import { PathReporter } from 'io-ts/lib/PathReporter'

assert.deepStrictEqual(NonEmptyString.decode('a'), right('a'))
assert.deepStrictEqual(PathReporter.report(NonEmptyString.decode('')), ['Invalid value "" supplied to : NonEmptyString'])
