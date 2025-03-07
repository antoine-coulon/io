import * as Context from "@effect/data/Context"
import * as Data from "@effect/data/Data"
import * as Debug from "@effect/data/Debug"
import type * as Duration from "@effect/data/Duration"
import * as Either from "@effect/data/Either"
import * as Equal from "@effect/data/Equal"
import { pipe } from "@effect/data/Function"
import * as Hash from "@effect/data/Hash"
import * as MutableHashMap from "@effect/data/MutableHashMap"
import * as MutableQueue from "@effect/data/MutableQueue"
import * as MutableRef from "@effect/data/MutableRef"
import * as Option from "@effect/data/Option"
import type * as Cache from "@effect/io/Cache"
import type * as Clock from "@effect/io/Clock"
import * as Deferred from "@effect/io/Deferred"
import type * as Effect from "@effect/io/Effect"
import * as Exit from "@effect/io/Exit"
import type * as FiberId from "@effect/io/Fiber/Id"
import * as core from "@effect/io/internal_effect_untraced/core"
import * as effect from "@effect/io/internal_effect_untraced/effect"
import { none } from "@effect/io/internal_effect_untraced/fiberId"

/**
 * A `MapValue` represents a value in the cache. A value may either be
 * `Pending` with a `Promise` that will contain the result of computing the
 * lookup function, when it is available, or `Complete` with an `Exit` value
 * that contains the result of computing the lookup function.
 *
 * @internal
 */
export type MapValue<Key, Error, Value> =
  | Complete<Key, Error, Value>
  | Pending<Key, Error, Value>
  | Refreshing<Key, Error, Value>

/** @internal */
export interface Complete<Key, Error, Value> {
  readonly _tag: "Complete"
  readonly key: MapKey<Key>
  readonly exit: Exit.Exit<Error, Value>
  readonly entryStats: Cache.EntryStats
  readonly timeToLiveMillis: number
}

/** @internal */
export interface Pending<Key, Error, Value> {
  readonly _tag: "Pending"
  readonly key: MapKey<Key>
  readonly deferred: Deferred.Deferred<Error, Value>
}

/** @internal */
export interface Refreshing<Key, Error, Value> {
  readonly _tag: "Refreshing"
  readonly deferred: Deferred.Deferred<Error, Value>
  readonly complete: Complete<Key, Error, Value>
}

/** @internal */
export const complete = <Key, Error, Value>(
  key: MapKey<Key>,
  exit: Exit.Exit<Error, Value>,
  entryStats: Cache.EntryStats,
  timeToLiveMillis: number
): MapValue<Key, Error, Value> =>
  Data.struct({
    _tag: "Complete",
    key,
    exit,
    entryStats,
    timeToLiveMillis
  })

/** @internal */
export const pending = <Key, Error, Value>(
  key: MapKey<Key>,
  deferred: Deferred.Deferred<Error, Value>
): MapValue<Key, Error, Value> =>
  Data.struct({
    _tag: "Pending",
    key,
    deferred
  })

/** @internal */
export const refreshing = <Key, Error, Value>(
  deferred: Deferred.Deferred<Error, Value>,
  complete: Complete<Key, Error, Value>
): MapValue<Key, Error, Value> =>
  Data.struct({
    _tag: "Refreshing",
    deferred,
    complete
  })

/** @internal */
export const MapKeyTypeId = Symbol.for("@effect/cache/Cache/MapKey")

/** @internal */
export type MapKeyTypeId = typeof MapKeyTypeId

/**
 * A `MapKey` represents a key in the cache. It contains mutable references
 * to the previous key and next key in the `KeySet` to support an efficient
 * implementation of a sorted set of keys.
 *
 * @internal
 */
export interface MapKey<K> extends Equal.Equal {
  readonly [MapKeyTypeId]: MapKeyTypeId
  current: K
  previous: MapKey<K> | undefined
  next: MapKey<K> | undefined
}

class MapKeyImpl<K> implements MapKey<K> {
  readonly [MapKeyTypeId]: MapKeyTypeId = MapKeyTypeId
  previous: MapKey<K> | undefined = undefined
  next: MapKey<K> | undefined = undefined
  constructor(readonly current: K) {}
  [Hash.symbol](): number {
    return pipe(
      Hash.hash(this.current),
      Hash.combine(Hash.hash(this.previous)),
      Hash.combine(Hash.hash(this.next))
    )
  }
  [Equal.symbol](that: unknown): boolean {
    if (this === that) {
      return true
    }
    return isMapKey(that) &&
      Equal.equals(this.current, that.current) &&
      Equal.equals(this.previous, that.previous) &&
      Equal.equals(this.next, that.next)
  }
}

