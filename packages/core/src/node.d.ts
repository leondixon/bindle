import { BindleSchemaDefinition } from '@bindle/schema';
export interface BindleNode {
    type: 'input';
    name: string;
    id: string;
}
export declare function createNode(schema: BindleSchemaDefinition): BindleNode;
