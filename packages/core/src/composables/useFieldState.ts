import type { ComputedRef, Ref } from 'vue'
import { computed } from 'vue'

export interface FieldState<T> {
  value: T
  isDirty: ComputedRef<boolean>
  setValue: (newValue: T) => void
  reset: () => void
}

export function useFieldState<T extends Ref>(value: T): FieldState<T> {
  const initialValue = value.value
  const isDirty = computed(() => value.value === initialValue)
  const reset = () => (value.value = initialValue)
  const setValue = (newValue: T) => value.value = newValue.value

  return {
    value,
    isDirty,
    reset,
    setValue,
  }
}
