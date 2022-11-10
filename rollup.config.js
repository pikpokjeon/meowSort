import {nodeResolve} from "@rollup/plugin-node-resolve"
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: "./index.js",
  plugins: [nodeResolve(), babel( {babelHelpers: 'bundled'} ), commonjs()],
  output: [
    {
      name: 'randomsort',
      dir: "dist/cjs",
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      name: 'randomsort',
      dir: "dist/umd",
      format: "umd",
      exports: "named",
      sourcemap: true,
    },
    {
      name: 'randomsort',
      dir: "dist/es",
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
}