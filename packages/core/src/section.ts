import { BindleSchemaDefinition } from "./schema";

interface SectionOptions {
	name: string;
	tag?: string;
	children?: BindleSchemaDefinition[];
}

export function createSection(options: SectionOptions): BindleSchemaDefinition {
	return {
		elementTag: options.tag ?? "div",
		name: options.name,
		children: options.children,
		type: "section",
	};
}
