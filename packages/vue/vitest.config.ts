// vitest.config.ts
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom', // 👈 Simulates a browser environment
    globals: true,         // Optional: enables global APIs like `describe`
  },
  resolve: {
    alias: {
      '@bindle/core': path.resolve(__dirname, '../core/src')
    }
  }
})