import typescript from '@rollup/plugin-typescript';

export default {
    plugins: [typescript()],
    input: 'vue.tsx',
    external: ['vue', '@userback/widget'],
    output: [
        { file: './dist/vue.js', format: 'cjs', exports: 'default' },
        { file: './dist/vue.mjs', format: 'esm', exports: 'default' },
        { file: './dist/vue.umd.js', format: 'umd', name: 'Userback', exports: 'default' },
    ],
};
