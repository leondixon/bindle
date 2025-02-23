import { expect, test } from 'vitest';
import { createNode } from './node';
test('creating a input schema', () => {
    const schema = {
        $el: 'input',
        name: 'defined',
        id: 'defined',
    };
    const node = createNode(schema);
    expect(node).toStrictEqual({
        type: 'input',
        name: 'defined',
        id: 'defined'
    });
});
