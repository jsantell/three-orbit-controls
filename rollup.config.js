const fs = require('fs');
const path = require('path');

export default {
  input: 'OrbitControls.js',
  external: ['three'],
  output: [{
    file: './dist/three-orbit-controls.js',
    format: 'umd',
    name: 'OrbitControls',
    globals: {
      'three': 'THREE',
    },
  }, {
    file: './dist/three-orbit-controls.module.js',
    format: 'es',
    globals: {
      'three': 'THREE',
    },
  }],
  watch: {
    include: 'src/**',
  },
};
