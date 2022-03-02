import fs from 'fs';
import path from 'path';
import ejs from 'ejs';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import html from '@rollup/plugin-html';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import postcssImport from 'postcss-import';
import serve from 'rollup-plugin-serve';
import liveReload from 'rollup-plugin-livereload'

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const watch = !!process.env.ROLLUP_WATCH;

export default {
  input: './src/index.tsx',
  output: {
    file: 'dist/app.js'
  },
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      babelHelpers: 'bundled'
    }),
    image(),
    postcss({
      extract: path.resolve(__dirname, './dist/app.css'),
      plugins: [
        postcssImport(),
        cssnano()
      ]
    }),
    html({
      template: (args) => {
        const htmlTemplate = fs.readFileSync(path.resolve(__dirname, './src/index.ejs'), 'utf8')
        return ejs.render(htmlTemplate, args)
      }
    }),
    ...(
      watch ? [
        serve('dist'),
        liveReload()
      ]: []
    )
  ]
};