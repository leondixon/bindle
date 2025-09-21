// import type { Ref } from '@vue/reactivity'
// import { ref } from '@vue/reactivity'

// export interface BindleFieldContext<T = undefined> {
//   name?: string
//   id?: string
//   value: Ref<T>
// }

// interface Options<T = undefined> {
//   name?: string
//   id?: string
//   value: T
// }

// export default function (options: Options): BindleFieldContext {
//   const value = ref<typeof options.value>(options.value)

//   return {
//     name: options.name ?? 'placeholder-name',
//     id: options.id ?? 'placeholder-id',
//     value,
//   }
// }
