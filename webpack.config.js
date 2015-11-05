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
        preLoaders: [{
            test: /\.jsx?$/,
            include: path.resolve('__tests__/'),
            loader: 'babel',
            query: {
                cacheDirectory: true,
            }
        }, {
            test: /\.jsx?$/,
            include: path.resolve('src/'),
            exclude: /(__tests__)/,
            loader: 'isparta?{babel: {stage: 0}}',
        }],
        loaders: [{
            test: /\.js$|.jsx$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                cacheDirectory: true,
            }
        }]
    },
    resolve: {
        root: [__dirname],
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js', '.jsx']
    },
    plugins: []
};