/** @internal */
export const makeMapKey = <K>(current: K): MapKey<K> => new MapKeyImpl(current)

/** @internal */
export const isMapKey = (u: unknown): u is MapKey<unknown> => typeof u === "object" && u != null && MapKeyTypeId in u

/**
 * A `KeySet` is a sorted set of keys in the cache ordered by last access.
 * For efficiency, the set is implemented in terms of a doubly linked list
 * and is not safe for concurrent access.
 *
 * @internal
 */
export interface KeySet<K> {
  head: MapKey<K> | undefined
  tail: MapKey<K> | undefined
  /**
   * Adds the specified key to the set.
   */
  add(key: MapKey<K>): void
  /**
   * Removes the lowest priority key from the set.
   */
  remove(): MapKey<K> | undefined
}

class KeySetImpl<K> implements KeySet<K> {
  head: MapKey<K> | undefined = undefined
  tail: MapKey<K> | undefined = undefined
  add(key: MapKey<K>): void {
    if (key !== this.tail) {
      if (this.tail === undefined) {
        this.head = key
        this.tail = key
      } else {
        const previous = key.previous
        const next = key.next
        if (next !== undefined) {
          key.next = undefined
          if (previous !== undefined) {
            previous.next = next
            next.previous = previous
          } else {
            this.head = next
            this.head.previous = undefined
          }
        }
        this.tail.next = key
        key.previous = this.tail
        this.tail = key
      }
    }
  }
  remove(): MapKey<K> | undefined {
    const key = this.head
    if (key !== undefined) {
      const next = key.next
      if (next !== undefined) {
        key.next = undefined
        this.head = next
        this.head.previous = undefined
      } else {
        this.head = undefined
        this.tail = undefined
      }
    }
    return key
  }
}

/** @internal */
export const makeKeySet = <K>(): KeySet<K> => new KeySetImpl<K>()

/**
 * The `CacheState` represents the mutable state underlying the cache.
 *
 * @internal
 */
export interface CacheState<Key, Error, Value> {
  map: MutableHashMap.MutableHashMap<Key, MapValue<Key, Error, Value>>
  keys: KeySet<Key>
  accesses: MutableQueue.MutableQueue<MapKey<Key>>
  updating: MutableRef.MutableRef<boolean>
  hits: number
  misses: number
}

/**
 * Constructs a new `CacheState` from the specified values.
 *
 * @internal
 */
export const makeCacheState = <Key, Error, Value>(
  map: MutableHashMap.MutableHashMap<Key, MapValue<Key, Error, Value>>,
  keys: KeySet<Key>,
  accesses: MutableQueue.MutableQueue<MapKey<Key>>,
  updating: MutableRef.MutableRef<boolean>,
  hits: number,
  misses: number
): CacheState<Key, Error, Value> => ({
  map,
  keys,
  accesses,
  updating,
  hits,
  misses
})

/**
 * Constructs an initial cache state.
 *
 * @internal
 */
export const initialCacheState = <Key, Error, Value>(): CacheState<Key, Error, Value> =>
  makeCacheState(
    MutableHashMap.empty(),
    makeKeySet(),
    MutableQueue.unbounded(),
    MutableRef.make(false),
    0,
    0
  )

/** @internal */
const CacheSymbolKey = "@effect/cache/Cache"

/** @internal */
export const CacheTypeId: Cache.CacheTypeId = Symbol.for(
  CacheSymbolKey
) as Cache.CacheTypeId

const cacheVariance = {
  _Key: (_: unknown) => _,
  _Error: (_: never) => _,
  _Value: (_: never) => _
}

/** @internal */
export const makeCacheStats = (
  hits: number,
  misses: number,
  size: number
): Cache.CacheStats => ({
  hits,
  misses,
  size
})

/** @internal */
export const makeEntryStats = (loadedMillis: number): Cache.EntryStats => ({
  loadedMillis
})

class CacheImpl<Key, Error, Value> implements Cache.Cache<Key, Error, Value> {
  readonly [CacheTypeId] = cacheVariance
  readonly cacheState: CacheState<Key, Error, Value>
  constructor(
    readonly capacity: number,
    readonly context: Context.Context<any>,
    readonly fiberId: FiberId.FiberId,
    readonly lookup: Cache.Lookup<Key, any, Error, Value>,
    readonly timeToLive: (exit: Exit.Exit<Error, Value>) => Duration.Duration
  ) {
    this.cacheState = initialCacheState()
  }

  get(key: Key): Effect.Effect<never, Error, Value> {
    return Debug.bodyWithTrace((trace) => core.map(this.getEither(key), Either.merge).traced(trace))
  }

