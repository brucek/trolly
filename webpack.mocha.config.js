const path = require('path');
const webpack = require('webpack');
const testDirectory = path.join(__dirname, '__tests__');

module.exports = {
	entry: 'mocha!' + testDirectory + '/bootstrap.js',
	cache: true,
	debug: true,
	devtool: 'source-map',
	output: {
		path:  testDirectory,
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
	},
	devServer: {
		contentBase: testDirectory,
		noInfo: true,
		hot: true,
		inline: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: [path.join(__dirname, 'src'), testDirectory],
				exclude: ['node_modules'],
				loader: 'babel-loader'
			}
		]
	},
	plugins: []
};
