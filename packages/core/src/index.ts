import type { Ref } from '@vue/reactivity'

interface BindleFormContext<T> {
  name: string
  value: Ref<T>
}

interface BindleFieldContext<T> {
  name: string
  value: Ref<T>
}