  cacheStats(): Effect.Effect<never, never, Cache.CacheStats> {
    return Debug.bodyWithTrace((trace) =>
      core.sync(() =>
        makeCacheStats(
          this.cacheState.hits,
          this.cacheState.misses,
          MutableHashMap.size(this.cacheState.map)
        )
      ).traced(trace)
    )
  }

  getOption(key: Key): Effect.Effect<never, Error, Option.Option<Value>> {
    return Debug.bodyWithTrace((trace) =>
      core.suspend(() =>
        Option.match(MutableHashMap.get(this.cacheState.map, key), () => {
          const mapKey = makeMapKey(key)
          this.trackAccess(mapKey)
          this.trackMiss()
          return core.succeed(Option.none<Value>())
        }, (value) => this.resolveMapValue(value))
      ).traced(trace)
    )
  }

  getOptionComplete(key: Key): Effect.Effect<never, never, Option.Option<Value>> {
    return Debug.bodyWithTrace((trace) =>
      core.suspend(() =>
        Option.match(MutableHashMap.get(this.cacheState.map, key), () => {
          const mapKey = makeMapKey(key)
          this.trackAccess(mapKey)
          this.trackMiss()
          return core.succeed(Option.none<Value>())
        }, (value) => this.resolveMapValue(value, true) as Effect.Effect<never, never, Option.Option<Value>>)
      ).traced(trace)
    )
  }

  contains(key: Key): Effect.Effect<never, never, boolean> {
    return Debug.bodyWithTrace((trace) => core.sync(() => MutableHashMap.has(this.cacheState.map, key)).traced(trace))
  }

  entryStats(key: Key): Effect.Effect<never, never, Option.Option<Cache.EntryStats>> {
    return Debug.bodyWithTrace((trace) =>
      core.sync(() => {
        const option = MutableHashMap.get(this.cacheState.map, key)
        if (Option.isSome(option)) {
          switch (option.value._tag) {
            case "Complete": {
              const loaded = option.value.entryStats.loadedMillis
              return Option.some(makeEntryStats(loaded))
            }
            case "Pending": {
              return Option.none()
            }
            case "Refreshing": {
              const loaded = option.value.complete.entryStats.loadedMillis
              return Option.some(makeEntryStats(loaded))
            }
          }
        }
        return Option.none()
      }).traced(trace)
    )
  }

