import typescript from '@rollup/plugin-typescript';

export default {
    plugins: [typescript()],
    input: 'widget.ts',
    output: [
        { file: './dist/widget.cjs', format: 'cjs', exports: 'named' },
        { file: './dist/widget.mjs', format: 'esm', exports: 'named' },
        { file: './dist/widget.umd.js', format: 'umd', name: 'Userback', exports: 'named' },
    ],
};
