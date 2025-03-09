import { parseBindleSchema, parseDOMElementSchema } from "./parse";

export interface BindleElementSchema {
	$element: string;
	children?: BindleSchema[];
	type?: string;
	id?: string;
	name?: string;
	props?: Record<string, unknown>;
}

export interface BindleComponentSchema {
	$component: "input";
	id?: string;
	name?: string;
}

export interface BindleNativeSchema {
	$bindle: "text";
	id?: string;
	name?: string;
}

export type BindleSchema =
	| BindleElementSchema
	| BindleComponentSchema
	| BindleNativeSchema;

interface BaseSchemaDefinition {
	elementTag: string;
	children?: BaseSchemaDefinition[];
	type?: string;
	id?: string;
	name?: string;
	props?: Record<string, unknown>;
}

type BindleDOMSchemaDefinition = {} & BaseSchemaDefinition;

type BindleComponentSchemaDefinition = {
	type: "input";
} & BaseSchemaDefinition;

export type BindleSchemaDefinition =
	| BindleDOMSchemaDefinition
	| BindleComponentSchemaDefinition;

function isDOMElementSchema(schema: BindleSchema): BindleElementSchema | false {
	if ("$element" in schema) return schema;

	return false;
}

function isBindleSchema(schema: BindleSchema): BindleNativeSchema | false {
	if ("$bindle" in schema) return schema;

	return false;
}

export function parse(schema: BindleSchema): BindleSchemaDefinition {
	if (isDOMElementSchema(schema))
		return parseDOMElementSchema(schema as BindleElementSchema);

	if (isBindleSchema(schema))
		return parseBindleSchema(schema as BindleNativeSchema);

	throw new Error("No implemented");
}

const UniqueIdsCounter = new Map<string, number>();

function createUniqueId(type: string) {
	if (!UniqueIdsCounter.has(type)) UniqueIdsCounter.set(type, 0);

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const counter = UniqueIdsCounter.get(type)!;
	const uid = `${type}_${String(counter)}`;
	UniqueIdsCounter.set(type, counter + 1);
	return uid;
}

interface SectionOptions {
	tag: string;
}

export function createSection(
	name: string,
	children: unknown[],
	options: SectionOptions
): BindleSchemaDefinition {
	return {
		elementTag: options.tag ?? "div",
		name,
		type: "section",
		...options,
	};
}

// function parseComponentSchema(schema: BindleComponentSchema): BindleSchemaDefiniton {
//   const schemaDefinition: BindleSchemaDefiniton = {
//     type: 'input',
//     name: schema.name ?? 'fallback',
//     id: schema.id ?? 'fallback'
//   }

//   return schemaDefinition
// }