  getEither(key: Key): Effect.Effect<never, Error, Either.Either<Value, Value>> {
    return Debug.bodyWithTrace((trace) =>
      core.suspend((): Effect.Effect<never, Error, Either.Either<Value, Value>> => {
        const k = key
        let mapKey: MapKey<Key> | undefined = undefined
        let deferred: Deferred.Deferred<Error, Value> | undefined = undefined
        let value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k))
        if (value === undefined) {
          deferred = Deferred.unsafeMake<Error, Value>(this.fiberId)
          mapKey = makeMapKey(k)
          if (MutableHashMap.has(this.cacheState.map, k)) {
            value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k))
          } else {
            MutableHashMap.set(this.cacheState.map, k, pending(mapKey, deferred))
          }
        }
        if (value === undefined) {
          this.trackAccess(mapKey!)
          this.trackMiss()
          return core.map(this.lookupValueOf(key, deferred!), Either.right)
        } else {
          return core.flatMap(
            this.resolveMapValue(value),
            Option.match(
              () => this.getEither(key),
              (value) => core.succeed(Either.left(value))
            )
          )
        }
      })
        .traced(trace)
    )
  }

  invalidate(key: Key): Effect.Effect<never, never, void> {
    return Debug.bodyWithTrace((trace) =>
      core.sync(() => {
        MutableHashMap.remove(this.cacheState.map, key)
      }).traced(trace)
    )
  }

  invalidateWhen(key: Key, when: (value: Value) => boolean): Effect.Effect<never, never, void> {
    return Debug.bodyWithTrace((trace) =>
      core.sync(() => {
        const value = MutableHashMap.get(this.cacheState.map, key)
        if (Option.isSome(value) && value.value._tag === "Complete") {
          if (value.value.exit._tag === "Success") {
            if (when(value.value.exit.value)) {
              MutableHashMap.remove(this.cacheState.map, key)
            }
          }
        }
      }).traced(trace)
    )
  }

  invalidateAll(): Effect.Effect<never, never, void> {
    return Debug.bodyWithTrace((trace) =>
      core.sync(() => {
        this.cacheState.map = MutableHashMap.empty()
      }).traced(trace)
    )
  }

  refresh(key: Key): Effect.Effect<never, Error, void> {
    return Debug.bodyWithTrace((trace) =>
      effect.clockWith((clock) =>
        core.suspend(() => {
          const k = key
          const deferred: Deferred.Deferred<Error, Value> = Deferred.unsafeMake(this.fiberId)
          let value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k))
          if (value === undefined) {
            if (MutableHashMap.has(this.cacheState.map, k)) {
              value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k))
            } else {
              MutableHashMap.set(this.cacheState.map, k, pending(makeMapKey(k), deferred))
            }
          }
          if (value === undefined) {
            return core.asUnit(this.lookupValueOf(key, deferred))
          } else {
            switch (value._tag) {
              case "Complete": {
                if (this.hasExpired(clock, value.timeToLiveMillis)) {
                  const found = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k))
                  if (Equal.equals(found, value)) {
                    MutableHashMap.remove(this.cacheState.map, k)
                  }
                  return core.asUnit(this.get(key))
                }
                // Only trigger the lookup if we're still the current value, `completedResult`
                return pipe(
                  this.lookupValueOf(key, deferred),
                  effect.when(() => {
                    const current = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k))
                    if (Equal.equals(current, value)) {
                      const mapValue = refreshing(deferred, value as Complete<Key, Error, Value>)
                      MutableHashMap.set(this.cacheState.map, k, mapValue)
                      return true
                    }
                    return false
                  }),
                  core.asUnit
                )
              }
              case "Pending": {
                return Deferred.await(value.deferred)
              }
              case "Refreshing": {
                return Deferred.await(value.deferred)
              }
            }
          }
        })
      ).traced(trace)
    )
  }

  set<Key, Error, Value>(
    this: CacheImpl<Key, Error, Value>,
    key: Key,
    value: Value
  ): Effect.Effect<never, never, void> {
    return Debug.bodyWithTrace((trace) =>
      effect.clockWith((clock) =>
        core.sync(() => {
          const now = clock.unsafeCurrentTimeMillis()
          const k = key
          const lookupResult = Exit.succeed(value)
          const mapValue = complete(
            makeMapKey(k),
            lookupResult,
            makeEntryStats(now),
            now + this.timeToLive(lookupResult).millis
          )
          MutableHashMap.set(
            this.cacheState.map,
            k,
            mapValue as Complete<Key, Error, Value>
          )
        })
      ).traced(trace)
    )
  }

  size(): Effect.Effect<never, never, number> {
    return Debug.bodyWithTrace((trace) =>
      core.sync(() => {
        return MutableHashMap.size(this.cacheState.map)
      }).traced(trace)
    )
  }

  values(): Effect.Effect<never, never, Array<Value>> {
    return Debug.bodyWithTrace((trace) =>
      core.sync(() => {
        const values: Array<Value> = []
        for (const entry of this.cacheState.map) {
          if (entry[1]._tag === "Complete" && entry[1].exit._tag === "Success") {
            values.push(entry[1].exit.value)
          }
        }
        return values
      }).traced(trace)
    )
  }

  entries<Key, Error, Value>(this: CacheImpl<Key, Error, Value>): Effect.Effect<never, never, Array<[Key, Value]>> {
    return Debug.bodyWithTrace((trace) =>
      core.sync(() => {
        const values: Array<[Key, Value]> = []
        for (const entry of this.cacheState.map) {
          if (entry[1]._tag === "Complete" && entry[1].exit._tag === "Success") {
            values.push([entry[0], entry[1].exit.value])
          }
        }
        return values
      }).traced(trace)
    )
  }

  keys<Key, Error, Value>(this: CacheImpl<Key, Error, Value>): Effect.Effect<never, never, Array<Key>> {
    return Debug.bodyWithTrace((trace) =>
      core.sync(() => {
        const keys: Array<Key> = []
        for (const entry of this.cacheState.map) {
          if (entry[1]._tag === "Complete" && entry[1].exit._tag === "Success") {
            keys.push(entry[0])
          }
        }
        return keys
      }).traced(trace)
    )
  }

  resolveMapValue(
    value: MapValue<Key, Error, Value>,
    ignorePending = false
  ): Effect.Effect<never, Error, Option.Option<Value>> {
    return effect.clockWith((clock) => {
      switch (value._tag) {
        case "Complete": {
          this.trackAccess(value.key)
          this.trackHit()
          if (this.hasExpired(clock, value.timeToLiveMillis)) {
            MutableHashMap.remove(this.cacheState.map, value.key.current)
            return core.succeed(Option.none<Value>())
          }
          return core.map(core.done(value.exit), Option.some)
        }
        case "Pending": {
          this.trackAccess(value.key)
          this.trackHit()
          if (ignorePending) {
            return core.succeed(Option.none<Value>())
          }
          return core.map(Deferred.await(value.deferred), Option.some)
        }
        case "Refreshing": {
          this.trackAccess(value.complete.key)
          this.trackHit()
          if (this.hasExpired(clock, value.complete.timeToLiveMillis)) {
            if (ignorePending) {
              return core.succeed(Option.none<Value>())
            }
            return core.map(Deferred.await(value.deferred), Option.some)
          }
          return core.map(core.done(value.complete.exit), Option.some)
        }
      }
    })
  }

  trackHit(): void {
    this.cacheState.hits = this.cacheState.hits + 1
  }

  trackMiss(): void {
    this.cacheState.misses = this.cacheState.misses + 1
  }

  trackAccess(key: MapKey<Key>): void {
    MutableQueue.offer(this.cacheState.accesses, key)
    if (MutableRef.compareAndSet(this.cacheState.updating, false, true)) {
      let loop = true
      while (loop) {
        const key = MutableQueue.poll(this.cacheState.accesses, MutableQueue.EmptyMutableQueue)
        if (key === MutableQueue.EmptyMutableQueue) {
          loop = false
        } else {
          this.cacheState.keys.add(key)
        }
      }
      let size = MutableHashMap.size(this.cacheState.map)
      loop = size > this.capacity
      while (loop) {
        const key = this.cacheState.keys.remove()
        if (key !== undefined) {
          if (MutableHashMap.has(this.cacheState.map, key.current)) {
            MutableHashMap.remove(this.cacheState.map, key.current)
            size = size - 1
            loop = size > this.capacity
          }
        } else {
          loop = false
        }
      }
      MutableRef.set(this.cacheState.updating, false)
    }
  }

  hasExpired(clock: Clock.Clock, timeToLiveMillis: number): boolean {
    return clock.unsafeCurrentTimeMillis() > timeToLiveMillis
  }

  lookupValueOf(
    input: Key,
    deferred: Deferred.Deferred<Error, Value>
  ): Effect.Effect<never, Error, Value> {
    return effect.clockWith((clock) =>
      core.suspend(() => {
        const key = input
        return pipe(
          this.lookup(input),
          core.provideContext(this.context),
          core.exit,
          core.flatMap((exit) => {
            const now = clock.unsafeCurrentTimeMillis()
            const stats = makeEntryStats(now)
            const value = complete(
              makeMapKey(key),
              exit,
              stats,
              now + this.timeToLive(exit).millis
            )
            MutableHashMap.set(this.cacheState.map, key, value)
            return core.zipRight(
              Deferred.done(deferred, exit),
              core.done(exit)
            )
          }),
          core.onInterrupt(() =>
            core.zipRight(
              Deferred.interrupt(deferred),
              core.sync(() => {
                MutableHashMap.remove(this.cacheState.map, key)
              })
            )
          )
        )
      })
    )
  }
}

