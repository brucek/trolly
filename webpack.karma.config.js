const webpack = require('webpack');
const path = require('path');

module.exports = {
    cache: true,
	hot:false,
    output: {},
    entry: {},
	devtool: 'inline-source-map',
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