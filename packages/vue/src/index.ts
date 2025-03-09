import { defineComponent, h } from "vue";
import { BindleSchema, BindleSchemaDefinition, parse } from "@bindle/core";

// export const BindleSchema = defineComponent({
//   name: 'Bindle',
//   props: {
//     schema: {
//       type: [Array, Object] as PropType<Definition>,
//       required: true,
//     },
//   },
//   emits: ['mounted'],
//   setup(props, context) {

//     return () => (render ? render() : null)
//   },
// })

// function bindleRenderSchema(): RenderFunction {

//   return () =>
//     h(
//       BindleSchema,
//       {
//         schema: schema.value,
//         data: node.context,
//         onMounted: didMount,
//         library,
//         memoKey,
//       },
//       { ...context.slots }
//     )
// }

const BindleSchemaRender = defineComponent(
	(props: { schema: BindleSchema | BindleSchema[] }) => {
		let schemaDefinition: BindleSchemaDefinition | BindleSchemaDefinition[];
		if (Array.isArray(props.schema)) {
			schemaDefinition = props.schema.map((schema) => parse(schema));
			const children = schemaDefinition.map((definition) =>
				renderHTMLElement(definition)
			);
			return () => children;
		} else {
			schemaDefinition = parse(props.schema);
			return () =>
				renderHTMLElement(schemaDefinition as BindleSchemaDefinition);
		}
	},
	{
		props: ["schema"],
	}
);

export { BindleSchemaRender };

export function renderHTMLElement(schema: BindleSchemaDefinition) {
	const { elementTag, children, ...bindings } = schema;
	return h(
		schema.elementTag,
		bindings,
		children?.map((child) => renderHTMLElement(child) as BindleSchemaDefinition)
	);
}
