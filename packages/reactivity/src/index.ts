type Effect = () => void

let currentEffect: Effect | undefined

export function createSignal<T>(initialValue: T): [() => T, (newState: T) => T] {
  let state = initialValue
  const subscribers = new Set<() => void>
  function getState() {
    if (currentEffect && !subscribers.has(currentEffect))
      subscribers.add(currentEffect)

    return state
  }

  function setState(newState: T) {
    state = newState
    subscribers.forEach((effect) => { effect() })
    return state
  }
  return [getState, setState]
}

export function createEffect(callback: Effect) {
  currentEffect = callback
  callback()
  currentEffect = undefined
}