import { test, expect } from "vitest";
import { BindleElementSchema, BindleSchemaDefinition } from "./schema";
import { parseDOMElementSchema } from "./parse";
import { createSection } from "./section";

test("parse element schema", () => {
	const element: BindleElementSchema = {
		$element: "input",
		props: {},
		id: "input",
		name: "input",
	};

	expect(parseDOMElementSchema(element)).toBeDefined();
});
