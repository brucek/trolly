// Webpack config for development
import webpack from 'webpack';
import path from 'path';
import pkg from '../../package.json';
import banner from '../banner';

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
            exclude: /(__tests__)/,
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