import { BindleSchemaDefinition } from "./schema";

// Sections are purely for

interface SectionOptions {
	name: string;
	tag?: string;
	children?: BindleSchemaDefinition[];
}

/**
 * Creates a section schema definition for a schema section.
 *
 * @param {SectionOptions} options - Configuration options for the section.
 * @param {string} options.name - The name of the section.
 * @param {string} [options.tag="div"] - The HTML tag to use for the section (defaults to "div").
 * @param {BindleSchema[]} [options.children] - Optional child elements to include in the section.
 * @returns {BindleSchemaDefinition} The constructed section schema definition.
 */
export function createSection(options: SectionOptions): BindleSchemaDefinition {
	return {
		elementTag: options.tag ?? "div",
		name: options.name,
		children: options.children,
		type: "section",
	};
}
