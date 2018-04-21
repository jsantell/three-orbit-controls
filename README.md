# three-orbit-controls

[![Build Status](http://img.shields.io/npm/v/@jsantell/three-orbit-controls.svg?style=flat-square)](https://www.npmjs.org/package/@jsantell/three-orbit-controls)

Personal fork of [THREE.OrbitControls](https://github.com/mrdoob/three.js/blob/master/examples/js/controls/OrbitControls.js) hosted on [npm](https://npmjs.org) as [@jsantell/three-orbit-controls](https://www.npmjs.org/package/@jsantell/three-orbit-controls). ES6-ified for inclusion via module bundler.

## Installation

`$ npm install --save @jsantell/three-orbit-controls`

## Usage

```js
import { PerspectiveCamera, WebGLRenderer } from 'three';
import OrbitControls from '@jsantell/three-orbit-controls';

const renderer = new WebGLRenderer();
const controls = new OrbitControls(new PerspectiveCamera(), renderer.domElement || document);
```

## Build

`$ npm run build`

## Publish

`$ npm run version`

## License

MIT License, Copyright © 2010-2018 three.js authors
