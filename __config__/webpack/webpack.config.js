// Webpack config for development
import webpack from 'webpack';
import path from 'path';
import pkg from '../../package.json';
import banner from '../banner';

module.exports = {
    devtool: 'eval',
    cache: true,
    debug: true,
    entry: [
	path.join(__dirname, '../../src/index')
	],
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
            include: path.join(__dirname, '../../src'),
            query: {
                env: {
                    development: {}
                }
            }
        }]
    },
    resolve: {
        modulesDirectories: [
            'src',
            'node_modules'
        ],
        extensions: ['', '.json', '.js']
    },
    plugins: [
	    new webpack.BannerPlugin(banner),
        new webpack.DefinePlugin({
            '__DEV__': true,
            'process.env.NODE_ENV': JSON.stringify('development'),
			 VERSION: JSON.stringify(pkg.version)
        })
    ]
};