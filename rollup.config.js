import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import { preserveDirectives } from 'rollup-plugin-preserve-directives';

//NEW
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const packageJson = require('./package.json')
// const tailwindConfig = require('./tailwind.config.js');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'esm',
        sourcemap: true,
        banner: `"use client"`
      },
    ],
    plugins: [
      
      // NEW
      typescript(),
      peerDepsExternal(),

      postcss({
        config: {
          path: './postcss.config.cjs',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
        plugins: [
          tailwindcss({
            content: ["./src/**/*.{html,js,ts,tsx}"],
            theme: {
              extend: {},
            },
            plugins: [],
          })
        ],
      }),

      preserveDirectives(),

      resolve(),
      commonjs(),

      // NEW
      // terser({
      //   compress: { directives: false },
      // }),
    ],
  },
  {
    input: 'dist/cjs/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
]
