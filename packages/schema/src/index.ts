export interface BindleElementSchema {
  $element: string,
  id?: string,
  name?: string
  props: Record<string, unknown>
}

export interface BindleComponentSchema {
  $component: 'input' ,
  id?: string,
  name?: string
}

export type BindleSchema = BindleElementSchema | BindleComponentSchema

interface BaseSchemaDefinition {
  elementTag: string,
  id: string,
  name: string,
  props: Record<string, unknown>
}

type BindleDOMSchemaDefinition = {
  type: 'input',
} & BaseSchemaDefinition

type BindleComponentSchemaDefinition = {
  type: 'input',
} & BaseSchemaDefinition

export type BindleSchemaDefiniton = BindleDOMSchemaDefinition | BindleComponentSchemaDefinition

function isDOMElementSchema(schema: BindleSchema): BindleElementSchema | false {
  if ('$element' in schema)
    return schema

  return false
}


export function parse(schema: BindleSchema): BindleSchemaDefiniton {
  if (isDOMElementSchema(schema))
    return parseDOMElementSchema(schema as BindleElementSchema)

  throw new Error('No implemented')
}

const UniqueIdsCounter = new Map<string, number>()

function createUniqueId(type: string) {
  if (!UniqueIdsCounter.has(type))
    UniqueIdsCounter.set(type, 0)

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const counter = UniqueIdsCounter.get(type)!
  const uid = `${type}_${String(counter)}`
  UniqueIdsCounter.set(type, counter + 1)
  return uid
}

export function parseDOMElementSchema(schema: BindleElementSchema): BindleSchemaDefiniton {
  const id = schema.id ?? createUniqueId(schema.$element)
  const schemaDefinition: BindleSchemaDefiniton = {
    type: 'input',
    elementTag: 'input',
    name: schema.name ?? id,
    id,
    props: schema.props
  }

  return schemaDefinition
}


// function parseComponentSchema(schema: BindleComponentSchema): BindleSchemaDefiniton {
//   const schemaDefinition: BindleSchemaDefiniton = {
//     type: 'input',
//     name: schema.name ?? 'fallback',
//     id: schema.id ?? 'fallback'
//   }

//   return schemaDefinition
// }