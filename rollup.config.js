import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    plugins: [
      eslint({
        include: ['src/**'],
        throwOnError: true,
        throwOnWarning: true
      }),
      babel({ exclude: 'node_modules/**' })
    ]
  }
];
