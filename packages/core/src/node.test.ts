import { expect, test } from "vitest";
import { createNode } from "./node";
import { BindleSchemaDefinition } from "packages/core/src/schema";

test("creating an input schema", () => {
  const schema: BindleSchemaDefinition = {
    type: "input",
    elementTag: "input",
    name: "defined",
    id: "defined",
  };

  const node = createNode(schema);
  expect(node).toStrictEqual({
    type: "input",
    name: "defined",
    id: "defined",
  });
});

// test('creating an invalid input schema', () => {
//   const schema: BindleSchemaDefiniton = {
//     type: 'input',
//     elementTag: 'input',
//     name: 'defined',
//     id: 'defined'
//   }

//   expect(() => createNode(schema)).toThrow()
// })
