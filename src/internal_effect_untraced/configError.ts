import * as Either from "@effect/data/Either"
import { constFalse, constTrue, dual, pipe } from "@effect/data/Function"
import * as RA from "@effect/data/ReadonlyArray"
import type * as Cause from "@effect/io/Cause"
import type * as ConfigError from "@effect/io/Config/Error"
import * as OpCodes from "@effect/io/internal_effect_untraced/opCodes/configError"

/** @internal */
const ConfigErrorSymbolKey = "@effect/io/Config/Error"

/** @internal */
export const ConfigErrorTypeId: ConfigError.ConfigErrorTypeId = Symbol.for(
  ConfigErrorSymbolKey
) as ConfigError.ConfigErrorTypeId

/** @internal */
export const proto = {
  [ConfigErrorTypeId]: ConfigErrorTypeId
}

/** @internal */
export const And = (self: ConfigError.ConfigError, that: ConfigError.ConfigError): ConfigError.ConfigError => {
  const error = Object.create(proto)
  error._tag = OpCodes.OP_AND
  error.left = self
  error.right = that
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value(this: ConfigError.And) {
      return `${this.left} and ${this.right}`
    }
  })
  return error
}

/** @internal */
export const Or = (self: ConfigError.ConfigError, that: ConfigError.ConfigError): ConfigError.ConfigError => {
  const error = Object.create(proto)
  error._tag = OpCodes.OP_OR
  error.left = self
  error.right = that
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value(this: ConfigError.Or) {
      return `${this.left} or ${this.right}`
    }
  })
  return error
}

/** @internal */
export const InvalidData = (path: Array<string>, message: string): ConfigError.ConfigError => {
  const error = Object.create(proto)
  error._tag = OpCodes.OP_INVALID_DATA
  error.path = path
  error.message = message
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value(this: ConfigError.InvalidData) {
      const path = pipe(this.path, RA.join("."))
      return `(Invalid data at ${path}: "${this.message}")`
    }
  })
  return error
}

/** @internal */
export const MissingData = (path: Array<string>, message: string): ConfigError.ConfigError => {
  const error = Object.create(proto)
  error._tag = OpCodes.OP_MISSING_DATA
  error.path = path
  error.message = message
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value(this: ConfigError.MissingData) {
      const path = pipe(this.path, RA.join("."))
      return `(Missing data at ${path}: "${this.message}")`
    }
  })
  return error
}

/** @internal */
export const SourceUnavailable = (
  path: Array<string>,
  message: string,
  cause: Cause.Cause<unknown>
): ConfigError.ConfigError => {
  const error = Object.create(proto)
  error._tag = OpCodes.OP_SOURCE_UNAVAILABLE
  error.path = path
  error.message = message
  error.cause = cause
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value(this: ConfigError.SourceUnavailable) {
      const path = pipe(this.path, RA.join("."))
      return `(Source unavailable at ${path}: "${this.message}")`
    }
  })
  return error
}

/** @internal */
export const Unsupported = (path: Array<string>, message: string): ConfigError.ConfigError => {
  const error = Object.create(proto)
  error._tag = OpCodes.OP_UNSUPPORTED
  error.path = path
  error.message = message
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value(this: ConfigError.Unsupported) {
      const path = pipe(this.path, RA.join("."))
      return `(Unsupported operation at ${path}: "${this.message}")`
    }
  })
  return error
}

/** @internal */
export const isConfigError = (u: unknown): u is ConfigError.ConfigError =>
  typeof u === "object" && u != null && ConfigErrorTypeId in u

/** @internal */
export const isAnd = (self: ConfigError.ConfigError): self is ConfigError.And => self._tag === OpCodes.OP_AND

/** @internal */
export const isOr = (self: ConfigError.ConfigError): self is ConfigError.Or => self._tag === OpCodes.OP_OR

/** @internal */
export const isInvalidData = (self: ConfigError.ConfigError): self is ConfigError.InvalidData =>
  self._tag === OpCodes.OP_INVALID_DATA

/** @internal */
export const isMissingData = (self: ConfigError.ConfigError): self is ConfigError.MissingData =>
  self._tag === OpCodes.OP_MISSING_DATA

/** @internal */
export const isSourceUnavailable = (self: ConfigError.ConfigError): self is ConfigError.SourceUnavailable =>
  self._tag === OpCodes.OP_SOURCE_UNAVAILABLE

/** @internal */
export const isUnsupported = (self: ConfigError.ConfigError): self is ConfigError.Unsupported =>
  self._tag === OpCodes.OP_UNSUPPORTED

