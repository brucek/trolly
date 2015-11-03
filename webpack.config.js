const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');
const PROD = JSON.parse(process.env.PROD_DEV || '0');

 /**
   * For production deployments, we want minified and optimized JS.
   */
const plugins = [
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
  disableSha1: false, //defaults to false
  disableLogging: false, //defaults to false
  entry: path.join(__dirname, '/src'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'trolly.js',
    library: 'trolly',
    libraryTarget: 'umd',
	publicPath: 'http://localhost:8080/'
  },
  module: {
                preLoaders: [{
                    test: /\.jsx?$/,
                    include: path.resolve('__tests__/'),
                    loader: 'babel',
                    query: {
                        cacheDirectory: true,
                       // presets: ['es2015'] // Babel 6.x
                    }
                }, {
                    test: /\.jsx?$/,
                    include: path.resolve('src/'),
                    exclude: /(__tests__)/,
                    loader: 'isparta?{babel: {stage: 0}}',
                }],
                loaders: [{
                    test: /\.js$|.jsx$/,
                    exclude: /node_modules/,
                    loader: 'babel',
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015'] // Babel 6.x
                    }
                }]
            },
            resolve: {
                root: [__dirname],
                modulesDirectories: ['node_modules', 'src'],
                extensions: ['', '.js', '.jsx']
            },
	plugins: plugins
}