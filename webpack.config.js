var path = require('path');
var webpack = require('webpack');

module.exports = {
    cache: true,
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'trolly.js',
        library: 'trolly',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                // https://github.com/babel/babel-loader#options
                cacheDirectory: true,
                presets: ['es2015']
            }
        }]
    }
}