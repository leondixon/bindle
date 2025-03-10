import { expect, test } from "vitest";
import { createSection } from "./section";
import { BindleSchemaDefinition } from "./schema";

test("create a section", () => {
	const outer = createSection({
		name: "outer",
	});

	expect(outer).toStrictEqual({
		elementTag: "div",
		name: "outer",
		children: undefined,
		type: "section",
	});
});

test("create a nested section", () => {
	const input = createSection({ name: "input" });

	const inner = createSection({ name: "inner", children: [input] });

	const outer = createSection({ name: "outer", children: [inner] });

	const expectOutput: BindleSchemaDefinition = {
		elementTag: "div",
		name: "outer",
		type: "section",
		children: [
			{
				elementTag: "div",
				name: "inner",
				type: "section",
				children: [
					{
						elementTag: "div",
						name: "input",
						type: "section",
						children: undefined,
					},
				],
			},
		],
	};
	expect(outer).toStrictEqual(expectOutput);
});
