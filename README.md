# A isomorphic boilerplate written in ES2015 for Node and the browser.

[![Travis Status][trav_img]][trav_site]
[![Coverage Status](https://coveralls.io/repos/Kflash/trolly/badge.svg?branch=master&service=github)](https://coveralls.io/github/Kflash/trolly?branch=master)
[![Dependency Status](https://david-dm.org/kflash/trolly.svg)](https://david-dm.org/kflash/trolly)

## Features

* Babel for ES6 and ES7
* Universal unit tests that work in Node and in the browser
* Support for ES2015 in the unit tests
* Webpack for bundling
* Webpack Dev Middleware
* Webpack Hot Middleware
* Eslint to maintain a consistent code style
* UMD pattern, which provides compatibility with the most popular script loaders, to the output.
* Coverage report
* Support NodeJS v. 4.x LTS and the *stable* branch ( v.5x)

## Basic guide

Write your code in src. The entry file is what you named the project in kebab case (although the filename can be changed).

Run `webpack` to build a non-minified version of the library.

Put your unit tests in the `__tests__` folder. The npm test command runs the tests using Node. 

## Workflow

* `npm run lint` - Lint the source and unit tests
* `npm run build` - Build a production version of the library
* `npm run postbuild` - Build a development version of the library
* `npm run test:browser` - Runs the unit tests with karma and Chrome
* `npm run karma:server` - Runs the unit tests with karma and PhantomJS
* `npm run karma:watch` - Runs the unit tests with karma tests and continuously run the unit tests as you make changes to the source and test files themselves
* `npm run mocha:browser` - Runs the unit tests together with the spec runner ( open port 8080 in the browser)
* `npm run mocha:server` - Runs the unit tests on the server
* `npm run mocha:watch` - Runs the unit tests on the server, and continuously run the unit tests as you make changes to the source and test files themselves
* `npm run coverage` - Generate a coverage report
* `npm run packages` - Shows all installed dependencies
* `npm run package:purge` - Remove all dependencies
* `npm run package:reinstall` - Reinstall all dependencies
* `npm run package:updates` - Generate a list overview for newer dependencies
* `npm run package:upgrade` - Automaticly upgrade all dependencies and update package.json

## Unit tests

This project uses Mocha to run your unit tests, it uses Karma as the test runner, it enables the feature that you are able to render your tests to the browser (e.g: Firefox, Chrome etc.).

To run the tests in the project, just simply `run npm karma:browser`. If you have Chrome installed, it will be automatically launched as a test service for you. PhantomJs are used to run karma server side. Just simply `run npm karma:server`

To keep watching your test suites that you are working on, simply do `run npm karma:watch` for client side. Or `run npm mocha:server` to keep watching the unit tests on the server.

## Browser Tests

The browser spec runner can be opened in a browser to run your tests. For it to work, you must first run `npm run mocha:server`, and
then open port 8080 in your browser. Example: `localhost::8080` 

## Coveralls

This library is set up to integrate with Coveralls, and will automaticly publish your coverage report if you have created an account for your repo at **coveralls.io**

## Linting

This boilerplate uses ESLint to lint your source. To change the rules, edit the .eslintrc file in the root directory, respectively.

## Installation

Download the package, and run this from the command line:

```
npm install 
```

## Customizing

This boilerplate is easily customizable. Add your dependencies to the package.json file, and adjsut the `webpack` section inside the `karma.config.js` after your own needs. 

Do not set anything inside the `webpack.config`. Everything are maintained by `karma`.

[trav_img]: https://api.travis-ci.org/Kflash/trolly.svg
[trav_site]: https://travis-ci.org/Kflash/trolly.svg?branch=master

## FAQ

###Help! It doesn't work on Windows! What do I do?
Just take a cup of coffee and relax. It works!

### What's the browser compatibility?
As a rule of thumb, this transpiler works best in IE9+. You can support IE8 by limiting yourself to a subset of ES2015 features. The Babel caveats page does an excellent job at explaining the nitty gritty details of supporting legacy browsers.



