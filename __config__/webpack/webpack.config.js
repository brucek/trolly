// Webpack config for development
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
            loader: 'babel',
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
        new webpack.DefinePlugin({
            '__DEV__': true,
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
};