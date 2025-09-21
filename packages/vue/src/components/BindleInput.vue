<script setup lang="ts">
import { useBindleField } from '@bindle/core'
import type { InputHTMLAttributes, IntrinsicElementAttributes, NativeElements } from 'vue'

const model = defineModel<unknown>()

type InputTypes = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'


type Props = {
  type: ReturnType<typeof useBindleField>['type'] & InputTypes
  label: string
  id?: string
  help?: string
} & /* @vue-ignore */ InputHTMLAttributes



const props = defineProps<Props>()

const { type, state } = useBindleField({type: props.type, value: model, id: props.id})
const { value } = state
</script>

<template>
  <p class=" text-blue-500">
    {{ value }}
    {{ state }}
    {{ state.isDirty }}
    {{ state.value }}
  </p>
  <div class="flex flex-col">
    <label :v-if="label" :for="id">{{ label }}</label>
    <input :type="type" :id v-model="model" class="border border-gray-700 rounded" >
    <p v-if="help">{{ help }}</p>
  </div>
</template>