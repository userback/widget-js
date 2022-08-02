import typescript from '@rollup/plugin-typescript';

export default {
    plugins: [typescript()],
    input: 'widget.ts',
    output: [
        { file: './dist/widget.js', format: 'cjs' },
        { file: './dist/widget.mjs', format: 'esm' },
        { file: './dist/widget.umd.js', format: 'umd', name: 'Userback' },
    ],
};
