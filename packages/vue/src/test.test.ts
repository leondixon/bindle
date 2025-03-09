import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import { BindleSchemaRender } from ".";

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

test("render a component", () => {});

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
