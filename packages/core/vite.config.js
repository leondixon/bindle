import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            name: '@bindle/core',
            formats: ['es'],
            fileName: 'index'
        },
        rollupOptions: {
            external: [],
        },
    },
    test: {
        environment: 'node',
        deps: {
            inline: ['@bindle/reactivity', '@bindle/schema'],
        },
    },
    plugins: [dts({
            outDir: 'dist',
            include: ['src'],
            exclude: ['node_modules', 'dist'],
            insertTypesEntry: true, // Ensures "types" field in package.json works
        })]
});
