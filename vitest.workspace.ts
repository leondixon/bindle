import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  "packages/*",
  "apps/*",
  {
    test: {
      exclude: ['**/eslint.config.ts/**','**/eslint.config.js/**', '**/node_modules/**']
    }
  }
])
