// Webpack config for development
import webpack from 'webpack';
import path from 'path';
import pkg from '../../package.json';
import banner from '../banner';

module.exports = {
    // entry points 
    entry: path.join(__dirname, '../../src'),
    cache: true,
    debug: true,
    // more options here: http://webpack.github.io/docs/configuration.html#devtool
    devtool: 'eval',
    output: {
        path: path.join(__dirname, '../../dist'),
        filename: 'trolly.js',
        libraryTarget: 'umd',
        library: 'trolly'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: ['node_modules'],
            loader: 'babel',
            query: {
                env: {
                    development: {}
                }
            }
        }]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.BannerPlugin(banner),
        new webpack.DefinePlugin({
            '__DEV__': true,
            'process.env.NODE_ENV': JSON.stringify('development'),
            VERSION: JSON.stringify(pkg.version)
        })
    ]
};