const webpack = require('webpack');
const path = require('path');

module.exports = {
    cache: true,
    output: {
        path: path.join(__dirname, 'dist'),
    },
    module: {
        preLoaders: [{
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
                cacheDirectory: true
            }
        }]
    },
    resolve: {
        root: path.join(__dirname, 'src'),
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx'],
    },
    plugins: []
};