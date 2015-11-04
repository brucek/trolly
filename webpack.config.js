const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
      main: [
        './src'
      ]
    },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'trolly.js',
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
  module: {
	   preLoaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        }
      ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules)/
      }
    ]
  }
};
