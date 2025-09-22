import type { BindleSchema } from './schema'
import { expect, it } from 'vitest'
import { isInputDOMElementType, parse } from './parser'

it('parse schema', () => {
  const schema: BindleSchema = {
    $bindle: 'text',
    name: 'textInput',
    label: 'Example text input',
    value: 'Prepopulated',
  }

  const expected = {
    tag: 'input',
    name: 'textInput',
    type: schema.$bindle,
    label: schema.label,
    value: schema.value,
  }
  expect(parse(schema)).toStrictEqual(expected)
})

it('isInputDOMElementType', () => {
  const schema: BindleSchema = {
    $bindle: 'text',
    name: 'textInput',
    label: 'Example text input',
    value: 'Prepopulated',
  }
  expect(isInputDOMElementType(schema)).toBe(true)
})

it('!isInputDOMElementType', () => {
  const schema: BindleSchema = {
    $bindle: 'datepicker',
    name: 'textInput',
    label: 'Example text input',
    value: 'Prepopulated',
  }
  expect(isInputDOMElementType(schema)).toBe(false)
})