/** @internal */
export const prefixed: {
  (prefix: Array<string>): (self: ConfigError.ConfigError) => ConfigError.ConfigError
  (self: ConfigError.ConfigError, prefix: Array<string>): ConfigError.ConfigError
} = dual<
  (prefix: Array<string>) => (self: ConfigError.ConfigError) => ConfigError.ConfigError,
  (self: ConfigError.ConfigError, prefix: Array<string>) => ConfigError.ConfigError
>(2, (self, prefix) => {
  switch (self._tag) {
    case OpCodes.OP_AND: {
      return And(prefixed(prefix)(self.left), prefixed(prefix)(self.right))
    }
    case OpCodes.OP_OR: {
      return Or(prefixed(prefix)(self.left), prefixed(prefix)(self.right))
    }
    case OpCodes.OP_INVALID_DATA: {
      return InvalidData([...prefix, ...self.path], self.message)
    }
    case OpCodes.OP_MISSING_DATA: {
      return MissingData([...prefix, ...self.path], self.message)
    }
    case OpCodes.OP_SOURCE_UNAVAILABLE: {
      return SourceUnavailable([...prefix, ...self.path], self.message, self.cause)
    }
    case OpCodes.OP_UNSUPPORTED: {
      return Unsupported([...prefix, ...self.path], self.message)
    }
  }
})

/** @internal */
const IsMissingDataOnlyReducer: ConfigError.ConfigErrorReducer<unknown, boolean> = {
  andCase: (_, left, right) => left && right,
  orCase: (_, left, right) => left && right,
  invalidDataCase: constFalse,
  missingDataCase: constTrue,
  sourceUnavailableCase: constFalse,
  unsupportedCase: constFalse
}

/** @internal */
type ConfigErrorCase = AndCase | OrCase

/** @internal */
interface AndCase {
  readonly _tag: "AndCase"
}

/** @internal */
interface OrCase {
  readonly _tag: "OrCase"
}

/** @internal */
export const reduceWithContext = dual<
  <C, Z>(context: C, reducer: ConfigError.ConfigErrorReducer<C, Z>) => (self: ConfigError.ConfigError) => Z,
  <C, Z>(self: ConfigError.ConfigError, context: C, reducer: ConfigError.ConfigErrorReducer<C, Z>) => Z
>(3, <C, Z>(self: ConfigError.ConfigError, context: C, reducer: ConfigError.ConfigErrorReducer<C, Z>) => {
  const input: Array<ConfigError.ConfigError> = [self]
  const output: Array<Either.Either<ConfigErrorCase, Z>> = []
  while (input.length > 0) {
    const error = input.pop()!
    switch (error._tag) {
      case OpCodes.OP_AND: {
        input.push(error.right)
        input.push(error.left)
        output.push(Either.left({ _tag: "AndCase" }))
        break
      }
      case OpCodes.OP_OR: {
        input.push(error.right)
        input.push(error.left)
        output.push(Either.left({ _tag: "OrCase" }))
        break
      }
      case OpCodes.OP_INVALID_DATA: {
        output.push(Either.right(reducer.invalidDataCase(context, error.path, error.message)))
        break
      }
      case OpCodes.OP_MISSING_DATA: {
        output.push(Either.right(reducer.missingDataCase(context, error.path, error.message)))
        break
      }
      case OpCodes.OP_SOURCE_UNAVAILABLE: {
        output.push(Either.right(reducer.sourceUnavailableCase(context, error.path, error.message, error.cause)))
        break
      }
      case OpCodes.OP_UNSUPPORTED: {
        output.push(Either.right(reducer.unsupportedCase(context, error.path, error.message)))
        break
      }
    }
  }
  const accumulator: Array<Z> = []
  while (output.length > 0) {
    const either = output.pop()!
    switch (either._tag) {
      case "Left": {
        switch (either.left._tag) {
          case "AndCase": {
            const left = accumulator.pop()!
            const right = accumulator.pop()!
            const value = reducer.andCase(context, left, right)
            accumulator.push(value)
            break
          }
          case "OrCase": {
            const left = accumulator.pop()!
            const right = accumulator.pop()!
            const value = reducer.orCase(context, left, right)
            accumulator.push(value)
            break
          }
        }
        break
      }
      case "Right": {
        accumulator.push(either.right)
        break
      }
    }
  }
  if (accumulator.length === 0) {
    throw new Error(
      "BUG: ConfigError.reduceWithContext - please report an issue at https://github.com/Effect-TS/io/issues"
    )
  }
  return accumulator.pop()!
})

/** @internal */
export const isMissingDataOnly = (self: ConfigError.ConfigError): boolean =>
  reduceWithContext(self, void 0, IsMissingDataOnlyReducer)
