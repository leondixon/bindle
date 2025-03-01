import { defineComponent, h} from 'vue'
import { BindleSchema, BindleSchemaDefinition, parse } from "@bindle/schema"

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

const SchemaRender = defineComponent((props: { schema: BindleSchema | BindleSchema[] }) => {
  let schemaDefinition: BindleSchemaDefinition | BindleSchemaDefinition[]
  if(Array.isArray(props.schema)){
    schemaDefinition
    // schemaDefinition = props.schema.map((schema) => parse(schema))
    // const children = schemaDefinition.map((definition) => renderHTMLElement(definition))
    // return () => h('div', children)
     
    const children = props.schema.map((schema) => h(SchemaRender, { schema }))
    return () => children
    
  }
  else {
    schemaDefinition = parse(props.schema)
    return () => renderHTMLElement(schemaDefinition as BindleSchemaDefinition)
  }
}, {
  props: ['schema']
})

export {
  SchemaRender
}

export function renderHTMLElement(schema: BindleSchemaDefinition) {
  return h(
    schema.elementTag,
    schema.props
  )
}