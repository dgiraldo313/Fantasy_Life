var webpack = require('webpack');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
      },
    ],
    // resolve: {
    //     alias: {
    //         jquery: 'jquery/src/jquery',
    //       },
    //   },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         $: 'jquery',
    //         jQuery: 'jquery',
    //       }),
    // ],
  },
};
