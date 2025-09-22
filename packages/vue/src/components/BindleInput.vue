<script setup lang="ts">
import { useBindleField } from '@bindle/core'
import type { InputHTMLAttributes, InputTypeHTMLAttribute } from 'vue'

const model = defineModel<unknown>()

type Props = {
  type: ReturnType<typeof useBindleField>['type'] & InputTypeHTMLAttribute
  label: string
  id?: string
  help?: string
} & /* @vue-ignore */ InputHTMLAttributes



const props = defineProps<Props>()

const { type, state, validation } = useBindleField({type: props.type, value: model, id: props.id})

const { errors, addValidation } = validation

addValidation('test', 'nice people', () => model.value === 'test')

</script>

<template>
  <div class="flex flex-col">
    <label :v-if="label" :for="id">{{ label }}</label>
    <input :type="type" :id v-model="model" class="border border-gray-700 rounded" >
    <p v-if="help">{{ help }}</p>
    <div class="text-red-500">
      <p v-for="error in errors">{{ error[1] }}</p>
    </div>
  </div>
</template>