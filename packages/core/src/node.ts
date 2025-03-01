import { createSignal } from '@bindle/reactivity'
import { BindleSchemaDefinition } from '@bindle/schema'

export interface BindleNode {
  type: 'input'
  name: string,
  id: string,
}


export function createNode(schema: BindleSchemaDefinition): BindleNode {

  const [ node ] = createSignal<BindleNode>({
    type: schema.type,
    name: schema.name,
    id: schema.id,
  })
  return node()
}