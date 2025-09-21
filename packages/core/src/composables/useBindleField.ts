import type { InputHTMLAttributes } from 'vue'
import { useFieldState } from './useFieldState'

type FieldType = 'text' | 'number' | 'select' | 'textarea'
interface Options<T> {
  id?: string
  name?: string
  type: FieldType
  value: T
}

export interface BindleField<T> {
  type: FieldType
  state: ReturnType<typeof useFieldState<T>>
}

export function useBindleField<T>(options: Options<T>): BindleField<T> {
  const state = useFieldState(options.value)
  return {
    type: options.type,
    state,
  }
}
