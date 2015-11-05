const webpack = require('webpack');
const path = require('path');
const minimize = process.argv.indexOf('--no-minimize') === -1 ? true : false;
const plugins = [];

if (minimize) {

    plugins = [
        // optimizations
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            minimize: true
        })
    ]
}

module.exports = {
    entry: path.join(__dirname, 'src'),
    cache: true,
    debug: minimize ? false : true,
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: minimize ? 'trolly.min.js' : 'trolly.js',
        libraryTarget: 'umd',
        library: 'trolly',
        publicPath: 'http://localhost:8080/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: ['node_modules'],
            include: path.join(__dirname, 'src'),
            loaders: ['babel-loader', 'eslint-loader']
        }]
    },
    plugins: plugins
};