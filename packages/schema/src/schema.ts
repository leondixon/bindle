import type { BindleFieldType, useBindleField } from '@bindle/core'
import type { InputTypeHTMLAttribute } from 'vue'

export type BindleSchema = {
  $bindle: BindleFieldType
  name: string
  id?: string
  value?: unknown
  label?: string
} & Record<string, unknown>

export type BindleInputType = ReturnType<typeof useBindleField>['type'] & InputTypeHTMLAttribute

export type BindleInputSchema = BindleSchema & {
  $bindle: BindleInputType
}
