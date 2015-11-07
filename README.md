# Isomorphic boilerplate written in ES2015 for Node and the browser.

[![Travis Status][trav_img]][trav_site]
[![Coverage Status](https://coveralls.io/repos/Kflash/trolly/badge.svg?branch=master&service=github)](https://coveralls.io/github/Kflash/trolly?branch=master)
[![Dependency Status](https://david-dm.org/kflash/trolly.svg)](https://david-dm.org/kflash/trolly)

> A boilerplate for creating isomorphic libraries using Babel, Webpack, Mocha, Chai, Karma, Isparta, and ESLint

## Features

* Babel for ES6 and ES7
* Universal unit tests that work in Node and in the browser
* Support for ES2015 in the unit tests
* Webpack for bundling
* Eslint to maintain a consistent code style
* UMD pattern, which provides compatibility with the most popular script loaders, to the output.
* Isparta for coverage report
* Node >= 4.x

## Basic guide

Write your code in src. The entry file is what you named the project in kebab case (although the filename can be changed).

Run `webpack` to build a non-minified version of the library.

Put your unit tests in the `__tests__` folder. The npm test command runs the tests using Node. 

## Workflow

* `npm run build` - Build task that generates minified scripts
* `npm run precommit` - Run the unit tests,, and generate a minified script
* `npm run clean` - Remove the `dist` folder
* `npm run lint` - Lint the source
* `npm run lint:tests` - Lint the unit tests
* `npm run clean` - Remove the coverage report and the *dist* folder
* `npm run test` - Runs the unit tests with karma and Chrome once
* `npm run test:browser` - Runs the unit tests for browser once
* `npm run test:server` - Runs the unit tests on the server once
* `npm run watch` - Run unit tests & watch files for changes
* `npm run coveralls` - Run Isparta, a code coverage tool;
* `npm run packages` - Shows all installed dependencies
* `npm run package:purge` - Remove all dependencies
* `npm run package:reinstall` - Reinstall all dependencies
* `npm run package:updates` - Generate a list overview for newer dependencies
* `npm run package:upgrade` - Automaticly upgrade all dependencies and update package.json

## Unit tests

This project uses Mocha to run your unit tests, it uses Karma as the test runner, it enables the feature that you are able to render your tests to the browser (e.g: Firefox, Chrome etc.).

To run the tests in the project, just simply `run npm test:browser`. 

To keep watching your test suites that you are working on, simply do `run npm test:watch`.

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

This boilerplate is easily customizable. Add your dependencies to the package.json file, and modify either the webpack config files or the karma files itself. 

For the server side unit tests with mocha, you may want to install jsdom etc. This can be done if you modify the `bootstrap.js` file located inside the `__setup__ folder`

## FAQ

###Help! It doesn't work on Windows! What do I do?
Just take a cup of coffee and relax. It works!

### What's the browser compatibility?
As a rule of thumb, this transpiler works best in IE9+. You can support IE8 by limiting yourself to a subset of ES2015 features. The Babel caveats page does an excellent job at explaining the nitty gritty details of supporting legacy browsers.

## License
MIT © [Kenny Flashlight](https://github.com/kflash)

[trav_img]: https://api.travis-ci.org/Kflash/trolly.svg
[trav_site]: https://travis-ci.org/Kflash/trolly.svg?branch=master

