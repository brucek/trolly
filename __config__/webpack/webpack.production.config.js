// Webpack config for creating the production bundle.
const webpack = require('webpack');
const path = require('path');
const distDir = path.join(__dirname, '../../dist');
const sourceDir = path.join(__dirname, '../../src');

module.exports = {
    entry: sourceDir,
    cache: false,
    debug: false,
    devtool: false,
    hot: false,
    build: true,
    output: {
        path: distDir,
        filename: 'trolly.min.js',
        libraryTarget: 'umd',
        library: 'trolly'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: ['node_modules'],
            include: sourceDir,
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
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};