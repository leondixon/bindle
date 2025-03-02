<script setup lang="ts">
import type { BindleSchema } from '@bindle/core'
import { SchemaRender } from '@bindle/vue'

const schema: BindleSchema = {
  $element: 'input',
  id: 'input',
  name: 'input',
}

const schemaArray: BindleSchema = [
  {
    $element: 'input',
    id: 'input',
    name: 'input',
  },
  {
    $element: 'textarea',
    id: 'textarea',
    name: 'textarea',
  },
]

const schemaArray2: BindleSchema = [
  {
    $element: 'div',
    children: [
      {
        $element: 'p',
        children: 'Test text',
      },
    ],
  },
  {
    $element: 'input',
    id: 'input',
    name: 'input',
  },
  {
    $element: 'textarea',
    id: 'textarea',
    name: 'textarea',
  },
]
</script>

<template>
  <SchemaRender :schema="schema" />
  <SchemaRender :schema="schemaArray" />
  <!-- <SchemaRender :schema="schemaArray2" /> -->
</template>
