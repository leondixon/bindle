import {
	BindleElementSchema,
	BindleNativeSchema,
	BindleSchemaDefinition,
	parse,
} from "./schema";

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
		type: "input",
		// children: schema.children?.map((child) => parse(child)),
		name: schema.name,
		id: schema.id,
		// props: schema.props,
	};

	return schemaDefinition;
}
