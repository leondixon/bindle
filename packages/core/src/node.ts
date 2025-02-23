import { createSignal } from '@bindle/reactivity'
import { BindleSchema, BindleSchemaDefiniton } from '@bindle/schema'

export interface BindleNode {
  type: 'input'
  name: string,
  id: string,
}


export function createNode(schema: BindleSchemaDefiniton): BindleNode {

  const [ node ] = createSignal<BindleNode>({
    type: schema.type,
    name: schema.name,
    id: schema.id,
  })
  return node()
}