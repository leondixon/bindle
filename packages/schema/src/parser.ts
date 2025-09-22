import type { InputHTMLAttributes } from 'vue'
import type { BindleInputSchema, BindleInputType, BindleSchema } from './schema'

const inputTypes = ['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'] as const

type BindleInput = {
  tag: 'input'
  type: BindleInputType
  label?: string
  id?: string
  help?: string
} & /* @vue-ignore */ InputHTMLAttributes

export function parse(schema: BindleSchema) {
  if (isInputDOMElementType(schema))
    return schemaToInput(schema)

  return schema
}

function schemaToInput(schema: BindleSchema): BindleInput {
  const { $bindle, ...props } = schema
  return {
    tag: 'input',
    type: schema.$bindle,
    ...props,
  }
}

export function isInputDOMElementType(schema: BindleSchema): schema is BindleInputSchema {
  // @ts-expect-error this is a type guard
  return inputTypes.includes(schema.$bindle)
}
