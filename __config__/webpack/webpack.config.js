import webpack from 'webpack';
import path from 'path';

module.exports = {
    entry: path.join(__dirname, '../../src'),
    cache: true,
    debug: true,
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
            loader: 'babel'
        }]
    },
    plugins: []
};