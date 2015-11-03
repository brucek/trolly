# A boilerplate written in ES2015 for Node and the browser.

[![Travis Status][trav_img]][trav_site]
[![Coverage Status](https://coveralls.io/repos/Kflash/trolly/badge.svg?branch=master&service=github)](https://coveralls.io/github/Kflash/trolly?branch=master)

## Features

* Babel 6.x support
* Mocha-Chai-Sinon testing stack
* Support for ES2015 in the unit tests
* Unit tests that work in Node and in the browser
* Unit tests for older IE
* Unit tests for production mode
* Unit tests for development mode with auto-watch
* Export as ES5 & UMD
* Coverage report on the command line
* Flow comments
* Works both server and client side
* Karma
* Webpack
* Webpack server for development
* Eslint
* Execution environment ala React
* Production mode
* Development mode
* Pre-publishing to NPM
* NodeJS v. 4.x support
* NPM v. 3.3.6 support

## Installation

Download the package, and run this from the command line:

```
npm install 
```

## NPM tasks

* `npm run lint` - Lints the code
* `npm run dist` - Makes a distributable version
* `npm run flow` - flow comments
* `npm run prepublish` - prepublish to NPM
* `npm run test` - Runs the unit tests
* `npm run test-coverage` - Runs test coverage
* `npm run test-ie` - Runs unit tests for older IE
* `npm run test-dev` - Runs unit tests and auto-watch

## Webpack tasks

`webpack` - Build a non-mnified version of the code

## Customizing

This boilerplate is easily customizable. Add your dependencies to the package.json file, and adjsut the `webpack` section inside the `karma.config.js` after your own needs. 

Do not set anything inside the `webpack.config`. Everything are maintained by `karma`.

[trav_img]: https://api.travis-ci.org/Kflash/trolly.svg
[trav_site]: https://travis-ci.org/Kflash/trolly.svg?branch=master

