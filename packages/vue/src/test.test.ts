import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import { BindleSchemaRender } from ".";
import { createSection } from "@bindle/core";

test("render an input", () => {
	const wrapper = mount(BindleSchemaRender, {
		props: {
			schema: {
				$element: "input",
				type: "text",
				id: "ben",
				name: "ten",
			},
		},
		attachTo: document.body,
	});

	const input = wrapper.find("input");
	expect(input.exists()).toBeTruthy();
	expect(input.element.id).toEqual("ben");
	expect(input.element.name).toEqual("ten");
	wrapper.unmount();
});

test("render a div with a child", () => {
	const wrapper = mount(BindleSchemaRender, {
		props: {
			schema: {
				$element: "div",
				children: [
					{
						$element: "input",
						type: "text",
						id: "ben",
						name: "ten",
					},
				],
			},
		},
		attachTo: document.body,
	});

	const input = wrapper.find("input");
	expect(input.exists()).toBeTruthy();
	expect(input.element.id).toEqual("ben");
	expect(input.element.name).toEqual("ten");
	wrapper.unmount();
});

test("create sections and render", () => {
	const input = createSection({ name: "input" });

	const inner = createSection({ name: "inner", children: [input] });

	const outer = createSection({ name: "outer", children: [inner] });

	// const wrapper = mount(BindleSchemaRender, {
	// 	props: {
	// 		schema: outer,
	// 	},
	// });
});

test("render a bindle component", () => {
	const wrapper = mount(BindleSchemaRender, {
		props: {
			schema: {
				$bindle: "input",
				type: "text",
				id: "ben",
				name: "ten",
			},
		},
		attachTo: document.body,
	});
});
