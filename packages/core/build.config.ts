import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/index", "src/node", "src/schema"],
  declaration: true,
  clean: true,
  externals: [
    "@eslint/js",
    "@typescript-eslint/parser",
    "eslint",
    "typescript",
    "typescript-eslint",
    "unbuild",
    "vitest",
    "@bindle/reactivity",
  ],
  rollup: {
    emitCJS: true,
  },
});
