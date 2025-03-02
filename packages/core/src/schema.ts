export interface BindleElementSchema {
  $element: string,
  children?: BindleSchema[],
  id?: string,
  name?: string
  props?: Record<string, unknown>
}

export interface BindleComponentSchema {
  $component: 'input' ,
  id?: string,
  name?: string
}

export type BindleSchema = BindleElementSchema | BindleComponentSchema

interface BaseSchemaDefinition {
  elementTag: string,
  children?: BaseSchemaDefinition[]
  id: string,
  name: string,
  props?: Record<string, unknown>
}

type BindleDOMSchemaDefinition = {
  type: 'input',
} & BaseSchemaDefinition

type BindleComponentSchemaDefinition = {
  type: 'input',
} & BaseSchemaDefinition

export type BindleSchemaDefinition = BindleDOMSchemaDefinition | BindleComponentSchemaDefinition

function isDOMElementSchema(schema: BindleSchema): BindleElementSchema | false {
  console.log('$element' in schema)
  if ('$element' in schema)
    return schema

  return false
}


export function parse(schema: BindleSchema): BindleSchemaDefinition {
  console.log('parse', isDOMElementSchema(schema))
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

export function parseDOMElementSchema(schema: BindleElementSchema): BindleSchemaDefinition {
  console.log('parseDOMElementSchema')
  const id = schema.id ?? createUniqueId(schema.$element)
  const schemaDefinition: BindleSchemaDefinition = {
    type: 'input',
    elementTag: schema.$element,
    children: schema.children?.map((child) => parse(child)),
    name: schema.name ?? id,
    id,
    props: schema.props
  }

  console.log(schemaDefinition)

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