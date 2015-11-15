// Webpack config for creating the production bundle.
const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const DIST_DIR = path.join(__dirname, '../../dist');
const SRC_DIR = path.join(__dirname, '../../src');
const PKG_LOCATION = path.join(__dirname, '../../PKG_LOCATION.json');

module.exports = {
    entry: SRC_DIR,
    cache: false,
    debug: false,
    devtool: false,
    hot: false,
    build: true,
    output: {
        path: DIST_DIR,
        filename: 'trolly.min.js',
        libraryTarget: 'umd',
        library: 'trolly'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: ['node_modules'],
            include: SRC_DIR,
            loader: 'babel-loader'
        }]
    },
    progress: true,
    resolve: {
        modulesDirectories: [
            'src',
            'node_modules'
        ],
        extensions: ['', '.json', '.js']
    },
    plugins: [
	    // Notifier
        new WebpackNotifierPlugin({title: 'Trolly', alwaysNotify: true} ),
		// optimizations
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                'unused': true,
                'dead_code': true,
                warnings: false,
                screw_ie8: true
            }
        }),
        new webpack.DefinePlugin({
            '__DEV__': false,
            'process.env.NODE_ENV': JSON.stringify('production'),
            VERSION: JSON.stringify(PKG_LOCATION.version)
        })
    ]
};