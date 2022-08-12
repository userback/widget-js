import typescript from '@rollup/plugin-typescript';

export default {
    plugins: [typescript()],
    input: 'react.tsx',
    external: ['react', 'react-dom', '@userback/widget'],
    output: [
        { file: './dist/react.js', format: 'cjs', exports: 'named' },
        { file: './dist/react.mjs', format: 'esm', exports: 'named' },
        { file: './dist/react.umd.js', format: 'umd', name: 'Userback', exports: 'named' },
    ],
};
