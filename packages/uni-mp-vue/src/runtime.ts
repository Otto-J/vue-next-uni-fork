export { createVueApp } from './renderer'
// vue-global-api
export { defineAsyncComponent } from './utils'
export { logError } from 'packages/runtime-core/src/errorHandling'
export { injectHook } from 'packages/runtime-core/src/apiLifecycle'
export {
  getExposeProxy,
  isInSSRComponentSetup
} from 'packages/runtime-core/src/component'
export { setCurrentRenderingInstance } from 'packages/runtime-core/src/componentRenderContext'
export { updateProps } from 'packages/runtime-core/src/componentProps'
export { invalidateJob } from 'packages/runtime-core/src/scheduler'
export { EMPTY_OBJ } from '@vue/shared'
export { setTemplateRef } from './rendererTemplateRef'
// @vue/reactivity
export {
  EffectScope,
  ReactiveEffect,
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
} from '@vue/reactivity'

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
  onServerPrefetch,
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
  guardReactiveProps,
  withScopeId,
  // vue-i18n 使用到了
  Text,
  Fragment,
  setDelayFlushJobs
} from '@vue/runtime-core'
export { useCssModule } from '@vue/runtime-dom'
export { useCssVars } from './helpers/useCssVars'
