import { test, expect } from 'vitest';
import { parseDOMElementSchema } from '.';
test('parse element schema', () => {
    const element = {
        $element: 'input',
        props: {},
        id: 'input',
        name: 'input'
    };
    expect(parseDOMElementSchema(element)).toBeDefined();
});
