import { expect, test, vi } from 'vitest'
import { createEffect, createSignal } from '.'

test('create signal returns value and setting updates value', () => {
  const [ count, setCount ] = createSignal(0)

  expect(count()).toBe(0)

  setCount(12)

  expect(count()).toBe(12)
})

test('createEffect executes on initialisation of Signal and update', () => {
  const [ name, setName ] = createSignal('Marvin')

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
  createEffect(() => {
    console.log(name())
  })

  expect(logSpy).toHaveBeenCalledWith('Marvin')

  setName('Gaye')

  expect(logSpy).toHaveBeenCalledWith('Gaye')

  logSpy.mockRestore()
})