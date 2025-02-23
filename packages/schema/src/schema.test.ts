import { test, expect } from 'vitest'
import { BindleElementSchema, parseDOMElementSchema } from '.'

test('parse element schema', () => {
  const element: BindleElementSchema = {
    $element: 'input',
    id: 'input',
    name: 'input'
  }

  expect(parseDOMElementSchema(element)).toBeDefined()
})