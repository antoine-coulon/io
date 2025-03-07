import type * as Chunk from "@effect/data/Chunk"
import * as Equal from "@effect/data/Equal"
import { pipe } from "@effect/data/Function"
import * as Hash from "@effect/data/Hash"
import type * as HashMap from "@effect/data/HashMap"
import type * as Option from "@effect/data/Option"
import type * as MetricState from "@effect/io/Metric/State"

/** @internal */
const MetricStateSymbolKey = "@effect/io/Metric/State"

/** @internal */
export const MetricStateTypeId: MetricState.MetricStateTypeId = Symbol.for(
  MetricStateSymbolKey
) as MetricState.MetricStateTypeId

/** @internal */
const CounterStateSymbolKey = "effect/io/Metric/State/Counter"

/** @internal */
export const CounterStateTypeId: MetricState.CounterStateTypeId = Symbol.for(
  CounterStateSymbolKey
) as MetricState.CounterStateTypeId

/** @internal */
const FrequencyStateSymbolKey = "effect/io/Metric/State/Frequency"

/** @internal */
export const FrequencyStateTypeId: MetricState.FrequencyStateTypeId = Symbol.for(
  FrequencyStateSymbolKey
) as MetricState.FrequencyStateTypeId

/** @internal */
const GaugeStateSymbolKey = "effect/io/Metric/State/Gauge"

/** @internal */
export const GaugeStateTypeId: MetricState.GaugeStateTypeId = Symbol.for(
  GaugeStateSymbolKey
) as MetricState.GaugeStateTypeId

/** @internal */
const HistogramStateSymbolKey = "effect/io/Metric/State/Histogram"

/** @internal */
export const HistogramStateTypeId: MetricState.HistogramStateTypeId = Symbol.for(
  HistogramStateSymbolKey
) as MetricState.HistogramStateTypeId

/** @internal */
const SummaryStateSymbolKey = "effect/io/Metric/State/Summary"

/** @internal */
export const SummaryStateTypeId: MetricState.SummaryStateTypeId = Symbol.for(
  SummaryStateSymbolKey
) as MetricState.SummaryStateTypeId

/** @internal */
const metricStateVariance = {
  _A: (_: unknown) => _
}

/** @internal */
class CounterState implements MetricState.MetricState.Counter {
  readonly [MetricStateTypeId] = metricStateVariance
  readonly [CounterStateTypeId]: MetricState.CounterStateTypeId = CounterStateTypeId
  constructor(readonly count: number) {}
  [Hash.symbol](): number {
    return pipe(
      Hash.hash(CounterStateSymbolKey),
      Hash.combine(Hash.hash(this.count))
    )
  }
  [Equal.symbol](that: unknown): boolean {
    return isCounterState(that) && this.count === that.count
  }
}

/** @internal */
class FrequencyState implements MetricState.MetricState.Frequency {
  readonly [MetricStateTypeId] = metricStateVariance
  readonly [FrequencyStateTypeId]: MetricState.FrequencyStateTypeId = FrequencyStateTypeId
  constructor(readonly occurrences: HashMap.HashMap<string, number>) {}
  [Hash.symbol](): number {
    return pipe(
      Hash.hash(FrequencyStateSymbolKey),
      Hash.combine(Hash.hash(this.occurrences))
    )
  }
  [Equal.symbol](that: unknown): boolean {
    return isFrequencyState(that) && Equal.equals(this.occurrences, that.occurrences)
  }
}

/** @internal */
class GaugeState implements MetricState.MetricState.Gauge {
  readonly [MetricStateTypeId] = metricStateVariance
  readonly [GaugeStateTypeId]: MetricState.GaugeStateTypeId = GaugeStateTypeId
  constructor(readonly value: number) {}
  [Hash.symbol](): number {
    return pipe(
      Hash.hash(GaugeStateSymbolKey),
      Hash.combine(Hash.hash(this.value))
    )
  }
  [Equal.symbol](u: unknown): boolean {
    return isGaugeState(u) && this.value === u.value
  }
}

