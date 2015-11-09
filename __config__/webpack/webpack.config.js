// Webpack config for development
import webpack from 'webpack';
import path from 'path';
import pkg from '../../package.json';
import banner from '../banner';

module.exports = {
      entry: path.join(__dirname, '../../src'),
    cache: true,
    debug: true,
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.BannerPlugin(banner),
        new webpack.DefinePlugin({
            '__DEV__': true,
            'process.env.NODE_ENV': JSON.stringify('development'),
			 VERSION: JSON.stringify(pkg.version)
        })
    ]
};