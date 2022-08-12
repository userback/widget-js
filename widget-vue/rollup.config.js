import typescript from '@rollup/plugin-typescript';

function baseCfg(c){
    return Object.assign(c, {
        exports: 'default',
    });
}

export default {
    plugins: [typescript()],
    input: 'vue.tsx',
    external: ['vue', '@userback/widget'],
    output: [
        baseCfg({ file: './dist/vue.js', format: 'cjs' }),
        baseCfg({ file: './dist/vue.mjs', format: 'esm' }),
        baseCfg({
            file: './dist/vue.umd.js',
            format: 'umd',
            name: 'UserbackVue',
            globals: { '@userback/widget': 'Userback' },
        }),
    ],
};
