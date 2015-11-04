const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

const plugins = [
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		__VERSION__: JSON.stringify(pkg.version)
	})
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  );
}

module.exports = {
  entry: {
      main: './src'
    },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'trolly.js',
    libraryTarget: 'umd',
	library: 'trolly'
  },

  cache: true,
  debug: true,

  plugins: [
     new webpack.DefinePlugin({
      'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
	   preLoaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        }
      ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules)/
      }
    ]
  }
};
