'use strict';
const helpers                  = require('./helpers');
const webpack                  = require('webpack');
const commonConfig             = require('./webpack.config.common');
const merge                    = require('webpack-merge');
const OptimizeCSSAssetsPlugin  = require('optimize-css-assets-webpack-plugin');
const MiniCSSExtractPlugin     = require('mini-css-extract-plugin');
const isProd                   = process.env.NODE_ENV === 'production';

const webpackConfig = merge(commonConfig, {
  configureWebpack: {
    devtool: '#source-map',
    mode: 'production',
    output: {
      path: helpers.root('dist'),
      filename: 'js/[hash].js',
      chunkFilename: 'js/[id].[hash].chunk.js'
    },
    optimization: {
      runtimeChunk: 'single',
      minimizer: [
        new OptimizeCSSAssetsPlugin({
          cssProcessorPluginOptions: {
            preset: [ 'default', { discardComments: { removeAll: true } } ],
          }
        })
      ],
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name (module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `npm.${packageName.replace('@', '')}`;
            }
          },
          styles: {
            test: /\.css$/,
            name: 'styles',
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    plugins: [
      new MiniCSSExtractPlugin({
          filename: 'css/[name].[hash].css',
          chunkFilename: 'css/[id].[hash].css'
      }),
      new webpack.HashedModuleIdsPlugin()
    ]
  }
});

if (isProd) {
  webpackConfig.configureWebpack.devtool = 'source-map';
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.configureWebpack.plugins.push(new BundleAnalyzerPlugin());
  
}

module.exports = webpackConfig;