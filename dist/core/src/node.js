import { createSignal } from '@bindle/reactivity';
export function createNode(schema) {
    if (!schema.$el)
        throw new Error('Missing element');
    const [node, setNode] = createSignal({
        type: schema.$el,
        name: schema.name ?? 'test',
        id: schema.id ?? 'test',
    });
    return node();
}
