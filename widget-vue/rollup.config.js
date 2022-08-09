import typescript from '@rollup/plugin-typescript';

export default {
    plugins: [typescript()],
    input: 'vue.tsx',
    output: [
        { file: './dist/vue.js', format: 'cjs' },
        { file: './dist/vue.mjs', format: 'esm' },
        { file: './dist/vue.umd.js', format: 'umd', name: 'Userback' },
    ],
};
