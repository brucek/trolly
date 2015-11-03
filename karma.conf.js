var path = require('path');
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    files: [
      '__tests__/**/*.js'
    ],
    preprocessors: {
      '__tests__/**/*.js': ['webpack']
    },
    webpack: {
      cache: true,
      module: {
        preLoaders: [{
          test: /\.jsx?$/,
          include: path.resolve('__tests__/'),
          loader: 'babel',
		  query: {
        presets: ['es2015']
      }
        }, {
          test: /\.jsx?$/,
          include: path.resolve('src/'),
          exclude: /(__tests__)/,
          loader: 'isparta?{babel: {stage: 0}}',
        }],
        loaders: [{
          test: /\.js$|.jsx$/,
          exclude:  /node_modules/,
          loader: 'babel',
		  query: {
        presets: ['es2015']
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
      quiet: false,
      noInfo: true,
      stats: {
        assets: false,
        hot:true,
		colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      }
    },
    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: false,
    browsers: ['PhantomJS'],
    reporters: ['mocha', 'coverage'],
    browserNoActivityTimeout: 30000,
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
    captureTimeout: 100000,
    singleRun: true
  });
};
