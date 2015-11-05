const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src'),
    cache: false,
	debug:false,
    devtool: false,
    hot:false,
	build:true,
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
            loader: 'babel-loader'
        }]
    },
    plugins: [
        // optimizations
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
			output: {
			   comments:false
			},
            compress: {
                warnings: false,
				screw_ie8: true
            }
        }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
    ]
};