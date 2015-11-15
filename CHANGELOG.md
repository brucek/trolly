# Changelog

## 0.5.2

- BC! Changed how unit tests works. Unit tests are merged into one folder - `./tests`. Unit tests for browser: `.browser.js`.  Unit tests for server: `.server.js`.
- BC! Unit tests - `.common.js` runs both for Karma and Mocha.
- BC! Coverage report for common unit tests - available with Karma.  `npm run test:browser`. 
- BC! Removed Isparta because of Babel 6.x issues
- BC! Mocha have got it's own configuration file. Located in `./config/mocha.opts`. 
- BC! Eslint got more options. Check out the readme file.
- General cleanup
