export interface BindleElementSchema {
    $element: string;
    children?: BindleSchema[];
    id?: string;
    name?: string;
    props?: Record<string, unknown>;
}
export interface BindleComponentSchema {
    $component: 'input';
    id?: string;
    name?: string;
}
export type BindleSchema = BindleElementSchema | BindleComponentSchema;
interface BaseSchemaDefinition {
    elementTag: string;
    children?: BaseSchemaDefinition[];
    id: string;
    name: string;
    props?: Record<string, unknown>;
}
type BindleDOMSchemaDefinition = {
    type: 'input';
} & BaseSchemaDefinition;
type BindleComponentSchemaDefinition = {
    type: 'input';
} & BaseSchemaDefinition;
export type BindleSchemaDefinition = BindleDOMSchemaDefinition | BindleComponentSchemaDefinition;
export declare function parse(schema: BindleSchema): BindleSchemaDefinition;
export declare function parseDOMElementSchema(schema: BindleElementSchema): BindleSchemaDefinition;
export {};
