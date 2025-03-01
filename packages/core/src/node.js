import { createSignal } from '@bindle/reactivity';
export function createNode(schema) {
    const [node] = createSignal({
        type: schema.type,
        name: schema.name,
        id: schema.id,
    });
    return node();
}
