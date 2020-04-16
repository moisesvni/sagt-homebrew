'use strict';
const merge                = require('webpack-merge');
const commonConfig         = require('./webpack.config.common');
const config               = require('./config')

const webpackConfig = merge(commonConfig, {
    configureWebpack: {
        devtool: 'cheap-module-eval-source-map',
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all'
            }
        }
    },
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
        port: config.dev.port,
        stats: {
            normal: true
        }
    }
});

module.exports = webpackConfig;