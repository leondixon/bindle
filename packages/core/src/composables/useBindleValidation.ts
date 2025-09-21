import type { Ref, WatchHandle } from 'vue'
import { computed, ref, watch } from 'vue'

type BindleValidator = () => boolean

interface UseBindleValidation {
  errors: Ref<Map<string, string>>
  addValidation: (name: string, message: string, validator: BindleValidator) => void
  removeValidation: (name: string) => void
}

export function useBindleValidation(): UseBindleValidation {
  const errors: UseBindleValidation['errors'] = ref(new Map())
  const validators = new Map<string, { result: boolean, handler: WatchHandle }>()
  const addValidation: UseBindleValidation['addValidation'] = function (name, message, validator) {
    const result = computed(() => validator())
    const handler = watch(result, () => {
      validators.set(name, { result: result.value, handler })
      if (result.value)
        errors.value.set(name, message)
      else
        errors.value.delete(name)
    })
  }
  const removeValidation: UseBindleValidation['removeValidation'] = (name: string) => validators.delete(name)

  return {
    errors,
    addValidation,
    removeValidation,
  }
}
