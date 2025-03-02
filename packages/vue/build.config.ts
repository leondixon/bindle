import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index'],
  declaration: true,
  clean: true,
  externals: [
    'vue',
    '@vue/runtime-dom',
    '@vue/runtime-core',
    '@vue/reactivity',
    '@vue/shared',
    '@vue/compiler-dom',
    '@vue/compiler-core',
    'csstype',
    '@babel/types',
    '@babel/parser'
  ],
  rollup: {
    emitCJS: true, // Ensure CommonJS output for compatibility
  },
})

