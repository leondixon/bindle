import type { Ref } from 'vue'
import { useBindleValidation } from './useBindleValidation'
import { useFieldState } from './useFieldState'

export type BindleFieldType = 'text' | 'number' | 'select' | 'textarea'
interface Options<T extends Ref> {
  id?: string
  name?: string
  type: BindleFieldType
  value: T
}

export interface BindleField<T extends Ref> {
  type: BindleFieldType
  state: ReturnType<typeof useFieldState<T>>
  validation: ReturnType<typeof useBindleValidation>
}

export function useBindleField<T extends Ref>(options: Options<T>): BindleField<T> {
  const state = useFieldState(options.value)
  const validation = useBindleValidation()
  return {
    type: options.type,
    state,
    validation,
  }
}
