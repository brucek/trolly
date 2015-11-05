var webpackConf = require('./webpack.config.js');

// Karma configuration

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'sinon-chai',
            'sinon',
            'chai',
            'mocha'
        ],

        // list of files / patterns to load in the browser
        files: [
            '__tests__/**/*.spec.js'
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '__tests__/**/*.spec.js': ['webpack', 'sourcemap']
        },

        webpack: {
            hot: false,
            test: true,
            devtool: 'inline-source-map',
            eslintrcPath: './_test.eslintrc',
            module: {
                preLoaders: [{
                    test: /\.js$/,
                    loader: 'isparta?{babel: {stage: 0}}',
                    exclude: ['__tests__', 'node_modules']
                }, {
                    test: /\.js$/,
                    loader: 'eslint',
                    exclude: ['node_modules'],
                }],
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /(node_modules)/
                }]
            },
            resolve: {
                modulesDirectories: [
                    'src',
                    'node_modules'
                ],
                extensions: ['', '.json', '.js']
            },
            plugins: [],
            webpackServer: {
                noInfo: true,
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
            }
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        coverageReporter: {
            reporters: [{
                type: 'text'
            }, {
                type: 'lcovonly',
                subdir: '.'
            }]
        },
        // web server port
        port: 9876,
        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 100000,
        browserNoActivityTimeout: 30000,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};