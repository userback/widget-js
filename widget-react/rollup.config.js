import typescript from '@rollup/plugin-typescript';

function baseCfg(c) {
    return Object.assign(c, {
        exports: 'named',
    });
}

export default {
    plugins: [typescript()],
    input: 'react.tsx',
    external: ['react', 'react-dom', '@userback/widget'],
    output: [
        baseCfg({ file: './dist/react.js', format: 'cjs' }),
        baseCfg({ file: './dist/react.mjs', format: 'esm' }),
        baseCfg({
            file: './dist/react.umd.js',
            format: 'umd',
            name: 'UserbackReact',
            globals: { react: 'React', '@userback/widget': 'Userback' },
        }),
    ],
};
