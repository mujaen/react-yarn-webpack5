/***
 *  PRODUCTION WEBPACK CONFIGURATION
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = require('./webpack.base.config')({
  mode: 'production',
  entry: [
    path.join(process.cwd(), 'src/app.tsx'),
  ],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      template: './src/index.html',
    }),
  ],
});
