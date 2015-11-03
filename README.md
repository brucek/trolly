# A isomorphic boilerplate written in ES2015 for Node and the browser.

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

## Basic guide

Write your code in src. The entry file is what you named the project in kebab case (although the filename can be changed).

Run `webpack` to build a non-minified version of the library.

Put your unit tests in the `__tests__` folder. The npm test command runs the tests using Node. 

## npm Scripts

* `npm run lint` - Lint the source and unit tests
* `npm run dist` - Build a distributable version of the library
* `npm run flow` - Flow comments
* `npm run prepublish` - prepublish to NPM
* `npm run test` - Runs the unit tests
* `npm run test-coverage` - Generate a coverage report
* `npm run test-ie` - Runs the unit tests for older IE
* `npm run test-dev` - Runs the unit tests and continuously run the unit tests as you make changes to the source and test files themselves

## Installation

Download the package, and run this from the command line:

```
npm install 
```

## Unit tests

Units tests are done in the background and visible in the cli together with the generated coverage report.

## Linting

This boilerplate uses ESLint to lint your source. To change the rules, edit the .eslintrc file in the root directory, respectively.

## Customizing

This boilerplate is easily customizable. Add your dependencies to the package.json file, and adjsut the `webpack` section inside the `karma.config.js` after your own needs. 

Do not set anything inside the `webpack.config`. Everything are maintained by `karma`.

[trav_img]: https://api.travis-ci.org/Kflash/trolly.svg
[trav_site]: https://travis-ci.org/Kflash/trolly.svg?branch=master

