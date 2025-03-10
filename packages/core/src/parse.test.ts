import { expect, test } from "vitest";
import { parse } from "./parse";
import {
	BindleComponentSchema,
	BindleElementSchema,
	BindleNativeSchema,
} from "./schema";

test("element schema to schema definition", () => {
	const schema: BindleElementSchema = {
		$element: "p",
		name: "parent",
		children: [
			{
				$element: "div",
				name: "child",
			},
		],
	};
	const definition = parse(schema);

	expect(definition).toStrictEqual({
		elementTag: "p",
		type: undefined,
		children: [
			{
				elementTag: "div",
				type: undefined,
				children: undefined,
				name: "child",
				id: undefined,
				props: undefined,
			},
		],
		name: "parent",
		id: undefined,
		props: undefined,
	});
});

test("component schema to schema definition", () => {
	const schema: BindleComponentSchema = {
		$component: "Modal",
		name: "modal",
	};
	const definition = parse(schema);

	expect(definition).toStrictEqual({
		elementTag: "Modal",
		name: "modal",
		id: undefined,
		type: "component",
		props: undefined,
	});
});

test("native schema to schema definition", () => {
	const schema: BindleNativeSchema = {
		$bindle: "text",
		name: "text",
	};
	const definition = parse(schema);

	expect(definition).toStrictEqual({
		elementTag: "text",
		name: "text",
		id: undefined,
		type: "input",
		props: undefined,
	});
});
