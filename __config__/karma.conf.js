import webpackConfig from '../webpack.config';

module.exports = function(config) {
    config.set({
        logLevel: config.LOG_INFO,
        logColors: true,
        files: [
            // Each file acts as entry point for the webpack configuration
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            '__tests__/client/**/*.spec.js'
        ],
        frameworks: ['mocha', 'sinon-chai'],
        preprocessors: {
            '__tests__/client/**/*.spec.js': ['webpack']
        },
        webpack: {
            module: webpackConfig.module
        },
        webpackMiddleware: {
            noInfo: true
        },
        plugins: [
            'karma-sinon-chai',
            'karma-webpack',
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-spec-reporter'
        ],
        browsers: ['PhantomJS'],
        browserDisconnectTimeout: 10000,
        browserDisconnectTolerance: 2,
        browserNoActivityTimeout: 30000,
    });

    if (process.env.TRAVIS) {

        config.logLevel = config.LOG_DEBUG;
        // Karma (with socket.io 1.x) buffers by 50 and 50 tests can take a long time on IEs;-)
        config.browserNoActivityTimeout = 120000;

        // Debug logging into a file, that we print out at the end of the build.
        config.loggers.push({
            type: 'file',
            filename: 'logs/karma.log'
        });
    }
};