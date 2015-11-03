var path = require('path');

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
        // add webpack as preprocessor
        preprocessors: {
            '__tests__/**/*.js': ['webpack']
        },
        webpack: {
            disableSha1: false, //defaults to false
            disableLogging: false, //defaults to false
            cache: true,
            module: {
                preLoaders: [{
                    test: /\.jsx?$/,
                    include: path.resolve('__tests__/'),
                    loader: 'babel',
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015'] // Babel 6.x
                    }
                }, {
                    test: /\.jsx?$/,
                    include: path.resolve('src/'),
                    exclude: /(__tests__)/,
                    loader: 'isparta?{babel: {stage: 0}}',
                }],
                loaders: [{
                    test: /\.js$|.jsx$/,
                    exclude: /node_modules/,
                    loader: 'babel',
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015'] // Babel 6.x
                    }
                }]
            },
            resolve: {
                root: [__dirname],
                modulesDirectories: ['node_modules', 'src'],
                extensions: ['', '.js', '.jsx']
            },
            plugins: []
        },
        webpackServer: {
            // webpack-dev-server configuration
            // webpack-dev-middleware configuration
            quiet: false,
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
        // List plugins explicitly, since autoloading karma-webpack
        // won't work here        
        plugins: [
            'karma-coverage',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-phantomjs-launcher',
            'karma-phantomjs-shim',
            'karma-sinon-chai',
            'karma-webpack'
        ],
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