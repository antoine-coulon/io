/**
 * @since 1.0.0
 */
import type * as FiberId from "@effect/io/Fiber/Id"
import type * as FiberRef from "@effect/io/FiberRef"
import type * as FiberRefs from "@effect/io/FiberRefs"
import * as internal from "@effect/io/internal_effect_untraced/fiberRefs/patch"

/**
 * A `FiberRefsPatch` captures the changes in `FiberRef` values made by a single
 * fiber as a value. This allows fibers to apply the changes made by a workflow
 * without inheriting all the `FiberRef` values of the fiber that executed the
 * workflow.
 *
 * @since 1.0.0
 * @category models
 */
export type FiberRefsPatch = Empty | Add | Remove | Update | AndThen

/**
 * @since 1.0.0
 * @category models
 */
export interface Empty {
  readonly _tag: "Empty"
}

/**
 * @since 1.0.0
 * @category models
 */
export interface Add {
  readonly _tag: "Add"
  readonly fiberRef: FiberRef.FiberRef<unknown>
  readonly value: unknown
}

/**
 * @since 1.0.0
 * @category models
 */
export interface Remove {
  readonly _tag: "Remove"
  readonly fiberRef: FiberRef.FiberRef<unknown>
}

/**
 * @since 1.0.0
 * @category models
 */
export interface Update {
  readonly _tag: "Update"
  readonly fiberRef: FiberRef.FiberRef<unknown>
  readonly patch: unknown
}

/**
 * @since 1.0.0
 * @category models
 */
export interface AndThen {
  readonly _tag: "AndThen"
  readonly first: FiberRefsPatch
  readonly second: FiberRefsPatch
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const empty: (_: void) => FiberRefsPatch = internal.empty

/**
 * Constructs a patch that describes the changes between the specified
 * collections of `FiberRef`
 *
 * @since 1.0.0
 * @category constructors
 */
export const diff: (oldValue: FiberRefs.FiberRefs, newValue: FiberRefs.FiberRefs) => FiberRefsPatch = internal.diff

/**
 * Combines this patch and the specified patch to create a new patch that
 * describes applying the changes from this patch and the specified patch
 * sequentially.
 *
 * @since 1.0.0
 * @category constructors
 */
export const combine: {
  (that: FiberRefsPatch): (self: FiberRefsPatch) => FiberRefsPatch
  (self: FiberRefsPatch, that: FiberRefsPatch): FiberRefsPatch
} = internal.combine

/**
 * Applies the changes described by this patch to the specified collection
 * of `FiberRef` values.
 *
 * @since 1.0.0
 * @category destructors
 */
export const patch: {
  (fiberId: FiberId.Runtime, oldValue: FiberRefs.FiberRefs): (self: FiberRefsPatch) => FiberRefs.FiberRefs
  (self: FiberRefsPatch, fiberId: FiberId.Runtime, oldValue: FiberRefs.FiberRefs): FiberRefs.FiberRefs
} = internal.patch
