import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  "./packages/reactivity/vite.config.ts",
  "./packages/core/vite.config.ts",
  "./apps/vue-playground/vitest.config.ts",
  "./packages/schema/vite.config.ts",
  {
    test: {
      exclude: ['**/eslint.config.ts/**','**/eslint.config.js/**', '**/node_modules/**']
    }
  }
])
