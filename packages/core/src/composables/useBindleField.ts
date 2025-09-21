import { useFieldState } from './useFieldState'

interface Options<T = unknown> {
  id?: string
  name?: string
  type: 'text' | 'number'
  value: T
}

export interface BindleField {
  type: Options['type']
  state: ReturnType<typeof useFieldState>
}

export function useBindleField(options: Options): BindleField {
  const state = useFieldState(options.value)
  return {
    type: options.type,
    state,
  }
}
