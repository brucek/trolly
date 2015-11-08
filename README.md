# Isomorphic boilerplate written in ES2015 for Node and the browser.

[![Travis Status][trav_img]][trav_site]
[![devDependency Status](https://david-dm.org/kflash/trolly/dev-status.svg)](https://david-dm.org/kflash/trolly#info=devDependencies)
[![Dependency Status](https://david-dm.org/kflash/trolly.svg)](https://david-dm.org/kflash/trolly)

> A starter kit to get you up and running with a bunch of awesome new front-end technologies using Babel, Webpack, Mocha, Chai, Karma, Isparta, and ESLint without any framework dependencies.

## Requirements

Node `^4.0.0` or `^5.0.0`.

## Features

* [ES6 with Babel](http://babeljs.io/) for ES6 and ES7
* Universal unit tests that work in Node and in the browser
* Support for ES2015 in the unit tests
* [Webpack](https://webpack.github.io/) for bundling
* [Eslint](http://eslint.org/) to maintain a consistent code style
* UMD pattern, which provides compatibility with the most popular script loaders, to the output.
* [Isparta](https://www.npmjs.com/package/isparta) for coverage report
* Node >= 4.x
* iojs >= 3.x

## Getting Started

Just clone the repo and install the necessary node modules:
```js
$ git clone https://github.com/kflash/trolly.git trolly
$ cd trolly
$ npm install                   # Install Node modules listed in ./package.json
$ npm webpack                   # Build a non-minified version of the library
```

## Usage

* `npm run build` - Build task that generates minified scripts
* `npm run precommit` - Run the unit tests,, and generate a minified script
* `npm run clean` - Remove the `dist` folder
* `npm run lint` - Lint the source
* `npm run lint:tests` - Lint the unit tests
* `npm run clean` - Remove the coverage report and the *dist* folder
* `npm run test` - Runs unit tests for both server and the browser
* `npm run test:browser` - Runs the unit tests for browser / client
* `npm run test:server` - Runs the unit tests on the server
* `npm run watch` - Run all unit tests & watch files for changes
* `npm run coveralls` - Run Isparta, a code coverage tool;
* `npm run packages` - Shows all installed dependencies
* `npm run package:purge` - Remove all dependencies
* `npm run package:reinstall` - Reinstall all dependencies
* `npm run package:updates` - shows a list over dependencies with a higher version number then the current one - if any 
* `npm run package:upgrade` - Automaticly upgrade all dependencies and update package.json

## Unit tests

This project uses Mocha to run your unit tests, it uses Karma as the test runner, it enables the feature that you are able to render your tests to the browser (e.g: Firefox, Chrome etc.).

To add a unit test, simply create `.spec.js` file inside either the server or client folder in the `~/__tests__` main folder. Karma will pick up on these files automatically, and Mocha and Chai will be available within your unit tests without the need to import them.

To run the tests in the project, just simply `run npm test` for both server and client unit tests, or `run npm test:server`. for server or `run npm test:browser`. for browser tests. 

To keep watching your test suites that you are working on, simply do `run npm test:watch`.

## Coveralls

This library is set up to integrate with Coveralls, and will automaticly publish your coverage report if you have created an account for your repo at **coveralls.io**

## Linting

This boilerplate uses ESLint to lint your source. To change the rules, edit the .eslintrc file in the root directory, respectively.

```js
npm run lint // lints the source

npm run lint:tests // lints the unit tests
```

## Installation

Download the package, and run this from the command line:

```
npm install 
```

## Customizing

This boilerplate is easily customizable. Add your dependencies to the package.json file, and modify either the webpack config files or the karma files itself. 

For the server side unit tests with mocha, you may want to install jsdom etc. This can be done if you modify the `bootstrap.js` file located inside the `__setup__ folder`

## Known package issues

There are issues with `Babel v.6.x`, and `Webpack 2.0-Beta`. Latest Webpack release runs stable only on node.js `stable` branch. 

However. Trolly uses `Babel v. 6.x` without any issues, but not yet updated to `Webpack 2.0-Beta`. `PhantomJS 2.0` is still not supported.

Older node.js versions gives issues with some newer dependencies, so only `Node >= 4.x` and `iojs >= 3.x` are supported.

## FAQ

###Help! It doesn't work on Windows! What do I do?
Just take a cup of coffee and relax. It works!

###Is this boilerplate production ready?
Yes, for small applications. For larger applications you need to customize this after your own needs. Example setting up Babel to work with React, adding express etc.

## License
MIT © [Kenny Flashlight](https://github.com/kflash)

[trav_img]: https://api.travis-ci.org/Kflash/trolly.svg
[trav_site]: https://travis-ci.org/Kflash/trolly.svg?branch=master

