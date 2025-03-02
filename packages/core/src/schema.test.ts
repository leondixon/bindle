import { test, expect } from 'vitest'
import { BindleElementSchema, parseDOMElementSchema } from './schema'

test('parse element schema', () => {
  const element: BindleElementSchema = {
    $element: 'input',
    props: {},
    id: 'input',
    name: 'input'
  }

  expect(parseDOMElementSchema(element)).toBeDefined()
})