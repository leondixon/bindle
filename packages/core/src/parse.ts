import {
	BindleComponentSchema,
	BindleElementSchema,
	BindleNativeSchema,
	BindleSchema,
	BindleSchemaDefinition,
} from "./schema";

function isDOMElementSchema(schema: BindleSchema): BindleElementSchema | false {
	if ("$element" in schema) return schema;

	return false;
}

function isComponentSchema(
	schema: BindleSchema
): BindleComponentSchema | false {
	if ("$component" in schema) return schema;

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

	if (isComponentSchema(schema))
		return parseComponentSchema(schema as BindleComponentSchema);
	throw new Error("No implemented");
}

export function parseDOMElementSchema(
	schema: BindleElementSchema
): BindleSchemaDefinition {
	// const id = schema.id ?? createUniqueId(schema.$element)
	const schemaDefinition: BindleSchemaDefinition = {
		elementTag: schema.$element,
		type: schema.type,
		children: schema.children?.map((child) => parse(child)),
		name: schema.name,
		id: schema.id,
		props: schema.props,
	};

	return schemaDefinition;
}

export function parseBindleSchema(
	schema: BindleNativeSchema
): BindleSchemaDefinition {
	// const id = schema.id ?? createUniqueId(schema.$element)
	const schemaDefinition: BindleSchemaDefinition = {
		elementTag: schema.$bindle,
		name: schema.name,
		id: schema.id,
		type: "input",
		props: schema.props,
	};

	return schemaDefinition;
}

export function parseComponentSchema(
	schema: BindleComponentSchema
): BindleSchemaDefinition {
	// const id = schema.id ?? createUniqueId(schema.$element)
	const schemaDefinition: BindleSchemaDefinition = {
		elementTag: schema.$component,
		name: schema.name,
		id: schema.id,
		type: "component",
		props: schema.props,
	};

	return schemaDefinition;
}
