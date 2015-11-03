var path = require('path');
var pkg = require('./package.json');
var webpack = require('webpack');
var PROD = JSON.parse(process.env.PROD_DEV || '0');
var plugins = [
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		__VERSION__: JSON.stringify(pkg.version)
	})
];

if (PROD) {
	plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compressor: {
				screw_ie8: true,
				warnings: false
			}
		})
	);
}

module.exports = {
  cache: true,
  debug: PROD ? false: true,
  devtool: 'source-map',
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'trolly.js',
    library: 'trolly',
    libraryTarget: 'umd',
	publicPath: 'http://localhost:8080/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: ['node_modules'],
	    loader: 'babel-loader',
		query: {
		   presets: ['es2015']
      }
      }
    ]
  },
	plugins: plugins
}
