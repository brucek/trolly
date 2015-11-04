const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack({
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/only-dev-server',
    './src'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules)/
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'http://localhost:5001'
  }
}), {
  publicPath: 'http://localhost:5000/assets/',
  hot: true,
  color:true,
  eslint: {
      configFile: path.join(__dirname, './_dev.eslintrc'),
    },
  headers: { 'Access-Control-Allow-Origin': '*' },
  historyApiFallback: true
}).listen(5000, 'localhost', function(error) {
  if (error) {
    console.log(error);
  }

  console.log('Listening at localhost:5000');
});
