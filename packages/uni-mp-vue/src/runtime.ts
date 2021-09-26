export { createVueApp } from './renderer'

export { logError } from 'packages/runtime-core/src/errorHandling'
export { injectHook } from 'packages/runtime-core/src/apiLifecycle'
export { isInSSRComponentSetup } from 'packages/runtime-core/src/component'

// @vue/reactivity
export {
  customRef,
  effect,
  effectScope,
  getCurrentScope,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  markRaw,
  onScopeDispose,
  proxyRefs,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  toRaw,
  toRef,
  toRefs,
  triggerRef,
  unref
} from '@vue/runtime-core'

export {
  callWithAsyncErrorHandling,
  callWithErrorHandling,
  camelize,
  computed,
  defineComponent,
  defineEmits,
  defineExpose,
  defineProps,
  getCurrentInstance,
  inject,
  mergeDefaults,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  provide,
  queuePostFlushCb,
  resolveComponent,
  resolveDirective,
  resolveFilter,
  stop,
  toDisplayString,
  toHandlerKey,
  toHandlers,
  useAttrs,
  useSSRContext,
  useSlots,
  version,
  warn,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
  withAsyncContext,
  withCtx,
  withDefaults,
  withDirectives,
  // withKeys,
  // withMemo,
  // withModifiers,
  withScopeId
} from '@vue/runtime-core'
