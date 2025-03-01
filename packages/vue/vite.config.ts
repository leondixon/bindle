import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    outDir: './dist',
    lib: {
      entry: './src/index.ts',
      name: '@bindle/vue',
      formats: ['es'],   
      fileName: 'index'
    },
    rollupOptions: {
      external: [],
    },
  },
  plugins: [dts({
    outDir: 'dist',
    include: ['src'],
    exclude: ['node_modules', 'dist'],
    insertTypesEntry: true, // Ensures "types" field in package.json works
  })]
});