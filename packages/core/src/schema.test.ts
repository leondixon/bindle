import { test, expect } from "vitest";
import { BindleElementSchema } from "./schema";
import { parseDOMElementSchema } from "./parse";

test("parse element schema", () => {
	const element: BindleElementSchema = {
		$element: "input",
		props: {},
		id: "input",
		name: "input",
	};

	expect(parseDOMElementSchema(element)).toBeDefined();
});

test("create a section", () => {});
