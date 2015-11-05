const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src'),
    cache: true,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'trolly.js',
        libraryTarget: 'umd',
        library: 'trolly'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: ['node_modules'],
            include: path.join(__dirname, 'src'),
            loaders: ['babel-loader', 'eslint-loader']
        }]
    },
    plugins: []
};