/** @internal */
export const make = Debug.methodWithTrace((trace, restore) =>
  <Key, Environment, Error, Value>(
    capacity: number,
    timeToLive: Duration.Duration,
    lookup: Cache.Lookup<Key, Environment, Error, Value>
  ): Effect.Effect<Environment, never, Cache.Cache<Key, Error, Value>> =>
    makeWith(
      capacity,
      restore(lookup),
      () => timeToLive
    ).traced(trace).traced(trace)
)

/** @internal */
export const makeWith = Debug.methodWithTrace((trace, restore) =>
  <Key, Environment, Error, Value>(
    capacity: number,
    lookup: Cache.Lookup<Key, Environment, Error, Value>,
    timeToLive: (exit: Exit.Exit<Error, Value>) => Duration.Duration
  ): Effect.Effect<Environment, never, Cache.Cache<Key, Error, Value>> =>
    core.map(
      effect.all(
        core.context<Environment>(),
        core.fiberId()
      ),
      ([context, fiberId]) =>
        new CacheImpl(
          capacity,
          context,
          fiberId,
          restore(lookup),
          restore(timeToLive)
        )
    ).traced(trace)
)

/** @internal */
export const unsafeMakeWith = <Key, Error, Value>(
  capacity: number,
  lookup: Cache.Lookup<never, Key, Error, Value>,
  timeToLive: (exit: Exit.Exit<Error, Value>) => Duration.Duration
): Cache.Cache<Key, Error, Value> =>
  new CacheImpl(
    capacity,
    Context.empty() as Context.Context<any>,
    none,
    lookup,
    timeToLive
  )
