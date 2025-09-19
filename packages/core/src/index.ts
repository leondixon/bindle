import type { Ref } from '@vue/reactivity'

export interface BindleFormContext<T> {
  name: string
  value: Ref<T>
}

export interface BindleFieldContext<T> {
  name: string
  value: Ref<T>
}
