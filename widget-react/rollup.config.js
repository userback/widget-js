import typescript from '@rollup/plugin-typescript';

export default {
  plugins: [ typescript() ],
  input: 'react.tsx',
  output: [
    { file : './dist/react.js' , format : 'cjs' },
    { file : './dist/react.mjs', format : 'esm' },
    { file : './dist/react.umd.js' , format : 'umd', name: "Userback" },
  ],
}
