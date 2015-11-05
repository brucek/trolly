const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: 'mocha!' + path.join(__dirname, '__tests__'); + '/bootstrap.js',
	cache: true,
	debug: true,
	devtool: 'source-map',
	output: {
		path: testDir,
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
	},
	devServer: {
		contentBase: path.join(__dirname, '__tests__');,
		noInfo: true,
		hot: true,
		inline: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: [path.join(__dirname, 'src'), path.join(__dirname, '__tests__')],
				exclude: ['node_modules'],
				loader: 'babel-loader'
			}
		]
	},
	plugins: []
};
