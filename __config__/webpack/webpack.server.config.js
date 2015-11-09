const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

require('babel-core/register');

const webpackConfig = require('./webpack.config');

// First we fire up Webpack an pass in the configuration we
// created
const bundleStart = null;
const compiler = webpack(webpackConfig);

// We give notice in the terminal when it starts bundling and
// set the time it started
compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
});

// We also give notice when it is done compiling, including the
  // time it took. Nice to have
  compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms. The server are now running...');
  });

const bundler = new WebpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    // Configure hot replacement
    hot: true,
    // The rest is terminal configurations
    quiet: false,
    noInfo: true,
    stats: {
        colors: true
    }
    // We fire up the development server and give notice in the terminal
    // that we are starting the initial bundle
}).listen(8080, 'localhost', function(error) {

    if (error) {
        console.log(error);
    }
    console.log('Bundling project, please wait...');
});