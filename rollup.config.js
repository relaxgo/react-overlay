import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import path from 'path';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: path.join('dist', pkg.main), format: 'cjs', sourcemap: true },
      { file: path.join('dist', pkg.module), format: 'es', sourcemap: true },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        extract: 'style.css',
      }),
      copy({
        targets: [
          { src: 'LICENSE', dest: 'dist' },
          { src: 'README.md', dest: 'dist' },
          {
            src: 'package.json',
            dest: 'dist',
            transform: pickPackageFields,
          },
        ],
      }),
      terser(),
    ],
  },
];

function pickPackageFields(contents, filename) {
  const data = JSON.parse(contents);
  const {
    version,
    license,
    main,
    homepage,
    repository,
    typings,
    files,
    engines,
    peerDependencies,
    name,
    author,
    module,
    dependencies,
  } = data;

  return JSON.stringify(
    {
      version,
      name,
      author,
      license,
      main,
      homepage,
      repository,
      module,
      typings,
      files,
      engines,
      peerDependencies,
      dependencies,
    },
    null,
    2,
  );
}
