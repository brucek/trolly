// Webpack config for development
import webpack from 'webpack';
import path from 'path';

module.exports = {
    cache: true,
    debug: true,
    hot:false,
    output: {},
	entry: {},
    module: {
		preLoaders: [{
            test: /\.jsx?$/,
            include: path.join(__dirname, '../src'),
            exclude: /(tests)/,
            loader: 'isparta',
        }],
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: []
};