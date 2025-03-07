# @effect/io

## 0.28.0

### Minor Changes

- [#470](https://github.com/Effect-TS/io/pull/470) [`99fc772`](https://github.com/Effect-TS/io/commit/99fc7727059b2c324cd65f2ca5a3572f23b5890f) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Pass now in Logger from fiber

## 0.27.2

### Patch Changes

- [`6511f1a`](https://github.com/Effect-TS/io/commit/6511f1a45bc8618eacd6286a33a9df2a95cfc326) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve log in case async fiber is thrown and not recovered

- [#465](https://github.com/Effect-TS/io/pull/465) [`93c8296`](https://github.com/Effect-TS/io/commit/93c8296d1775816118e5248ce52eee5fcee9479b) Thanks [@tim-smart](https://github.com/tim-smart)! - fix histogram MetricHook

## 0.27.1

### Patch Changes

- [#463](https://github.com/Effect-TS/io/pull/463) [`2708be4`](https://github.com/Effect-TS/io/commit/2708be4df0e317e2ef7cb41cd8857bb87e48a040) Thanks [@tim-smart](https://github.com/tim-smart)! - add Effect.withTracer

- [#463](https://github.com/Effect-TS/io/pull/463) [`2708be4`](https://github.com/Effect-TS/io/commit/2708be4df0e317e2ef7cb41cd8857bb87e48a040) Thanks [@tim-smart](https://github.com/tim-smart)! - add Effect.setTracer Layer api

## 0.27.0

### Minor Changes

- [#452](https://github.com/Effect-TS/io/pull/452) [`f4660b6`](https://github.com/Effect-TS/io/commit/f4660b6030f6427aa3cd8bc0bd380f5061c7ad76) Thanks [@tim-smart](https://github.com/tim-smart)! - move Tracer apis to /Effect

- [#452](https://github.com/Effect-TS/io/pull/452) [`f4660b6`](https://github.com/Effect-TS/io/commit/f4660b6030f6427aa3cd8bc0bd380f5061c7ad76) Thanks [@tim-smart](https://github.com/tim-smart)! - add Tracer logger for adding logs as span events

- [#452](https://github.com/Effect-TS/io/pull/452) [`f4660b6`](https://github.com/Effect-TS/io/commit/f4660b6030f6427aa3cd8bc0bd380f5061c7ad76) Thanks [@tim-smart](https://github.com/tim-smart)! - use fiber ref for Tracer spans

- [#452](https://github.com/Effect-TS/io/pull/452) [`f4660b6`](https://github.com/Effect-TS/io/commit/f4660b6030f6427aa3cd8bc0bd380f5061c7ad76) Thanks [@tim-smart](https://github.com/tim-smart)! - rename logAnnotate to annotateLogs, add annotateSpans

- [#452](https://github.com/Effect-TS/io/pull/452) [`f4660b6`](https://github.com/Effect-TS/io/commit/f4660b6030f6427aa3cd8bc0bd380f5061c7ad76) Thanks [@tim-smart](https://github.com/tim-smart)! - use List for immutable stacks

### Patch Changes

- [#452](https://github.com/Effect-TS/io/pull/452) [`f4660b6`](https://github.com/Effect-TS/io/commit/f4660b6030f6427aa3cd8bc0bd380f5061c7ad76) Thanks [@tim-smart](https://github.com/tim-smart)! - add Tracer to default services

- [#452](https://github.com/Effect-TS/io/pull/452) [`f4660b6`](https://github.com/Effect-TS/io/commit/f4660b6030f6427aa3cd8bc0bd380f5061c7ad76) Thanks [@tim-smart](https://github.com/tim-smart)! - add Tracer span events

## 0.26.2

### Patch Changes

- [#457](https://github.com/Effect-TS/io/pull/457) [`39a17ec`](https://github.com/Effect-TS/io/commit/39a17ec43ac4e8d880572928bc3f4c12784c40f4) Thanks [@IMax153](https://github.com/IMax153)! - fix nesting for `ConfigProvider.orElse`

- [#459](https://github.com/Effect-TS/io/pull/459) [`36f5f97`](https://github.com/Effect-TS/io/commit/36f5f97e1d5e7a89e0e2bc05bdd9ed4767f8d23f) Thanks [@IMax153](https://github.com/IMax153)! - remove subscriber from Hub after unsubscribing

- [#458](https://github.com/Effect-TS/io/pull/458) [`96dfea7`](https://github.com/Effect-TS/io/commit/96dfea7a9bc365f0c438b1fb548370030eef0691) Thanks [@IMax153](https://github.com/IMax153)! - support a description field in MetricKey

## 0.26.1

### Patch Changes

- [#455](https://github.com/Effect-TS/io/pull/455) [`4686d32`](https://github.com/Effect-TS/io/commit/4686d32238338dd05743a07983a74a600957271e) Thanks [@gcanti](https://github.com/gcanti)! - Schedule: remove Random.Random from jittered, closes #454

- [#448](https://github.com/Effect-TS/io/pull/448) [`f3dcabb`](https://github.com/Effect-TS/io/commit/f3dcabbc653d6b1dce277c3cc95735fced47d880) Thanks [@tim-smart](https://github.com/tim-smart)! - add getOptionComplete to Cache and ScopedCache

## 0.26.0

### Minor Changes

- [#445](https://github.com/Effect-TS/io/pull/445) [`4192f57`](https://github.com/Effect-TS/io/commit/4192f57ea46e007f3dde7ccef6b63b22c37a049a) Thanks [@tim-smart](https://github.com/tim-smart)! - align /ScopedCache API with /Cache

### Patch Changes

- [#440](https://github.com/Effect-TS/io/pull/440) [`d6f911e`](https://github.com/Effect-TS/io/commit/d6f911e41ae0d197c6c6849ff299370996b7048a) Thanks [@tim-smart](https://github.com/tim-smart)! - add ScopedCache module

- [#445](https://github.com/Effect-TS/io/pull/445) [`4192f57`](https://github.com/Effect-TS/io/commit/4192f57ea46e007f3dde7ccef6b63b22c37a049a) Thanks [@tim-smart](https://github.com/tim-smart)! - add getOption to Cache and ScopedCache

- [#442](https://github.com/Effect-TS/io/pull/442) [`bbf8be0`](https://github.com/Effect-TS/io/commit/bbf8be060e1f4f58362594e87cc0605c5dc6970f) Thanks [@melike2d](https://github.com/melike2d)! - Fix Effect#gen adapter parameter type

## 0.25.13

### Patch Changes

- [#436](https://github.com/Effect-TS/io/pull/436) [`bf4e463`](https://github.com/Effect-TS/io/commit/bf4e4638b21b06535fe9d1277032216698eed8ba) Thanks [@tim-smart](https://github.com/tim-smart)! - Logger.addEffect and Logger.replaceEffect

## 0.25.12

### Patch Changes

- [#434](https://github.com/Effect-TS/io/pull/434) [`d88e283`](https://github.com/Effect-TS/io/commit/d88e28371a3e9d04558f1749160e7bd41af1bd79) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Optimize happy path in runLoop

## 0.25.11

### Patch Changes

- [#432](https://github.com/Effect-TS/io/pull/432) [`83f865e`](https://github.com/Effect-TS/io/commit/83f865eb26d36b091243ae396bdb332627d7d655) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix deadlock induced by cache

## 0.25.10

### Patch Changes

- [#426](https://github.com/Effect-TS/io/pull/426) [`1e7d900`](https://github.com/Effect-TS/io/commit/1e7d9008c310c3a8719a7bf91fa1a936ad509849) Thanks [@tim-smart](https://github.com/tim-smart)! - fix docs for dropping strategy

- [#430](https://github.com/Effect-TS/io/pull/430) [`52a7ada`](https://github.com/Effect-TS/io/commit/52a7adabb4b224328af51e49586b41011cb70ba4) Thanks [@gcanti](https://github.com/gcanti)! - fix docs for promise and tryCatchPromise

## 0.25.9

### Patch Changes

- [#424](https://github.com/Effect-TS/io/pull/424) [`13b7c76`](https://github.com/Effect-TS/io/commit/13b7c76265da659efbe0f2e0fc59497310f02cfe) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Add more flexible scheduling logic

- [#422](https://github.com/Effect-TS/io/pull/422) [`3b6fb22`](https://github.com/Effect-TS/io/commit/3b6fb22acae22645f985af1628ab977e32a7d653) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Avoid usess branching

- [#425](https://github.com/Effect-TS/io/pull/425) [`345febf`](https://github.com/Effect-TS/io/commit/345febfbce225b7740e7fb9a50da4824dbdc8c71) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix timeBased scheduler timeout

## 0.25.8

### Patch Changes

- [#418](https://github.com/Effect-TS/io/pull/418) [`41debe4`](https://github.com/Effect-TS/io/commit/41debe415a3c61563b38fec784057e832563b089) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve request interruption

- [#420](https://github.com/Effect-TS/io/pull/420) [`dac6a6b`](https://github.com/Effect-TS/io/commit/dac6a6b841565d1e67753f7630aa202139b06a16) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix signature of interruptWhenPossible

## 0.25.7

### Patch Changes

- [#416](https://github.com/Effect-TS/io/pull/416) [`be27e16`](https://github.com/Effect-TS/io/commit/be27e16ee5c35de36d282524805ca2badf1a465e) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Switch default caching to false

- [#416](https://github.com/Effect-TS/io/pull/416) [`be27e16`](https://github.com/Effect-TS/io/commit/be27e16ee5c35de36d282524805ca2badf1a465e) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Add Effect.cacheRequestResponse to cache request responses optimistically

## 0.25.6

### Patch Changes

- [#413](https://github.com/Effect-TS/io/pull/413) [`bed6108`](https://github.com/Effect-TS/io/commit/bed610859ef3dbc6905ce943cac7977b997942d8) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Optimise Effect.forEachPar variants when using withParallelism(1)

## 0.25.5

### Patch Changes

- [#409](https://github.com/Effect-TS/io/pull/409) [`f2ec1df`](https://github.com/Effect-TS/io/commit/f2ec1df16d7decc2a79c4cf6f520e0cc3ce1bdf5) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix mask propagation of batching

- [#412](https://github.com/Effect-TS/io/pull/412) [`a33c84a`](https://github.com/Effect-TS/io/commit/a33c84ab14ac891642a3dc10c0f7d0264d07e059) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Readd unwinding optimizer on blocked

- [#411](https://github.com/Effect-TS/io/pull/411) [`ae467d7`](https://github.com/Effect-TS/io/commit/ae467d7ad50b53d23d1b8c18c1c0813056d7d7b6) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Align allParDiscard/allDiscard signatures with all/allPar

## 0.25.4

### Patch Changes

- [#408](https://github.com/Effect-TS/io/pull/408) [`5d920da`](https://github.com/Effect-TS/io/commit/5d920da12ac905d7773c698b3c2abbf9427605ec) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Propagate blocked through region masks

- [#406](https://github.com/Effect-TS/io/pull/406) [`bb447e9`](https://github.com/Effect-TS/io/commit/bb447e969a2796772b05440c5d7df3d87151f0b2) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Always unwind stack on blocked

## 0.25.3

### Patch Changes

- [#404](https://github.com/Effect-TS/io/pull/404) [`d8e8d40`](https://github.com/Effect-TS/io/commit/d8e8d40e366172965e4b6dd1e1159b5fe094e844) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Remove leftover Effect.withParallelismUnbounded

## 0.25.2

### Patch Changes

- [#402](https://github.com/Effect-TS/io/pull/402) [`d15451f`](https://github.com/Effect-TS/io/commit/d15451fd0b871ce659fe614542b297d59f8b9148) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Use Proxy to distinguish identical requests

- [#400](https://github.com/Effect-TS/io/pull/400) [`20338ea`](https://github.com/Effect-TS/io/commit/20338eaf676cbc2d384b453043af029f29a36a9f) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Make sure identical requests are not mangled

## 0.25.1

### Patch Changes

- [#398](https://github.com/Effect-TS/io/pull/398) [`f0411ad`](https://github.com/Effect-TS/io/commit/f0411adf8ea37378ebd83e178cf64215db6fe3a7) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve Effect.all / allPar type

## 0.25.0

### Minor Changes

- [#393](https://github.com/Effect-TS/io/pull/393) [`35f72c6`](https://github.com/Effect-TS/io/commit/35f72c67c8f497aa9cbdbb1db8be9b73e2ca7b4b) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Standardise request caching config

### Patch Changes

- [#394](https://github.com/Effect-TS/io/pull/394) [`3943558`](https://github.com/Effect-TS/io/commit/394355830cbfde4487ddb438cbc40b2b45ec42dd) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Add layer based variants for flags

- [#397](https://github.com/Effect-TS/io/pull/397) [`b854610`](https://github.com/Effect-TS/io/commit/b85461075c53f865e842302978cf87769543cde7) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Make sure tags are preserved across module reloads

- [#394](https://github.com/Effect-TS/io/pull/394) [`3943558`](https://github.com/Effect-TS/io/commit/394355830cbfde4487ddb438cbc40b2b45ec42dd) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Apply deault log filter automatically

- [#397](https://github.com/Effect-TS/io/pull/397) [`b854610`](https://github.com/Effect-TS/io/commit/b85461075c53f865e842302978cf87769543cde7) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Make sure fiber refs are preserved across module reloads

## 0.24.4

### Patch Changes

- [#391](https://github.com/Effect-TS/io/pull/391) [`8d3ade2`](https://github.com/Effect-TS/io/commit/8d3ade2f47467cdbe29bb589332295339ee1ae1d) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Make Effect.all and Effect.allPar pipeable

## 0.24.3

### Patch Changes

- [`e67c735`](https://github.com/Effect-TS/io/commit/e67c7354279c4758c54130120cfea06ee459276d) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Support batching in acquireUseRelease

## 0.24.2

### Patch Changes

- [#387](https://github.com/Effect-TS/io/pull/387) [`20f8ea7`](https://github.com/Effect-TS/io/commit/20f8ea730a21bb5b43ce61a1d77aacee971a4514) Thanks [@tim-smart](https://github.com/tim-smart)! - add Tracer.useSpan

## 0.24.1

### Patch Changes

- [#384](https://github.com/Effect-TS/io/pull/384) [`8efd5e2`](https://github.com/Effect-TS/io/commit/8efd5e2d107967cd30be48603264f7f12fad0d3e) Thanks [@tim-smart](https://github.com/tim-smart)! - fix Effect.request type signature

## 0.24.0

### Minor Changes

- [#382](https://github.com/Effect-TS/io/pull/382) [`5a17436`](https://github.com/Effect-TS/io/commit/5a174360e7e622c83764ace15f01bda318d35509) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Add RequestResolver.contextFromServices
  Rename RequestResolver.provideFromEffect to RequestResolver.contextFromEffect
  Remove Layer.resolver

## 0.23.0

### Minor Changes

- [#378](https://github.com/Effect-TS/io/pull/378) [`6ad3e58`](https://github.com/Effect-TS/io/commit/6ad3e58b05a753a7472a95282613d9f707406b72) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Add Layer locally variants, move FiberRef.locally to Effect.

- [#381](https://github.com/Effect-TS/io/pull/381) [`8641a1f`](https://github.com/Effect-TS/io/commit/8641a1f0b54e5d3e2df2887d4ae0d013fc3ce312) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Detach RequestResolver context from call site

### Patch Changes

- [#380](https://github.com/Effect-TS/io/pull/380) [`f89c25d`](https://github.com/Effect-TS/io/commit/f89c25d3e7266d3b1f8d0f91bcecc3b580b8fb86) Thanks [@tim-smart](https://github.com/tim-smart)! - fix tryCatchPromiseInterrupt interruption

## 0.22.5

### Patch Changes

- [#376](https://github.com/Effect-TS/io/pull/376) [`5779bf4`](https://github.com/Effect-TS/io/commit/5779bf42a1c12a60b87e3b1cb1c2a42c74c9a4d2) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Only interrupt residual requests, allow resolver to be uninterruptible

## 0.22.4

### Patch Changes

- [#374](https://github.com/Effect-TS/io/pull/374) [`5ecdf18`](https://github.com/Effect-TS/io/commit/5ecdf18efc12fa972ac22bcf753d21d98f8850aa) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix RequestResolver.eitherWith signature

## 0.22.3

### Patch Changes

- [#372](https://github.com/Effect-TS/io/pull/372) [`e1aec19`](https://github.com/Effect-TS/io/commit/e1aec19476ead1534e1f349d9fb9b472da0e1228) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Make sure resolvers are interruptible

## 0.22.2

### Patch Changes

- [#370](https://github.com/Effect-TS/io/pull/370) [`8499d55`](https://github.com/Effect-TS/io/commit/8499d55ee78044c0d85afd7e6128c6d8ce4f251f) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix handling of while in blocked

## 0.22.1

### Patch Changes

- [#368](https://github.com/Effect-TS/io/pull/368) [`07f0fea`](https://github.com/Effect-TS/io/commit/07f0fea49def47db7a1e39e49bdd31347c916126) Thanks [@pigoz](https://github.com/pigoz)! - add symbol to persist scope tags on HMR

## 0.22.0

### Minor Changes

- [#364](https://github.com/Effect-TS/io/pull/364) [`049c9cd`](https://github.com/Effect-TS/io/commit/049c9cd2c2797a49516820cfece29572756ee087) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Propagate interruption to RequestResolver, improvents on: cache, api and request execution logic.

- [#367](https://github.com/Effect-TS/io/pull/367) [`4c0e20a`](https://github.com/Effect-TS/io/commit/4c0e20a9efbf264e46be1142b9ac513d6f7dbf46) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve request completion logic, kill RequestCompletionMap

### Patch Changes

- [#366](https://github.com/Effect-TS/io/pull/366) [`bdca14e`](https://github.com/Effect-TS/io/commit/bdca14e94e09463b1974f98ace3a146164185073) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Add Effect.runRequestBlock

## 0.21.1

### Patch Changes

- [#363](https://github.com/Effect-TS/io/pull/363) [`b9d729b`](https://github.com/Effect-TS/io/commit/b9d729b55777b4825a7eeb19667c15b541aed691) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Make sure map is not eagerly created in RequestResolver.makeBatched

- [#361](https://github.com/Effect-TS/io/pull/361) [`f45ec5a`](https://github.com/Effect-TS/io/commit/f45ec5a5ee8754704e9c8000f227be45084303c5) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Remove leftover id

## 0.21.0

### Minor Changes

- [#358](https://github.com/Effect-TS/io/pull/358) [`d81972a`](https://github.com/Effect-TS/io/commit/d81972a2cab81f03bf639b26655ad2b6eec9c9e8) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Introduce Request Batching & Caching in Effect

- [#358](https://github.com/Effect-TS/io/pull/358) [`d81972a`](https://github.com/Effect-TS/io/commit/d81972a2cab81f03bf639b26655ad2b6eec9c9e8) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Keep Chunk as internal as possible

- [#358](https://github.com/Effect-TS/io/pull/358) [`d81972a`](https://github.com/Effect-TS/io/commit/d81972a2cab81f03bf639b26655ad2b6eec9c9e8) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Restructure parallel/collection-based combinator naming

- [#358](https://github.com/Effect-TS/io/pull/358) [`d81972a`](https://github.com/Effect-TS/io/commit/d81972a2cab81f03bf639b26655ad2b6eec9c9e8) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Port Cache from effect/cache and use it to cache requests

### Patch Changes

- [#358](https://github.com/Effect-TS/io/pull/358) [`d81972a`](https://github.com/Effect-TS/io/commit/d81972a2cab81f03bf639b26655ad2b6eec9c9e8) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Introduce Effect.serviceOption for optional services

- [#359](https://github.com/Effect-TS/io/pull/359) [`581ee2e`](https://github.com/Effect-TS/io/commit/581ee2ebaf781feaa76a59fcd65cbead2edb0100) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Avoid referencing node types in dts

## 0.20.0

### Minor Changes

- [#356](https://github.com/Effect-TS/io/pull/356) [`4cb45cc`](https://github.com/Effect-TS/io/commit/4cb45ccc3522660cbd08f8012a0640dffdb66644) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update unify

## 0.19.3

### Patch Changes

- [#352](https://github.com/Effect-TS/io/pull/352) [`8bced84`](https://github.com/Effect-TS/io/commit/8bced840d3529d1d2eaab9d1f45904512b006570) Thanks [@IMax153](https://github.com/IMax153)! - only recover in Config.optional when all errors are MissingData errors

- [#352](https://github.com/Effect-TS/io/pull/352) [`8bced84`](https://github.com/Effect-TS/io/commit/8bced840d3529d1d2eaab9d1f45904512b006570) Thanks [@IMax153](https://github.com/IMax153)! - add Config.logLevel

- [#352](https://github.com/Effect-TS/io/pull/352) [`8bced84`](https://github.com/Effect-TS/io/commit/8bced840d3529d1d2eaab9d1f45904512b006570) Thanks [@IMax153](https://github.com/IMax153)! - handle indexed sequences in ConfigProvider.fromMap

- [#352](https://github.com/Effect-TS/io/pull/352) [`8bced84`](https://github.com/Effect-TS/io/commit/8bced840d3529d1d2eaab9d1f45904512b006570) Thanks [@IMax153](https://github.com/IMax153)! - Fix nesting for ConfigProvider

- [#353](https://github.com/Effect-TS/io/pull/353) [`c7a1772`](https://github.com/Effect-TS/io/commit/c7a17720c79553313dde54a1b21082741ab3d153) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Add Effect.provideSomeContext

- [#352](https://github.com/Effect-TS/io/pull/352) [`8bced84`](https://github.com/Effect-TS/io/commit/8bced840d3529d1d2eaab9d1f45904512b006570) Thanks [@IMax153](https://github.com/IMax153)! - rename Config.defer to Config.suspend

## 0.19.2

### Patch Changes

- [#348](https://github.com/Effect-TS/io/pull/348) [`a4421aa`](https://github.com/Effect-TS/io/commit/a4421aa613867de29b784e2e90bc892c4c2d9ccf) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Implement Unify in Effect

## 0.19.1

### Patch Changes

- [#346](https://github.com/Effect-TS/io/pull/346) [`64f3198`](https://github.com/Effect-TS/io/commit/64f3198d2eda8c62d91272f350c8e3f1f47575f4) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Add Effect.serviceFunction and Effect.serviceFunctionEffect

- [#346](https://github.com/Effect-TS/io/pull/346) [`64f3198`](https://github.com/Effect-TS/io/commit/64f3198d2eda8c62d91272f350c8e3f1f47575f4) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix Effect.if signature

## 0.19.0

### Minor Changes

- [#344](https://github.com/Effect-TS/io/pull/344) [`9384f98`](https://github.com/Effect-TS/io/commit/9384f9888a82aaf7158332cff91bcad05ba050bd) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update effect/data, resolve pipeable subtyping

## 0.18.0

### Minor Changes

- [#343](https://github.com/Effect-TS/io/pull/343) [`685c0ee`](https://github.com/Effect-TS/io/commit/685c0ee9197356131a2471f6fc6c68b210ac18fc) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Rename Effect.unified to Effect.unifiedFn, expose Effect.unified, add Effect.if

### Patch Changes

- [#341](https://github.com/Effect-TS/io/pull/341) [`e0de3a1`](https://github.com/Effect-TS/io/commit/e0de3a1ef410921aa491d0d3408c6e63a758cebe) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix Schedule related types in Effect

## 0.17.0

### Minor Changes

- [#338](https://github.com/Effect-TS/io/pull/338) [`b3c6247`](https://github.com/Effect-TS/io/commit/b3c624778096a0496a8487e25e6a7b52fddd9939) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Integrate Option and Either as valid Effects

## 0.16.2

### Patch Changes

- [#336](https://github.com/Effect-TS/io/pull/336) [`1578175`](https://github.com/Effect-TS/io/commit/15781752a923ee35fb3cd022fd1464161dc94cd1) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Add missing typeclass derived functions

## 0.16.1

### Patch Changes

- [#334](https://github.com/Effect-TS/io/pull/334) [`7a9d26a`](https://github.com/Effect-TS/io/commit/7a9d26a04a24936451c7fd434c895a98197e8c5a) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Expose typeclass instances for Effect

- [#334](https://github.com/Effect-TS/io/pull/334) [`7a9d26a`](https://github.com/Effect-TS/io/commit/7a9d26a04a24936451c7fd434c895a98197e8c5a) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Relax readonly

## 0.16.0

### Minor Changes

- [#333](https://github.com/Effect-TS/io/pull/333) [`02a5880`](https://github.com/Effect-TS/io/commit/02a5880c2fe9e3c4341fa916dd85358448a071cb) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Rename bindValue to let

- [#330](https://github.com/Effect-TS/io/pull/330) [`fa6fc43`](https://github.com/Effect-TS/io/commit/fa6fc43cfa09ed99d9e044bf3888b70397d8d8d0) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Rename attempt to try

### Patch Changes

- [#332](https://github.com/Effect-TS/io/pull/332) [`985dca4`](https://github.com/Effect-TS/io/commit/985dca4cd210baa4e066af4a43b35b1a43502090) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Remove OpCodes from public types

## 0.15.3

### Patch Changes

- [#328](https://github.com/Effect-TS/io/pull/328) [`fa21e64`](https://github.com/Effect-TS/io/commit/fa21e640e6e7fb558a4d96c8c6e361f8c7445c75) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Make Effect.gen's Adapter pipeable

## 0.15.2

### Patch Changes

- [#326](https://github.com/Effect-TS/io/pull/326) [`84bee24`](https://github.com/Effect-TS/io/commit/84bee24f3cb66c3cce9e6d4540758210af9182e9) Thanks [@TylorS](https://github.com/TylorS)! - Rename TestConfig Tag to TestConfig

## 0.15.1

### Patch Changes

- [#322](https://github.com/Effect-TS/io/pull/322) [`77ac50b`](https://github.com/Effect-TS/io/commit/77ac50baa9a094f8f0ff2c53d2fb017dd0c2a0ad) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix OpTraced

## 0.15.0

### Minor Changes

- [#318](https://github.com/Effect-TS/io/pull/318) [`a81731e`](https://github.com/Effect-TS/io/commit/a81731e5784fe68637c9347c6da328cb0a4bfb4c) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Make Context.Tag a valid Effect

- [#321](https://github.com/Effect-TS/io/pull/321) [`914f71f`](https://github.com/Effect-TS/io/commit/914f71fc9fd74fbd59382e1ebec6d2bc2ac14377) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Use Service Name as Tag Name

- [#320](https://github.com/Effect-TS/io/pull/320) [`14b82b5`](https://github.com/Effect-TS/io/commit/14b82b564d2b3d03db135a44ead6e51a2baff55b) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Depend on effect/data for Debug

## 0.14.1

### Patch Changes

- [#316](https://github.com/Effect-TS/io/pull/316) [`dabb808`](https://github.com/Effect-TS/io/commit/dabb808877ed4cce332f5909c431885ef7b59ec6) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix unhandled error report as debug

## 0.14.0

### Minor Changes

- [`cfbe60d`](https://github.com/Effect-TS/io/commit/cfbe60d78522166eead6b3c214a141abd90dd119) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Support new Tag with Identifier and Service

## 0.13.0

### Minor Changes

- [#312](https://github.com/Effect-TS/io/pull/312) [`e5c5109`](https://github.com/Effect-TS/io/commit/e5c510931862c6797cb7179af65dcc6f14f65847) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Avoid logging final errors when using runPromise/runSync/runCallback, remove conditional orFiber

- [#313](https://github.com/Effect-TS/io/pull/313) [`64e5c4c`](https://github.com/Effect-TS/io/commit/64e5c4ccf23fcd96623a16f03426620fe823002f) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Add runFork options

### Patch Changes

- [#310](https://github.com/Effect-TS/io/pull/310) [`a2a08be`](https://github.com/Effect-TS/io/commit/a2a08be7abb83c5ef9da5de595b11c1b84edff5c) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Remove tracking of execution mode

## 0.12.2

### Patch Changes

- [#308](https://github.com/Effect-TS/io/pull/308) [`c6b703a`](https://github.com/Effect-TS/io/commit/c6b703a56fe55e3bef134c97f680988221fac159) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update effect/data

## 0.12.1

### Patch Changes

- [#306](https://github.com/Effect-TS/io/pull/306) [`7d1d997`](https://github.com/Effect-TS/io/commit/7d1d9978b2b539862b813cf5a617be2b4304b3c1) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Support local override of report unhandled

- [#306](https://github.com/Effect-TS/io/pull/306) [`7d1d997`](https://github.com/Effect-TS/io/commit/7d1d9978b2b539862b813cf5a617be2b4304b3c1) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update effect/data

## 0.12.0

### Minor Changes

- [#305](https://github.com/Effect-TS/io/pull/305) [`47a8aa8`](https://github.com/Effect-TS/io/commit/47a8aa8168ccfaa90570068897bad7808d1d98aa) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix docs comment, expose makeFiberFailure, avoid unhandled in runExit variants

- [#303](https://github.com/Effect-TS/io/pull/303) [`7f11db3`](https://github.com/Effect-TS/io/commit/7f11db397b07994342db1e56a040f45145f0325c) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Report non handled failures

## 0.11.0

### Minor Changes

- [#301](https://github.com/Effect-TS/io/pull/301) [`611f781`](https://github.com/Effect-TS/io/commit/611f7816dfdf8542f48ada3579344f244e6a576e) Thanks [@patroza](https://github.com/patroza)! - Improve design of FiberFailure to be a normal Error

### Patch Changes

- [#302](https://github.com/Effect-TS/io/pull/302) [`69b53fe`](https://github.com/Effect-TS/io/commit/69b53fe7be6c1d263df9bfc4fc7a391105c1b50f) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix schedule types

- [#299](https://github.com/Effect-TS/io/pull/299) [`8210523`](https://github.com/Effect-TS/io/commit/8210523bc2e3aca02c061f4802cd5938b22f4b6e) Thanks [@IMax153](https://github.com/IMax153)! - fix stack safety of Effect.repeat\* combinators

## 0.10.0

### Minor Changes

- [#295](https://github.com/Effect-TS/io/pull/295) [`36f6413`](https://github.com/Effect-TS/io/commit/36f6413814a166fac73ef16a7fb35a99feb9a2a8) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Rename try* to attempt*

- [#297](https://github.com/Effect-TS/io/pull/297) [`cb8fd91`](https://github.com/Effect-TS/io/commit/cb8fd910117b94d6d9b1964ca14fce7f7f4a1983) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update effect/data to 0.5.0

## 0.9.3

### Patch Changes

- [#293](https://github.com/Effect-TS/io/pull/293) [`efdf326`](https://github.com/Effect-TS/io/commit/efdf326341afd411d142cd0b0e22ed7e656da20b) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - make Effect.acquireRelease dual

## 0.9.2

### Patch Changes

- [#290](https://github.com/Effect-TS/io/pull/290) [`16c6d14`](https://github.com/Effect-TS/io/commit/16c6d14c608cbf057c1d14fbb6173197cfa72e76) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Accept explicit Equivalence in memoizeFunction

## 0.9.1

### Patch Changes

- [#288](https://github.com/Effect-TS/io/pull/288) [`c4a1ed1`](https://github.com/Effect-TS/io/commit/c4a1ed1ea21a87d92912629b9acfb008ed51600e) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update to TS5

## 0.9.0

### Minor Changes

- [#278](https://github.com/Effect-TS/io/pull/278) [`f6599bd`](https://github.com/Effect-TS/io/commit/f6599bdea8e3ae2b53e40d9b90e3156ca708aec3) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Introduce Native Tracer

- [#287](https://github.com/Effect-TS/io/pull/287) [`3770a3f`](https://github.com/Effect-TS/io/commit/3770a3f17d7f8338fd217e7e64b4f82253cfabf7) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve native tracer

## 0.8.0

### Minor Changes

- [#280](https://github.com/Effect-TS/io/pull/280) [`7874207`](https://github.com/Effect-TS/io/commit/7874207dbe64338141c36d8c2aea43fbe132ffb5) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve primitive design to allow monomorphic field access

- [#284](https://github.com/Effect-TS/io/pull/284) [`ac1f763`](https://github.com/Effect-TS/io/commit/ac1f763c83b214d1f3401b3d4b0b5e5cde0d05bb) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update effect/data

### Patch Changes

- [#282](https://github.com/Effect-TS/io/pull/282) [`1367020`](https://github.com/Effect-TS/io/commit/1367020952740faf25797ce694353096dda70a4f) Thanks [@KhraksMamtsov](https://github.com/KhraksMamtsov)! - add absolveWith combinator

- [#285](https://github.com/Effect-TS/io/pull/285) [`3ba868f`](https://github.com/Effect-TS/io/commit/3ba868fa4ed225407ffcf66aa9c6852204dc59a2) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix Effect.all/allPar signature

## 0.7.0

### Minor Changes

- [#279](https://github.com/Effect-TS/io/pull/279) [`9f5c9ba`](https://github.com/Effect-TS/io/commit/9f5c9bad7a448f20bfb7929f9fdf0cb13dd55d0c) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve Scheduler

### Patch Changes

- [#275](https://github.com/Effect-TS/io/pull/275) [`20cb53a`](https://github.com/Effect-TS/io/commit/20cb53a8a707a3685e05e8cf1c3347414bc1b1c8) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve metrics types

- [#277](https://github.com/Effect-TS/io/pull/277) [`dadde68`](https://github.com/Effect-TS/io/commit/dadde68e31a23e415ee3c8d6878a70be8bcb4bce) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Unify taggedWith to use Iterable and improve naming

## 0.6.0

### Minor Changes

- [#274](https://github.com/Effect-TS/io/pull/274) [`ff78681`](https://github.com/Effect-TS/io/commit/ff78681dec14035839b71dccacb9789eb471c286) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Remove background yielding

### Patch Changes

- [#272](https://github.com/Effect-TS/io/pull/272) [`e04f064`](https://github.com/Effect-TS/io/commit/e04f06431e42bbfb4b69d284deea0dbff8cb2522) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Preserve global state across module reloads

## 0.5.0

### Minor Changes

- [#268](https://github.com/Effect-TS/io/pull/268) [`965970a`](https://github.com/Effect-TS/io/commit/965970a09e63306ea5d146029708fab3f626e140) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Standardize tuple-struct into all/allPar

- [#271](https://github.com/Effect-TS/io/pull/271) [`78f31ee`](https://github.com/Effect-TS/io/commit/78f31ee73f1616cd1d394fff2849dd33c6e128e2) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve error semantics

## 0.4.0

### Minor Changes

- [#266](https://github.com/Effect-TS/io/pull/266) [`76b6796`](https://github.com/Effect-TS/io/commit/76b679603daa3083f622eca2c7fceb2ac6235890) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update @effect/data to 0.3

## 0.3.1

### Patch Changes

- [#263](https://github.com/Effect-TS/io/pull/263) [`75b2bbc`](https://github.com/Effect-TS/io/commit/75b2bbcb9887ef8ba708c71a2b5c8e3770130250) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Forbid empty calls to sequential / parallel

- [#265](https://github.com/Effect-TS/io/pull/265) [`09f9561`](https://github.com/Effect-TS/io/commit/09f9561e0c80638b9befdcf23cce56d8d71f176a) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Allow custom arg selector in dual

- [#261](https://github.com/Effect-TS/io/pull/261) [`b41122b`](https://github.com/Effect-TS/io/commit/b41122b5323c9a657d8fc963f3ddb88a9f158e69) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Introduce Effect.sequential and Effect.parallel

## 0.3.0

### Minor Changes

- [#257](https://github.com/Effect-TS/io/pull/257) [`27a2271`](https://github.com/Effect-TS/io/commit/27a2271ddaedacb5cfced7e96db57702726e2130) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update to effect/data@0.2.0

### Patch Changes

- [#259](https://github.com/Effect-TS/io/pull/259) [`4f0abc1`](https://github.com/Effect-TS/io/commit/4f0abc14a09a6b0f931b507c8a3467ef78191041) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Unbundle unsafeFork from runtime

## 0.2.0

### Minor Changes

- [#255](https://github.com/Effect-TS/io/pull/255) [`c1bfbb7`](https://github.com/Effect-TS/io/commit/c1bfbb75213a0a5e7e5a7f3792eb75da4c1b5708) Thanks [@IMax153](https://github.com/IMax153)! - remove @fp-ts/core following merge into @effect/data

## 0.1.13

### Patch Changes

- [#252](https://github.com/Effect-TS/io/pull/252) [`54c3c42`](https://github.com/Effect-TS/io/commit/54c3c423939cacf6d10a6d958db10ea02c420350) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Detach Cause.pretty from runtime

- [#253](https://github.com/Effect-TS/io/pull/253) [`8b9783a`](https://github.com/Effect-TS/io/commit/8b9783a47228ddb57cd250d0a246d9b672f68c68) Thanks [@pigoz](https://github.com/pigoz)! - refineTagOrDieWith: narrow callback argument type

- [#254](https://github.com/Effect-TS/io/pull/254) [`f3cd1c1`](https://github.com/Effect-TS/io/commit/f3cd1c106c8547499038c99833b38103d50411d2) Thanks [@patroza](https://github.com/patroza)! - cause: fix exception toString

- [#250](https://github.com/Effect-TS/io/pull/250) [`bb7c80d`](https://github.com/Effect-TS/io/commit/bb7c80d5127fb94159c7745638356309f3558c0c) Thanks [@pigoz](https://github.com/pigoz)! - feat(effect): add refineTagOrDie\* operators

## 0.1.12

### Patch Changes

- [#244](https://github.com/Effect-TS/io/pull/244) [`fb07cc2`](https://github.com/Effect-TS/io/commit/fb07cc2ae166c5d142975630a13dfb14f484cf47) Thanks [@IMax153](https://github.com/IMax153)! - make Effect.continueOrFail\* variants lazy on error

- [#248](https://github.com/Effect-TS/io/pull/248) [`7e48373`](https://github.com/Effect-TS/io/commit/7e483733245722c4b8033cc210b442854ed1d18a) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix Config.tuple

- [#246](https://github.com/Effect-TS/io/pull/246) [`7088c7e`](https://github.com/Effect-TS/io/commit/7088c7e5fd8ff70dcb954d3e1d7db2929e636897) Thanks [@IMax153](https://github.com/IMax153)! - add KeyedPool

## 0.1.11

### Patch Changes

- [#242](https://github.com/Effect-TS/io/pull/242) [`93574a7`](https://github.com/Effect-TS/io/commit/93574a75188b50748321e1565786d17aef9d8afc) Thanks [@IMax153](https://github.com/IMax153)! - migrate dual signatures to @fp-ts/core@0.2.0 api

## 0.1.10

### Patch Changes

- [#238](https://github.com/Effect-TS/io/pull/238) [`f43e28d`](https://github.com/Effect-TS/io/commit/f43e28dcf8c10d0a054af23f23fccc04bd7006ad) Thanks [@IMax153](https://github.com/IMax153)! - add Effect.catchTags

- [#240](https://github.com/Effect-TS/io/pull/240) [`f8fe8b6`](https://github.com/Effect-TS/io/commit/f8fe8b6cff6624702285464ef781d855bb3f231d) Thanks [@IMax153](https://github.com/IMax153)! - replace @fp-ts/data with @effect/data

## 0.1.9

### Patch Changes

- [#236](https://github.com/Effect-TS/io/pull/236) [`23b3047`](https://github.com/Effect-TS/io/commit/23b3047b54f70d80f8328e3282e140beaf4877a1) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Expose cause stack annotation for higher level integrations

## 0.1.8

### Patch Changes

- [#234](https://github.com/Effect-TS/io/pull/234) [`5cf73fd`](https://github.com/Effect-TS/io/commit/5cf73fde976295fd51ae2952b25347d12d2d379e) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Preserve causal ordering in rendering errors

## 0.1.7

### Patch Changes

- [#232](https://github.com/Effect-TS/io/pull/232) [`bbfcd0e`](https://github.com/Effect-TS/io/commit/bbfcd0e84e26d73f52c7df88c9304cfd46936fca) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Clean anonymous from traces

## 0.1.6

### Patch Changes

- [#229](https://github.com/Effect-TS/io/pull/229) [`ab5eba9`](https://github.com/Effect-TS/io/commit/ab5eba91d3398961d95b1a7c5b65117c079402b9) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix tracing of promise based constructors

## 0.1.5

### Patch Changes

- [#226](https://github.com/Effect-TS/io/pull/226) [`9846c77`](https://github.com/Effect-TS/io/commit/9846c77c868c21cd9419ed22fe7acb787cf2eec7) Thanks [@IMax153](https://github.com/IMax153)! - add Clock.unsafeCurrentTimeMillis to the Clock interface

- [#226](https://github.com/Effect-TS/io/pull/226) [`6148e7b`](https://github.com/Effect-TS/io/commit/6148e7bb941174e6877dde33e5e1899eaf6944fb) Thanks [@IMax153](https://github.com/IMax153)! - add additional ConfigProvider transformers

- [#228](https://github.com/Effect-TS/io/pull/228) [`bd472ce`](https://github.com/Effect-TS/io/commit/bd472ce6cd658f02aa1bb2ceaa24cf3c8b440ea6) Thanks [@IMax153](https://github.com/IMax153)! - add ConfigProvider.constantCase and expose PathPatch

## 0.1.4

### Patch Changes

- [#223](https://github.com/Effect-TS/io/pull/223) [`4aaa38d`](https://github.com/Effect-TS/io/commit/4aaa38dc501523c28f857c855c7fa9c516826871) Thanks [@IMax153](https://github.com/IMax153)! - add Effect.zipFlatten

- [#225](https://github.com/Effect-TS/io/pull/225) [`19cbb2e`](https://github.com/Effect-TS/io/commit/19cbb2e448b7a5c3ad8a76898a039d16625859ea) Thanks [@IMax153](https://github.com/IMax153)! - update dependencies

- [#223](https://github.com/Effect-TS/io/pull/223) [`a060be2`](https://github.com/Effect-TS/io/commit/a060be24d9506d2cf7702b324af57182772ca333) Thanks [@IMax153](https://github.com/IMax153)! - implement Pool

- [#220](https://github.com/Effect-TS/io/pull/220) [`94fd6c4`](https://github.com/Effect-TS/io/commit/94fd6c4bdec6be320a1bc3aa9b92800af9ad78e1) Thanks [@tim-smart](https://github.com/tim-smart)! - move Config.Wrap to Config namespace

## 0.1.3

### Patch Changes

- [#221](https://github.com/Effect-TS/io/pull/221) [`41ae20e`](https://github.com/Effect-TS/io/commit/41ae20e07f61f03aeacea1c42a7c115ab78c5aa9) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Standardize tracing via region

## 0.1.2

### Patch Changes

- [#218](https://github.com/Effect-TS/io/pull/218) [`0eafe57`](https://github.com/Effect-TS/io/commit/0eafe5788f1c1d064b9f8afb98b2be4279862a19) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix tracing of continuations

## 0.1.1

### Patch Changes

- [#206](https://github.com/Effect-TS/io/pull/206) [`6f26848`](https://github.com/Effect-TS/io/commit/6f26848f637e1993dddc8374ee9a78e18c0d921c) Thanks [@tim-smart](https://github.com/tim-smart)! - add Config.Wrap and Config.unwrap

- [#217](https://github.com/Effect-TS/io/pull/217) [`4a0e706`](https://github.com/Effect-TS/io/commit/4a0e70659a9eedbbe769459896e1ac17688f5ec5) Thanks [@patroza](https://github.com/patroza)! - Fix 'process' usage inside debug

## 0.1.0

### Minor Changes

- [#211](https://github.com/Effect-TS/io/pull/211) [`668ee25`](https://github.com/Effect-TS/io/commit/668ee254e65353de63e32b0fb51e7aa5625be6a5) Thanks [@IMax153](https://github.com/IMax153)! - add Effect.setConfigProvider

- [#211](https://github.com/Effect-TS/io/pull/211) [`53c3b0c`](https://github.com/Effect-TS/io/commit/53c3b0cb0611e59aed34798b1a10dc234cccfd37) Thanks [@IMax153](https://github.com/IMax153)! - simplify Effect.race

- [#211](https://github.com/Effect-TS/io/pull/211) [`9c9b95d`](https://github.com/Effect-TS/io/commit/9c9b95d31f051cc83a56a73bdd49c7079447c36f) Thanks [@IMax153](https://github.com/IMax153)! - implement ConfigProvider.contramapPath

- [#211](https://github.com/Effect-TS/io/pull/211) [`cb7a2d4`](https://github.com/Effect-TS/io/commit/cb7a2d483ac7d752cb3468f40517d03aeaa24819) Thanks [@IMax153](https://github.com/IMax153)! - avoid splitting values in Config except for sequences

- [#211](https://github.com/Effect-TS/io/pull/211) [`cd51837`](https://github.com/Effect-TS/io/commit/cd51837ef3ab8cdfba258b4b97cd80d58e8d7e8f) Thanks [@IMax153](https://github.com/IMax153)! - add Metric.timerWithBoundaries

- [#211](https://github.com/Effect-TS/io/pull/211) [`21f99a5`](https://github.com/Effect-TS/io/commit/21f99a51bc89fcfe473aec6932d93a2658258bb2) Thanks [@IMax153](https://github.com/IMax153)! - uppercase key paths in ConfigProvider.fromEnv

- [#208](https://github.com/Effect-TS/io/pull/208) [`ad12eb4`](https://github.com/Effect-TS/io/commit/ad12eb44eb8d57d4a16be8f1d858eb319b568243) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update dependencies

### Patch Changes

- [#212](https://github.com/Effect-TS/io/pull/212) [`090b8f5`](https://github.com/Effect-TS/io/commit/090b8f5d150b0ab060cce487959c18d59b9926c9) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Unbundle runtime

- [#214](https://github.com/Effect-TS/io/pull/214) [`ff5f9f9`](https://github.com/Effect-TS/io/commit/ff5f9f9f15370724c2808e652327880689987633) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Expose getCurrentFiber

- [#203](https://github.com/Effect-TS/io/pull/203) [`3ecf681`](https://github.com/Effect-TS/io/commit/3ecf6810b7c07e34eb58bc7a7eff0fe87e873f03) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Introduce Error based tracing and dual methods

- [#210](https://github.com/Effect-TS/io/pull/210) [`98c04aa`](https://github.com/Effect-TS/io/commit/98c04aa8eeaa7b16ff22a2d944b5f3461cceaddc) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix mistaken type

## 0.0.66

### Patch Changes

- [`a4a2c9a`](https://github.com/Effect-TS/io/commit/a4a2c9a077bca8c2ad99601b274e1526c6d2a6f4) Thanks [@patroza](https://github.com/patroza)! - Add toString to Exceptions

- [#198](https://github.com/Effect-TS/io/pull/198) [`59747ea`](https://github.com/Effect-TS/io/commit/59747ea66236e77d589020d17e3d26d575622734) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve RuntimeFlags API

- [#198](https://github.com/Effect-TS/io/pull/198) [`4448e99`](https://github.com/Effect-TS/io/commit/4448e99fa63d1c835359615e994e6dc1e113224e) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Expose Schedule step and initial needed for custom schedules

- [#198](https://github.com/Effect-TS/io/pull/198) [`b41507a`](https://github.com/Effect-TS/io/commit/b41507a76c833fdc01ca8c1c89dc1d17b04bc649) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve Layer API

- [#199](https://github.com/Effect-TS/io/pull/199) [`7d0a9dc`](https://github.com/Effect-TS/io/commit/7d0a9dcf20feb02028f7847bdf2f4d9210539a0d) Thanks [@patroza](https://github.com/patroza)! - Fix missing \_tag in built-in Exceptions

- [#196](https://github.com/Effect-TS/io/pull/196) [`f1b8d74`](https://github.com/Effect-TS/io/commit/f1b8d74cfd31b0bfa9622b28f61ff2db46303a7f) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve Deferred API

- [#198](https://github.com/Effect-TS/io/pull/198) [`a941859`](https://github.com/Effect-TS/io/commit/a9418593727ff417b09906c699659216b4190100) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Defer standardization of OTEL Tracer

- [#198](https://github.com/Effect-TS/io/pull/198) [`e20b27b`](https://github.com/Effect-TS/io/commit/e20b27b1c1fbe5ae7cc2fc9abafc3e9e08054f75) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve Reloadable API

- [#198](https://github.com/Effect-TS/io/pull/198) [`411248e`](https://github.com/Effect-TS/io/commit/411248e9125e7d6c565a112f67391b99ab6e3de2) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Type Queue functions as Effect constructors

- [#201](https://github.com/Effect-TS/io/pull/201) [`02f1e57`](https://github.com/Effect-TS/io/commit/02f1e575f3c37377b03890b4e28f499e042dac05) Thanks [@IMax153](https://github.com/IMax153)! - enhancements to Config and ConfigProvider

- [#194](https://github.com/Effect-TS/io/pull/194) [`d4fdba5`](https://github.com/Effect-TS/io/commit/d4fdba556273d7a947528aefadd2579d22b3e8e2) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve Ref, Ref.Syncronized and ScopedRef API

- [#198](https://github.com/Effect-TS/io/pull/198) [`ed6ff39`](https://github.com/Effect-TS/io/commit/ed6ff395b84fe1a4b64f274b2a88d09cedc032b7) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Type Ref functions as Effect constructors

- [#198](https://github.com/Effect-TS/io/pull/198) [`87d2ac0`](https://github.com/Effect-TS/io/commit/87d2ac0ca78b61f32cfdbe5ba6903de5d6e27b2a) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Type Scope functions as Effect constructors

- [#198](https://github.com/Effect-TS/io/pull/198) [`8f1c465`](https://github.com/Effect-TS/io/commit/8f1c46559366536f866b76999b8c8fafff187e5e) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve FiberRefs API

- [#198](https://github.com/Effect-TS/io/pull/198) [`44f1f6e`](https://github.com/Effect-TS/io/commit/44f1f6e0c86be42f2c5134bb9d0dae9219fbadc7) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Type Deferred functions as Effect constructors

- [#198](https://github.com/Effect-TS/io/pull/198) [`fa08f70`](https://github.com/Effect-TS/io/commit/fa08f70a68a72608c15ecc1e0d6d26a7c6d276bc) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve Hub API

- [#198](https://github.com/Effect-TS/io/pull/198) [`b3b862f`](https://github.com/Effect-TS/io/commit/b3b862f9c9068ac1a2d3ebe258f257aaa72d07a5) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Type FiberRef functions as Effect constructors

- [#198](https://github.com/Effect-TS/io/pull/198) [`61cf166`](https://github.com/Effect-TS/io/commit/61cf166da47700951fba5008eb20937f648c56be) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Add Layer.mergeAll

- [#198](https://github.com/Effect-TS/io/pull/198) [`46171ba`](https://github.com/Effect-TS/io/commit/46171ba581aeebc50f7c4d68070130b1b0f34100) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve Fiber unsafe api

- [#197](https://github.com/Effect-TS/io/pull/197) [`3af5aa3`](https://github.com/Effect-TS/io/commit/3af5aa35f34c12f877a982bb36bea82973260120) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Prevent tacit usage of constructors with no arguments

## 0.0.65

### Patch Changes

- [#192](https://github.com/Effect-TS/io/pull/192) [`911994d`](https://github.com/Effect-TS/io/commit/911994d11122cca68d7f1c7647b8803b68d87f55) Thanks [@patroza](https://github.com/patroza)! - Use LazyArg where appropriate. Thanks @tim-smart

## 0.0.64

### Patch Changes

- [#190](https://github.com/Effect-TS/io/pull/190) [`c45ac05`](https://github.com/Effect-TS/io/commit/c45ac05d34a15b69a3e05361769d93af818f6772) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Expose preferred execution via Scheduler

- [#188](https://github.com/Effect-TS/io/pull/188) [`b8f7154`](https://github.com/Effect-TS/io/commit/b8f7154567ecd71940b27788b5bd1303141562f2) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Align Fiber Methods

- [#183](https://github.com/Effect-TS/io/pull/183) [`d12fea7`](https://github.com/Effect-TS/io/commit/d12fea7616565cde7c5f230f2ec1179668dd347c) Thanks [@patroza](https://github.com/patroza)! - fix sequence configs

## 0.0.63

### Patch Changes

- [#186](https://github.com/Effect-TS/io/pull/186) [`91115f2`](https://github.com/Effect-TS/io/commit/91115f26704799807c47ce3e35316024d0d4f2fb) Thanks [@patroza](https://github.com/patroza)! - Fix FiberRefs.currentLogAnnotations leak

- [#185](https://github.com/Effect-TS/io/pull/185) [`f8b3ff5`](https://github.com/Effect-TS/io/commit/f8b3ff556320e6ac8be98f1760e97d9a5fa8ee68) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Remove dependency on MutableHashSet

## 0.0.62

### Patch Changes

- [#181](https://github.com/Effect-TS/io/pull/181) [`2911cd8`](https://github.com/Effect-TS/io/commit/2911cd817afcf5fcc1aa2a49f488cdc5f0b51a8b) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update build scripts

## 0.0.61

### Patch Changes

- [#177](https://github.com/Effect-TS/io/pull/177) [`d5ea3ec`](https://github.com/Effect-TS/io/commit/d5ea3ecfa6e11ec0492033fd5a59bbadaf541467) Thanks [@patroza](https://github.com/patroza)! - Extracted logfmtLogger from stringLogger and restored linebreaks in stringLogger.

- [#180](https://github.com/Effect-TS/io/pull/180) [`2adf0bb`](https://github.com/Effect-TS/io/commit/2adf0bb4b7f768534c88f46b742aeefd66d7b843) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - improve layer api

- [#175](https://github.com/Effect-TS/io/pull/175) [`56d775b`](https://github.com/Effect-TS/io/commit/56d775bcf85de67b1867818c4da5eaeb511fd082) Thanks [@IMax153](https://github.com/IMax153)! - add several Layer combinators

- [#178](https://github.com/Effect-TS/io/pull/178) [`ee0a5f2`](https://github.com/Effect-TS/io/commit/ee0a5f22455985fe5b9002a1aabd36de4b5bdb29) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Make Tracer compatible with OTEL-like systems

## 0.0.60

### Patch Changes

- [#173](https://github.com/Effect-TS/io/pull/173) [`088f803`](https://github.com/Effect-TS/io/commit/088f80360ea0c5f96dcfc59f51ac7bf23fa8ca61) Thanks [@IMax153](https://github.com/IMax153)! - use "," as seqDelim in ConfigProvider.fromEnv

## 0.0.59

### Patch Changes

- [#171](https://github.com/Effect-TS/io/pull/171) [`857941c`](https://github.com/Effect-TS/io/commit/857941cfa3a00489e7dfcbda9395a4c7667a8609) Thanks [@IMax153](https://github.com/IMax153)! - fix Random.nextIntBetween

## 0.0.58

### Patch Changes

- [#169](https://github.com/Effect-TS/io/pull/169) [`d7dc29a`](https://github.com/Effect-TS/io/commit/d7dc29a3f266e44616d5952fdec0703dadf2fd9d) Thanks [@IMax153](https://github.com/IMax153)! - fix TestAnnotationMap.empty

- [#169](https://github.com/Effect-TS/io/pull/169) [`1c52e5c`](https://github.com/Effect-TS/io/commit/1c52e5c948c8186ac58118d75e03af296f3086c2) Thanks [@IMax153](https://github.com/IMax153)! - improve performance of TestAnnotationMap.combine

## 0.0.57

### Patch Changes

- [#167](https://github.com/Effect-TS/io/pull/167) [`4594c6f`](https://github.com/Effect-TS/io/commit/4594c6f1084781cf9c04423cbd7679cc08986deb) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve semahore again

## 0.0.56

### Patch Changes

- [#165](https://github.com/Effect-TS/io/pull/165) [`762bf09`](https://github.com/Effect-TS/io/commit/762bf09a9e63ae9cfa06a7afa88aea4b1ff7b4f3) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve liteweight semaphore

- [#164](https://github.com/Effect-TS/io/pull/164) [`f26abe6`](https://github.com/Effect-TS/io/commit/f26abe6d82be738e1bba4734c1d1537dd475333e) Thanks [@IMax153](https://github.com/IMax153)! - use FiberRefs for TestServices

- [#162](https://github.com/Effect-TS/io/pull/162) [`88fc794`](https://github.com/Effect-TS/io/commit/88fc7948a223798c74f3f535da27c834169e8157) Thanks [@IMax153](https://github.com/IMax153)! - make tags a regional setting

## 0.0.55

### Patch Changes

- [#160](https://github.com/Effect-TS/io/pull/160) [`0b9a92d`](https://github.com/Effect-TS/io/commit/0b9a92d96d75e425371661f2217efae75a9d704b) Thanks [@patroza](https://github.com/patroza)! - Improve stringlogger logfmt compatibility

## 0.0.54

### Patch Changes

- [#158](https://github.com/Effect-TS/io/pull/158) [`2f86303`](https://github.com/Effect-TS/io/commit/2f86303080ac25bc78c2d11bee1444e6d2e2144c) Thanks [@IMax153](https://github.com/IMax153)! - make all testing utils internal

## 0.0.53

### Patch Changes

- [#156](https://github.com/Effect-TS/io/pull/156) [`4aa0fb1`](https://github.com/Effect-TS/io/commit/4aa0fb1a47489cd792eb4920440a430ecf92a675) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve squash priority

## 0.0.52

### Patch Changes

- [#154](https://github.com/Effect-TS/io/pull/154) [`99c12bd`](https://github.com/Effect-TS/io/commit/99c12bdaa68d5c8051b90890c6269ebf5b5019e4) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update fp-ts/data

## 0.0.51

### Patch Changes

- [#153](https://github.com/Effect-TS/io/pull/153) [`4bbd707`](https://github.com/Effect-TS/io/commit/4bbd707b0a3c8aeee63cf274dfb22c31b02a3c23) Thanks [@IMax153](https://github.com/IMax153)! - upgrade dependencies

- [#153](https://github.com/Effect-TS/io/pull/153) [`2546790`](https://github.com/Effect-TS/io/commit/2546790c16e04bbe602565bd1d3f3b948d31c49c) Thanks [@IMax153](https://github.com/IMax153)! - use \_tag over op for internal testing data types

- [#153](https://github.com/Effect-TS/io/pull/153) [`05cb45a`](https://github.com/Effect-TS/io/commit/05cb45a1697cc9e9f1d4b18a7cffcb4119e5878d) Thanks [@IMax153](https://github.com/IMax153)! - use \_tag over op in FiberId

- [#153](https://github.com/Effect-TS/io/pull/153) [`6f2f6a2`](https://github.com/Effect-TS/io/commit/6f2f6a283df47963130bf99e5210801118a2e204) Thanks [@IMax153](https://github.com/IMax153)! - prefer \_tag over op for Schedule.Decision

- [#153](https://github.com/Effect-TS/io/pull/153) [`99018af`](https://github.com/Effect-TS/io/commit/99018afc1a494e533e0d915ff821e4100cf20476) Thanks [@IMax153](https://github.com/IMax153)! - use \_tag over op for Effect/Exit

- [#151](https://github.com/Effect-TS/io/pull/151) [`7c39d11`](https://github.com/Effect-TS/io/commit/7c39d1152453b8c620cee2af85d7a8bec9608b1b) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix OOM in FiberRefs

- [#153](https://github.com/Effect-TS/io/pull/153) [`b5c0b24`](https://github.com/Effect-TS/io/commit/b5c0b242a5354cc0db1c1a275d69dfb486aec903) Thanks [@IMax153](https://github.com/IMax153)! - use \_tag over op for ExecutionStrategy

- [#153](https://github.com/Effect-TS/io/pull/153) [`ca6c993`](https://github.com/Effect-TS/io/commit/ca6c993b938978cc1c357bd68389e8ec97cb10a1) Thanks [@IMax153](https://github.com/IMax153)! - use \_tag over op for Config

- [#153](https://github.com/Effect-TS/io/pull/153) [`9c33eb1`](https://github.com/Effect-TS/io/commit/9c33eb1378184d1d14cf4e61ec7982bc9847b63f) Thanks [@IMax153](https://github.com/IMax153)! - use \_tag over op in FiberStatus

- [#153](https://github.com/Effect-TS/io/pull/153) [`dc8d86c`](https://github.com/Effect-TS/io/commit/dc8d86c5a3e98905461b266a9e8a9f64e3448d8e) Thanks [@IMax153](https://github.com/IMax153)! - use \_tag over op for Layer

- [#153](https://github.com/Effect-TS/io/pull/153) [`5f55b31`](https://github.com/Effect-TS/io/commit/5f55b317b3029c9a7f861d4c90a1bf1515e29a46) Thanks [@IMax153](https://github.com/IMax153)! - use \_tag over op for Patch datatypes

## 0.0.50

### Patch Changes

- [#149](https://github.com/Effect-TS/io/pull/149) [`b45646b`](https://github.com/Effect-TS/io/commit/b45646b820b665620d025952bb4fb584b9cdf885) Thanks [@IMax153](https://github.com/IMax153)! - upgrade dependencies

## 0.0.49

### Patch Changes

- [#147](https://github.com/Effect-TS/io/pull/147) [`11d3eaa`](https://github.com/Effect-TS/io/commit/11d3eaa0cd2e856ff475308d9ff27cb82ad8fa62) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix OOM in RingBuffer, improve structure

## 0.0.48

### Patch Changes

- [#145](https://github.com/Effect-TS/io/pull/145) [`9cf3e68`](https://github.com/Effect-TS/io/commit/9cf3e681ea5ac3de7608d58c18b593d83797dc23) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Make FiberRef API pipeable on the return type

- [#143](https://github.com/Effect-TS/io/pull/143) [`728e48c`](https://github.com/Effect-TS/io/commit/728e48c3008d4da51d619d1ff338d08d4833375c) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Revise default logger, make minimumLogLevel configurable

## 0.0.47

### Patch Changes

- [#140](https://github.com/Effect-TS/io/pull/140) [`8ed2101`](https://github.com/Effect-TS/io/commit/8ed2101894ab932963b416aee8880ea7d91d3058) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Add Fiber.unsafeRoots

## 0.0.46

### Patch Changes

- [#139](https://github.com/Effect-TS/io/pull/139) [`d04b063`](https://github.com/Effect-TS/io/commit/d04b06366d1466ae8eac933a5593f42afb1273d8) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Add Logger.make

- [#139](https://github.com/Effect-TS/io/pull/139) [`18668e4`](https://github.com/Effect-TS/io/commit/18668e436ba55d3928cbea449e1b1a042fb8f43f) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Expose unsafeRootFibers

- [#137](https://github.com/Effect-TS/io/pull/137) [`53e13c5`](https://github.com/Effect-TS/io/commit/53e13c5e9d028f01f33743cf592615828b390d61) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve Effect.unsafeRun typing

## 0.0.45

### Patch Changes

- [#135](https://github.com/Effect-TS/io/pull/135) [`1acb36b`](https://github.com/Effect-TS/io/commit/1acb36be8449be65ca972ed275a543f13292309c) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Avoid useless checks in Semaphore

## 0.0.44

### Patch Changes

- [#133](https://github.com/Effect-TS/io/pull/133) [`b93eb0d`](https://github.com/Effect-TS/io/commit/b93eb0defd6a0991920cbfbffedc324aa2521bf9) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix Lock, extend Lock to be Semaphore

## 0.0.43

### Patch Changes

- [#132](https://github.com/Effect-TS/io/pull/132) [`cacde86`](https://github.com/Effect-TS/io/commit/cacde860c7a877d0d59faf130e1dd610ed4dd290) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve Runtime, remove redundancy add Either variants

- [#128](https://github.com/Effect-TS/io/pull/128) [`f248a7b`](https://github.com/Effect-TS/io/commit/f248a7b7eae7db0ef4d5a68e24d15276dcdf0f88) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Add Type Extractors to Layer and Effect

- [#130](https://github.com/Effect-TS/io/pull/130) [`4a64084`](https://github.com/Effect-TS/io/commit/4a64084f86d25d0f2e3db5503e90c069045d7f62) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Align naming of fold to match & reduce

## 0.0.42

### Patch Changes

- [#126](https://github.com/Effect-TS/io/pull/126) [`a8c216f`](https://github.com/Effect-TS/io/commit/a8c216f97de59463b3059b129e6442ada1fbb714) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix ByRef Equality

## 0.0.41

### Patch Changes

- [#122](https://github.com/Effect-TS/io/pull/122) [`9f289e2`](https://github.com/Effect-TS/io/commit/9f289e2f2426afa0aadfb89aaef1644e2b87ae86) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Simplify asyncInterrupt and add asyncInterruptEither

- [#122](https://github.com/Effect-TS/io/pull/122) [`a728c33`](https://github.com/Effect-TS/io/commit/a728c3315017bc5432367c61de3ed94db0bc6326) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Rename promiseAbort variants to promiseInterrupt

- [#124](https://github.com/Effect-TS/io/pull/124) [`c8f6f1b`](https://github.com/Effect-TS/io/commit/c8f6f1b1b079faa974534c99633056de32adcd9a) Thanks [@IMax153](https://github.com/IMax153)! - fix SynchronizedRef.modify

- [#125](https://github.com/Effect-TS/io/pull/125) [`a909e80`](https://github.com/Effect-TS/io/commit/a909e809b7156ee2dc65d656a862cce486935281) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve lock

## 0.0.40

### Patch Changes

- [#121](https://github.com/Effect-TS/io/pull/121) [`d7cf2b2`](https://github.com/Effect-TS/io/commit/d7cf2b29b50b2cde9e9266a3347586a23682df42) Thanks [@IMax153](https://github.com/IMax153)! - expose Synchronized variance

- [#118](https://github.com/Effect-TS/io/pull/118) [`5441c12`](https://github.com/Effect-TS/io/commit/5441c12bbf095dde4dd9788534dfa558832ff29a) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix Layer.foldCauseLayer signature

## 0.0.39

### Patch Changes

- [#115](https://github.com/Effect-TS/io/pull/115) [`70d73b6`](https://github.com/Effect-TS/io/commit/70d73b6bcfc9884c057c74b693dc0e030f402d90) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Change signature of Effect.raceAll to raise a defect on empty

- [#117](https://github.com/Effect-TS/io/pull/117) [`fb749ab`](https://github.com/Effect-TS/io/commit/fb749abe5f1e180b737581388e0e4c30b38495b1) Thanks [@IMax153](https://github.com/IMax153)! - add Cause.flipCauseOption

## 0.0.38

### Patch Changes

- [#113](https://github.com/Effect-TS/io/pull/113) [`c8898e4`](https://github.com/Effect-TS/io/commit/c8898e4917963bb3d477ea5dbed7634defce78e4) Thanks [@IMax153](https://github.com/IMax153)! - fix implementation of Effect.takeWhile

## 0.0.37

### Patch Changes

- [#111](https://github.com/Effect-TS/io/pull/111) [`ca7719a`](https://github.com/Effect-TS/io/commit/ca7719ab0a68e00f3a9cb04f9a82518f3303fd8e) Thanks [@IMax153](https://github.com/IMax153)! - add Effect.dropUntil

## 0.0.36

### Patch Changes

- [#108](https://github.com/Effect-TS/io/pull/108) [`fca450f`](https://github.com/Effect-TS/io/commit/fca450f7bb510f483ececad28f329e122fdf48ca) Thanks [@IMax153](https://github.com/IMax153)! - expose Scheduler

- [#109](https://github.com/Effect-TS/io/pull/109) [`7c1f086`](https://github.com/Effect-TS/io/commit/7c1f086391ecbc2b4333c00f90cf6f4721046a7f) Thanks [@IMax153](https://github.com/IMax153)! - fix Queue method signatures

## 0.0.35

### Patch Changes

- [#106](https://github.com/Effect-TS/io/pull/106) [`9d43955`](https://github.com/Effect-TS/io/commit/9d439557ca762fc9558b0b4c6ba8c81ddf30a7b3) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Weaken cast to satisfy stm

## 0.0.34

### Patch Changes

- [#104](https://github.com/Effect-TS/io/pull/104) [`bd05241`](https://github.com/Effect-TS/io/commit/bd05241208fc1ec83c3aff98f287ecf7007d588d) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix configProvider, avoid depending on external types

## 0.0.33

### Patch Changes

- [#103](https://github.com/Effect-TS/io/pull/103) [`48aa63a`](https://github.com/Effect-TS/io/commit/48aa63ad4746747e98d53781230bfd9207d87ea4) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Add promise with abort variants

- [#103](https://github.com/Effect-TS/io/pull/103) [`e4183ec`](https://github.com/Effect-TS/io/commit/e4183ec3712f83f2e895ee676fd29ad1bc3b61f8) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Remove dependency on List

- [#102](https://github.com/Effect-TS/io/pull/102) [`73f91e7`](https://github.com/Effect-TS/io/commit/73f91e7351fa5c0e665f5b2f025defca8e100be7) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Unbundle printer and SafeEval, expose Runtime to Logger

- [#98](https://github.com/Effect-TS/io/pull/98) [`edde247`](https://github.com/Effect-TS/io/commit/edde247c385a7c4288203b478c0c6380e22d6612) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Perf: Remove Stack

- [#103](https://github.com/Effect-TS/io/pull/103) [`e4183ec`](https://github.com/Effect-TS/io/commit/e4183ec3712f83f2e895ee676fd29ad1bc3b61f8) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Remove dependency on WeakIterableMap

- [#101](https://github.com/Effect-TS/io/pull/101) [`f57ddf2`](https://github.com/Effect-TS/io/commit/f57ddf2ad783612fc173ffd2e90b8adba2e30fe5) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Dedupe Runtime Fork Logic

- [#100](https://github.com/Effect-TS/io/pull/100) [`902d847`](https://github.com/Effect-TS/io/commit/902d847a101d788698dad5fc8853a3875dbc1784) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Replace Semaphore with highly performant lock

## 0.0.32

### Patch Changes

- [#96](https://github.com/Effect-TS/io/pull/96) [`806d075`](https://github.com/Effect-TS/io/commit/806d0750690fc7b990ec036cc2df24135f0641c3) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve semver ranges

## 0.0.31

### Patch Changes

- [#95](https://github.com/Effect-TS/io/pull/95) [`2dfe6e4`](https://github.com/Effect-TS/io/commit/2dfe6e4739b65f7a1ec9b8a2babaeac8db4f8cc9) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update dependencies

- [#94](https://github.com/Effect-TS/io/pull/94) [`88d5b06`](https://github.com/Effect-TS/io/commit/88d5b06513a1189bedd8084416b14ea6be5225c0) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve priority naming

- [#92](https://github.com/Effect-TS/io/pull/92) [`904b82e`](https://github.com/Effect-TS/io/commit/904b82e04a36b46118e6e5e196a22efd669847e0) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Expose Schedulers

## 0.0.30

### Patch Changes

- [#90](https://github.com/Effect-TS/io/pull/90) [`e550a1f`](https://github.com/Effect-TS/io/commit/e550a1f42d23be7e80850152bc361571617ab8e3) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update dependencies and improve docs

## 0.0.29

### Patch Changes

- [#89](https://github.com/Effect-TS/io/pull/89) [`db4a8bc`](https://github.com/Effect-TS/io/commit/db4a8bc6536b9c88b6dbf6d4a1319a947e0803fa) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Change design of STM.withJournal and STMDriver

- [#86](https://github.com/Effect-TS/io/pull/86) [`d928327`](https://github.com/Effect-TS/io/commit/d9283274e3b1e2f0e7c07e6015774e1ff31d134b) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Integrate tracing in STM

- [#89](https://github.com/Effect-TS/io/pull/89) [`0ffff27`](https://github.com/Effect-TS/io/commit/0ffff27d7270378341caec75e4859c02a0bb9460) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Simplify STM branching

## 0.0.28

### Patch Changes

- [`1365ebd`](https://github.com/Effect-TS/io/commit/1365ebdfa2d5976697fe1035e21b6f6c207e14a6) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update dependencies

## 0.0.27

### Patch Changes

- [#82](https://github.com/Effect-TS/io/pull/82) [`7267bc7`](https://github.com/Effect-TS/io/commit/7267bc7ffbd36c5211695c8bdaf961b9deb87aa3) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Optimize runLoop

- [#84](https://github.com/Effect-TS/io/pull/84) [`d2577c3`](https://github.com/Effect-TS/io/commit/d2577c387a6285fe646ffe5c9dd4b0306b2a612e) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Add function table for drainQueueWhileRunning

## 0.0.26

### Patch Changes

- [#79](https://github.com/Effect-TS/io/pull/79) [`97d3364`](https://github.com/Effect-TS/io/commit/97d3364174898a10e66cd420daece4d33637e0a3) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Resume on fork instead of start

## 0.0.25

### Patch Changes

- [#77](https://github.com/Effect-TS/io/pull/77) [`6c3f8f0`](https://github.com/Effect-TS/io/commit/6c3f8f0a59e47e24b683ba1e034ad57b4f9ff9c1) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Add fibers to global scope before start

## 0.0.24

### Patch Changes

- [#75](https://github.com/Effect-TS/io/pull/75) [`395a8e5`](https://github.com/Effect-TS/io/commit/395a8e59af6c2711deb895485bc270eb5e052117) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update dependencies

## 0.0.23

### Patch Changes

- [#73](https://github.com/Effect-TS/io/pull/73) [`5e22bf7`](https://github.com/Effect-TS/io/commit/5e22bf7fcf57d2bf76c08ce87561d71c7e0f02b7) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Track fibers globally

## 0.0.22

### Patch Changes

- [#71](https://github.com/Effect-TS/io/pull/71) [`dc3beb7`](https://github.com/Effect-TS/io/commit/dc3beb703e2122f1208f4cac90c44b37308f4b49) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Switch to compile time debugger

## 0.0.21

### Patch Changes

- [#69](https://github.com/Effect-TS/io/pull/69) [`ccfdc6a`](https://github.com/Effect-TS/io/commit/ccfdc6af6a68d10bc4736baf1749fbf4235011bf) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Readd debugAs

## 0.0.20

### Patch Changes

- [#66](https://github.com/Effect-TS/io/pull/66) [`aa9d97d`](https://github.com/Effect-TS/io/commit/aa9d97d63758cd7f1ad205d024043f2eee2abdaf) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Debug config based on FiberRef

- [#36](https://github.com/Effect-TS/io/pull/36) [`e9c8092`](https://github.com/Effect-TS/io/commit/e9c809292102ffa4de8bd31d83b7916bf05fa636) Thanks [@IMax153](https://github.com/IMax153)! - add Config api

- [#68](https://github.com/Effect-TS/io/pull/68) [`333ea04`](https://github.com/Effect-TS/io/commit/333ea047d33e4aeeeb51ecbee5acfbd8b6a35c46) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix source maps

- [#36](https://github.com/Effect-TS/io/pull/36) [`6dc2a16`](https://github.com/Effect-TS/io/commit/6dc2a16f2893e6c4fb144a5444f82f7ae9b52617) Thanks [@IMax153](https://github.com/IMax153)! - Add default ConfigProvider

## 0.0.19

### Patch Changes

- [#63](https://github.com/Effect-TS/io/pull/63) [`43d7db1`](https://github.com/Effect-TS/io/commit/43d7db1d69cad9cbb51262d86e01e6d316fc6b1f) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Support execution debugging

## 0.0.18

### Patch Changes

- [#61](https://github.com/Effect-TS/io/pull/61) [`8953fd7`](https://github.com/Effect-TS/io/commit/8953fd7cbbb11216dc22e25f8027ef627677424d) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve Debug Config

## 0.0.17

### Patch Changes

- [#58](https://github.com/Effect-TS/io/pull/58) [`5c982f9`](https://github.com/Effect-TS/io/commit/5c982f91ec7892e18b3b0a78a791bbdaaa4e3b47) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix log level override

## 0.0.16

### Patch Changes

- [#56](https://github.com/Effect-TS/io/pull/56) [`0defe90`](https://github.com/Effect-TS/io/commit/0defe902be07a2242acfd850d325714fc1705e22) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update @fp-ts/data

## 0.0.15

### Patch Changes

- [#53](https://github.com/Effect-TS/io/pull/53) [`5393109`](https://github.com/Effect-TS/io/commit/53931093809df1de115636d35744f2c1867ff211) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Isolate Debug from LogLevel

## 0.0.14

### Patch Changes

- [#51](https://github.com/Effect-TS/io/pull/51) [`76f1e22`](https://github.com/Effect-TS/io/commit/76f1e228a0da8aea8b704553ea60bf56ca67c7be) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Cleanup Cause

## 0.0.13

### Patch Changes

- [#49](https://github.com/Effect-TS/io/pull/49) [`3d2fd3b`](https://github.com/Effect-TS/io/commit/3d2fd3b5a8d95d016f60704e0aaf04632bfa9fb2) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Set default logger to be console

## 0.0.12

### Patch Changes

- [#47](https://github.com/Effect-TS/io/pull/47) [`d010db0`](https://github.com/Effect-TS/io/commit/d010db00676d2470f08df89061dd83be23ee5c8f) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update dependencies

## 0.0.11

### Patch Changes

- [#45](https://github.com/Effect-TS/io/pull/45) [`ab078fb`](https://github.com/Effect-TS/io/commit/ab078fb20d952d3eda86355083266f97ae39f6b5) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Curry provideService and provideServiceEffect

## 0.0.10

### Patch Changes

- [#43](https://github.com/Effect-TS/io/pull/43) [`fb2f0cb`](https://github.com/Effect-TS/io/commit/fb2f0cb496af0862010935da45399b53a3253ec6) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update dependencies

## 0.0.9

### Patch Changes

- [#41](https://github.com/Effect-TS/io/pull/41) [`02b7ec0`](https://github.com/Effect-TS/io/commit/02b7ec0ba8ac1c780855aaea64fd40d67819cd33) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Rollback adapter removal

## 0.0.8

### Patch Changes

- [#39](https://github.com/Effect-TS/io/pull/39) [`19c8309`](https://github.com/Effect-TS/io/commit/19c8309d67b5390be88adc1c36310a92622fe062) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix Internal Types Again

## 0.0.7

### Patch Changes

- [#37](https://github.com/Effect-TS/io/pull/37) [`3dbcb37`](https://github.com/Effect-TS/io/commit/3dbcb375d447552a10b1225929abe90ce0669eaf) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix internal types

## 0.0.6

### Patch Changes

- [#34](https://github.com/Effect-TS/io/pull/34) [`b911229`](https://github.com/Effect-TS/io/commit/b91122989c3a516bc7185a4579a056a967e3e2c7) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix Cause Rendering

- [#33](https://github.com/Effect-TS/io/pull/33) [`86deebb`](https://github.com/Effect-TS/io/commit/86deebb968b127cde3b2720d0a1098ba311cdf2f) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Improve trace gluing

- [#31](https://github.com/Effect-TS/io/pull/31) [`efcd6ac`](https://github.com/Effect-TS/io/commit/efcd6ac0d1e773706bd2c0c956940e680d053f26) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Merge Stack Annotations in Cause Render

## 0.0.5

### Patch Changes

- [#26](https://github.com/Effect-TS/io/pull/26) [`6538300`](https://github.com/Effect-TS/io/commit/653830005f50c3b6e005dc15f2b7a6f9b8f091b8) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix Cause.find on Parallel/Sequential

- [#25](https://github.com/Effect-TS/io/pull/25) [`a0ff508`](https://github.com/Effect-TS/io/commit/a0ff5087f717f6e027a246024ab49ae6788ce2ef) Thanks [@IMax153](https://github.com/IMax153)! - add additional effect methods

- [#28](https://github.com/Effect-TS/io/pull/28) [`a8aecbc`](https://github.com/Effect-TS/io/commit/a8aecbcc72b73c59b762c08b6783bd768bb23c44) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Preserve Stack Annotations when patching flags

## 0.0.4

### Patch Changes

- [#22](https://github.com/Effect-TS/io/pull/22) [`f1d781c`](https://github.com/Effect-TS/io/commit/f1d781c21fbd3a55f75b3da6a75c7c75b9146397) Thanks [@IMax153](https://github.com/IMax153)! - fix Cause.flatMap and Cause.map

- [#24](https://github.com/Effect-TS/io/pull/24) [`60a44d8`](https://github.com/Effect-TS/io/commit/60a44d8708fa8dba7387797c8343c7b5cea93f71) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Fix Cause.as

## 0.0.3

### Patch Changes

- [#17](https://github.com/Effect-TS/io/pull/17) [`8891d12`](https://github.com/Effect-TS/io/commit/8891d1244e37cc6dab123b0b2e4617333d8a9206) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Support Tag in Gen

- [#20](https://github.com/Effect-TS/io/pull/20) [`9ea5b01`](https://github.com/Effect-TS/io/commit/9ea5b01b1c9239b8f2e7dd78571acde12c16bc5d) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Rollback Tag Support

## 0.0.2

### Patch Changes

- [#8](https://github.com/Effect-TS/io/pull/8) [`d07fd73`](https://github.com/Effect-TS/io/commit/d07fd7352ad80d2a9db9bac8899b0b69dfe52125) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Integrate Tracing

- [#12](https://github.com/Effect-TS/io/pull/12) [`20f6d0b`](https://github.com/Effect-TS/io/commit/20f6d0b27e7b52ad146737a44d2e4f5e8872f6c4) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Trace withSpan

## 0.0.1

### Patch Changes

- [#5](https://github.com/Effect-TS/io/pull/5) [`dfaf233`](https://github.com/Effect-TS/io/commit/dfaf233152f19cfd254e3a9678da305bb5038a10) Thanks [@mikearnaldi](https://github.com/mikearnaldi)! - Update fp-ts
