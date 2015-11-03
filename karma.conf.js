const webpackConfig = require('./webpack.config.js');
const path = require('path');

/**
 * The entry point from the referenced Webpack configuration has to be removed or tests 
 * will fail in weird and inscrutable ways.
 */
webpackConfig.entry = {}; // define an empty entry object (null won't work)

// Karma configuration

module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',
        // frameworks to use
        frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
        // list of files / patterns to load in the browser
        files: [
            '__tests__/**/*.js'
        ],
        // specify the entry point in Karma
        preprocessors: {
        './dist/trolly.js': ['webpack'],
		 '__tests__/**/*.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig, //
        webpackMiddleware: {
            quiet: false,
            noInfo: true,
            debug:true, // turn it off if you don't want it!
			contentBase: path.resolve('__tests__/'),
			devtool: 'source-map',
            stats: {
                assets: false,
                hot: true,
                colors: true,
                version: false,
                hash: false,
                timings: false,
                chunks: false,
                chunkModules: false
            }
        },
        exclude: [],
        // web server port
        port: 8080,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,
        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS'],
        reporters: ['mocha', 'coverage'],
        browserNoActivityTimeout: 30000,
        coverageReporter: {
            type: 'text'
        },
        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 100000,
        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};