# A isomorphic boilerplate written in ES2015 for Node and the browser.

[![Travis Status][trav_img]][trav_site]
[![Coverage Status](https://coveralls.io/repos/Kflash/trolly/badge.svg?branch=master&service=github)](https://coveralls.io/github/Kflash/trolly?branch=master)
[![Dependency Status](https://david-dm.org/kflash/trolly.svg)](https://david-dm.org/kflash/trolly)

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
* Support NodeJS v. 4.x LTS and the 'stable' branch ( v.5x)
* NPM v. 3.3.6 support

## Basic guide

Write your code in src. The entry file is what you named the project in kebab case (although the filename can be changed).

Run `webpack` to build a non-minified version of the library.

Put your unit tests in the `__tests__` folder. The npm test command runs the tests using Node. 

## npm Scripts

* `npm run lint` - Lint the source and unit tests
* `npm run build` - Build a distributable version of the library
* `npm run dev-server` - Run the development server ( port 5000)
* `npm run prebuild` - clean up the dist folder
* `npm run test` - Runs the unit tests with karma
* `npm run test:browser` - Runs the unit tests with karma and Chrome
* `npm run karma:server` - Runs the unit tests with karma and PhantomJS
* `npm run karma:watch` - Runs the unit tests with karma tests and continuously run the unit tests as you make changes to the source and test files themselves
* `npm run coverage` - Generate a coverage report
* `npm run spec` - Runs the unit tests with Mocha
* `npm run spec:watch` - Runs the unit tests with Mocha and continuously run the unit tests as you make changes to the source and test files themselves

* `npm run packages` - Shows all installed dependencies
* `npm run package:purge` - Remove all dependencies
* `npm run package:reinstall` - Reinstall all dependencies
* `npm run package:updates` - Generate a list overview for newer dependencies
* `npm run package:upgrade` - Automaticly upgrade all dependencies and update package.json


## Unit tests

Units tests are done in the background and visible in the cli together with the generated coverage report.

## Linting

This boilerplate uses ESLint to lint your source. To change the rules, edit the .eslintrc file in the root directory, respectively.

## Installation

Download the package, and run this from the command line:

```
npm install 
```

## Development server

Included with Trolly is a development server, but you need to customize it yourself to get it usefull.

Start the server with `npm run dev-server` and open port 5000.

All customizing has to be done in the `webpack-dev-server.js` file.

The `index.html` are located in the root.

## Customizing

This boilerplate is easily customizable. Add your dependencies to the package.json file, and adjsut the `webpack` section inside the `karma.config.js` after your own needs. 

Do not set anything inside the `webpack.config`. Everything are maintained by `karma`.

[trav_img]: https://api.travis-ci.org/Kflash/trolly.svg
[trav_site]: https://travis-ci.org/Kflash/trolly.svg?branch=master

