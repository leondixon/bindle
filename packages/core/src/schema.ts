import { parseBindleSchema, parseDOMElementSchema } from "./parse";

export interface BindleElementSchema {
	$element: string;
	name?: string;
	id?: string;
	type?: string;
	props?: Record<string, unknown>;
	children?: BindleSchema[];
}
export interface BindleComponentSchema {
	$component: string;
	name?: string;
	id?: string;
	props?: Record<string, unknown>;
}

//this needs to renamed to something better
export interface BindleNativeSchema {
	$bindle: "text";
	name?: string;
	id?: string;
	props?: Record<string, unknown>;
}

/**
 * Schema provided to a render to create the elements.
 */
export type BindleSchema =
	| BindleElementSchema
	| BindleComponentSchema
	| BindleNativeSchema;

interface BaseSchemaDefinition {
	elementTag: string;
	name?: string;
	id?: string;
	type?: string;
	props?: Record<string, unknown>;
	children?: BindleSchemaDefinition[];
}

/**
 * Universal schema definiton which BindleSchemas are convert to.
 */
export type BindleSchemaDefinition = BaseSchemaDefinition;

const UniqueIdsCounter = new Map<string, number>();

function createUniqueId(type: string) {
	if (!UniqueIdsCounter.has(type)) UniqueIdsCounter.set(type, 0);

	const counter = UniqueIdsCounter.get(type)!;
	const uid = `${type}_${String(counter)}`;
	UniqueIdsCounter.set(type, counter + 1);
	return uid;
}

// function parseComponentSchema(schema: BindleComponentSchema): BindleSchemaDefiniton {
//   const schemaDefinition: BindleSchemaDefiniton = {
//     type: 'input',
//     name: schema.name ?? 'fallback',
//     id: schema.id ?? 'fallback'
//   }

//   return schemaDefinition
// }
