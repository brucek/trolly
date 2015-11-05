const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src'),
    cache: true,
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'trolly.min.js',
        libraryTarget: 'umd',
        library: 'trolly'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: ['node_modules'],
            include: path.join(__dirname, 'src'),
            loaders: ['babel-loader', 'eslint-loader']
        }]
    },
    plugins: [
        // optimizations
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
				screw_ie8: true
            },
            minimize: true
        }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
    ]
};