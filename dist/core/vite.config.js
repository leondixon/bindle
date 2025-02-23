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
            inline: ['@bindle/reactivity'],
        },
    },
    plugins: [dts()]
});
