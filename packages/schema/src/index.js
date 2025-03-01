function isDOMElementSchema(schema) {
    console.log('$element' in schema);
    if ('$element' in schema)
        return schema;
    return false;
}
export function parse(schema) {
    console.log('parse', isDOMElementSchema(schema));
    if (isDOMElementSchema(schema))
        return parseDOMElementSchema(schema);
    throw new Error('No implemented');
}
const UniqueIdsCounter = new Map();
function createUniqueId(type) {
    if (!UniqueIdsCounter.has(type))
        UniqueIdsCounter.set(type, 0);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const counter = UniqueIdsCounter.get(type);
    const uid = `${type}_${String(counter)}`;
    UniqueIdsCounter.set(type, counter + 1);
    return uid;
}
export function parseDOMElementSchema(schema) {
    console.log('parseDOMElementSchema');
    const id = schema.id ?? createUniqueId(schema.$element);
    const schemaDefinition = {
        type: 'input',
        elementTag: schema.$element,
        children: schema.children?.map((child) => parse(child)),
        name: schema.name ?? id,
        id,
        props: schema.props
    };
    console.log(schemaDefinition);
    return schemaDefinition;
}
// function parseComponentSchema(schema: BindleComponentSchema): BindleSchemaDefiniton {
//   const schemaDefinition: BindleSchemaDefiniton = {
//     type: 'input',
//     name: schema.name ?? 'fallback',
//     id: schema.id ?? 'fallback'
//   }
//   return schemaDefinition
// }
