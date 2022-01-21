// vite.config.js
const { defineConfig } = require('vite');
const path = require('path');
import banner from 'vite-plugin-banner';
// import copy from 'rollup-plugin-copy';
const pjson = require('./package.json');
const year = new Date().getFullYear();

const puiHeader = [
  '/*',
  '  SkellyCSS v' + pjson.version + ' | ' + pjson.name + '\n',
  '  ' + pjson.description + ' (' + pjson.homepage + ')',
  '  ©' + year + ' ' + pjson.author,
  '  ' + pjson.bugs.url,
  '  Released under the ' + pjson.license + ' license.',
  '*/',
  '',
].join('\n');

export default defineConfig({
  plugins: [
    banner(puiHeader)
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'main.js'),
      name: 'SkellyCSS',
      fileName: () => `skelly.js`,
    },
  },
});
