<script setup lang="ts">
import { useBindleField } from '@bindle/core'

const { help, id, label, type, value } = defineProps<{
  type: ReturnType<typeof useBindleField>['type']
  label: string
  id?: string
  help?: string
  value: unknown
}>()

const { state, type: fieldType } = useBindleField({type, value: undefined, id})

</script>

<template>
  <div class="flex flex-col">
    <label :v-if="label" :for="id">{{ label }}</label>
    <input :type="fieldType" :id v-model="state" class="border border-gray-700 rounded" >
    <p v-if="help">{{ help }}</p>
  </div>
</template>