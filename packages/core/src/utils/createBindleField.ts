import { ref } from '@vue/reactivity'

interface Options {
  name?: string
  id?: string
  value: T
}

export default function (options: Options) {
  const value = ref<typeof options.value>()
}
