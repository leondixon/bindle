export interface BindleNode {
    type: 'input';
    name: string;
    id: string;
}
export interface Schema {
    $el?: 'input';
    id?: string;
    name?: string;
}
export declare function createNode(schema: Schema): BindleNode;
