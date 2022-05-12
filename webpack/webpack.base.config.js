/***
 *  BASE WEBPACK CONFIGURATION
 */
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const path = require('path');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = (options) =>
    smp.wrap({
    mode: options.mode,
    entry: path.resolve(process.cwd(), 'src/index.ts'),
    output: {
      filename: "[name].[chunkhash].js",
      path: path.resolve(process.cwd(), 'build'),
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: options.plugins,
    optimization: {
      minimizer: [
        new ESBuildMinifyPlugin({
          target: 'es2015',
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          use: {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
              target: 'es2015',
            },
          },
        },
      ],
    },
  });