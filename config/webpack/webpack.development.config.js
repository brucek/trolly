require('babel-core/register');

// Webpack config for development
import webpack from 'webpack';
import path from 'path';
import pkg from '../../package.json';
import banner from '../banner';
import WebpackNotifierPlugin from 'webpack-notifier';
import config from '../config';

module.exports = {
    // entry points 
    entry: config.sourceDir,
    cache: true,
    debug: true,
    output: {
        path: config.distDir,
        filename: config.dev,
        libraryTarget: 'umd',
        library: config._app
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }],

        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        new WebpackNotifierPlugin({
            alwaysNotify: true
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.BannerPlugin(banner),
        new webpack.DefinePlugin({
            '__DEV__': true,
            'process.env.NODE_ENV': JSON.stringify('development'),
            VERSION: JSON.stringify(pkg.version)
        })
    ],
    eslint: {
        configFile: config.eslintDir
    }
};