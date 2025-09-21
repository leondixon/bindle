import type { ComputedRef, Ref } from '@vue/reactivity'
import { computed, ref } from '@vue/reactivity'

export interface FieldState<T> {
  value: Ref<T>
  initialValue: T
  isDirty: ComputedRef<boolean>
  setValue: (newValue: T) => void
  reset: () => void
}

export function useFieldState<T>(initialValue: T): FieldState<T> {
  const value = ref(initialValue) as Ref<T>
  const isDirty = computed(() => initialValue === value)
  const reset = () => (value.value = initialValue)
  const setValue = (newValue: T) => value.value = newValue

  return {
    value,
    initialValue,
    isDirty,
    reset,
    setValue,
  }
}