/** @internal */
export class HistogramState implements MetricState.MetricState.Histogram {
  readonly [MetricStateTypeId] = metricStateVariance
  readonly [HistogramStateTypeId]: MetricState.HistogramStateTypeId = HistogramStateTypeId
  constructor(
    readonly buckets: Chunk.Chunk<readonly [number, number]>,
    readonly count: number,
    readonly min: number,
    readonly max: number,
    readonly sum: number
  ) {}
  [Hash.symbol](): number {
    return pipe(
      Hash.hash(HistogramStateSymbolKey),
      Hash.combine(Hash.hash(this.buckets)),
      Hash.combine(Hash.hash(this.count)),
      Hash.combine(Hash.hash(this.min)),
      Hash.combine(Hash.hash(this.max)),
      Hash.combine(Hash.hash(this.sum))
    )
  }
  [Equal.symbol](that: unknown): boolean {
    return isHistogramState(that) &&
      Equal.equals(this.buckets, that.buckets) &&
      this.count === that.count &&
      this.min === that.min &&
      this.max === that.max &&
      this.sum === that.sum
  }
}

/** @internal */
export class SummaryState implements MetricState.MetricState.Summary {
  readonly [MetricStateTypeId] = metricStateVariance
  readonly [SummaryStateTypeId]: MetricState.SummaryStateTypeId = SummaryStateTypeId
  constructor(
    readonly error: number,
    readonly quantiles: Chunk.Chunk<readonly [number, Option.Option<number>]>,
    readonly count: number,
    readonly min: number,
    readonly max: number,
    readonly sum: number
  ) {}
  [Hash.symbol](): number {
    return pipe(
      Hash.hash(SummaryStateSymbolKey),
      Hash.combine(Hash.hash(this.error)),
      Hash.combine(Hash.hash(this.quantiles)),
      Hash.combine(Hash.hash(this.count)),
      Hash.combine(Hash.hash(this.min)),
      Hash.combine(Hash.hash(this.max)),
      Hash.combine(Hash.hash(this.sum))
    )
  }
  [Equal.symbol](that: unknown): boolean {
    return isSummaryState(that) &&
      this.error === that.error &&
      Equal.equals(this.quantiles, that.quantiles) &&
      this.count === that.count &&
      this.min === that.min &&
      this.max === that.max &&
      this.sum === that.sum
  }
}

/** @internal */
export const counter = (count: number): MetricState.MetricState.Counter => {
  return new CounterState(count)
}

/** @internal */
export const frequency = (occurrences: HashMap.HashMap<string, number>): MetricState.MetricState.Frequency => {
  return new FrequencyState(occurrences)
}

/** @internal */
export const gauge = (value: number): MetricState.MetricState.Gauge => {
  return new GaugeState(value)
}

/** @internal */
export const histogram = (
  buckets: Chunk.Chunk<readonly [number, number]>,
  count: number,
  min: number,
  max: number,
  sum: number
): MetricState.MetricState.Histogram => {
  return new HistogramState(buckets, count, min, max, sum)
}

/** @internal */
export const summary = (
  error: number,
  quantiles: Chunk.Chunk<readonly [number, Option.Option<number>]>,
  count: number,
  min: number,
  max: number,
  sum: number
): MetricState.MetricState.Summary => {
  return new SummaryState(error, quantiles, count, min, max, sum)
}

/** @internal */
export const isMetricState = (u: unknown): u is MetricState.MetricState.Counter => {
  return typeof u === "object" && u != null && MetricStateTypeId in u
}

/** @internal */
export const isCounterState = (u: unknown): u is MetricState.MetricState.Counter => {
  return typeof u === "object" && u != null && CounterStateTypeId in u
}

/**
 * @since 1.0.0
 * @category refinements
 */
export const isFrequencyState = (u: unknown): u is MetricState.MetricState.Frequency => {
  return typeof u === "object" && u != null && FrequencyStateTypeId in u
}

/**
 * @since 1.0.0
 * @category refinements
 */
export const isGaugeState = (u: unknown): u is MetricState.MetricState.Gauge => {
  return typeof u === "object" && u != null && GaugeStateTypeId in u
}

/**
 * @since 1.0.0
 * @category refinements
 */
export const isHistogramState = (u: unknown): u is MetricState.MetricState.Histogram => {
  return typeof u === "object" && u != null && HistogramStateTypeId in u
}

/**
 * @since 1.0.0
 * @category refinements
 */
export const isSummaryState = (u: unknown): u is MetricState.MetricState.Summary => {
  return typeof u === "object" && u != null && SummaryStateTypeId in u
}
