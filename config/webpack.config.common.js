'use strict';
const config = require('./config')
const helpers              = require('./helpers');
const isDev                = process.env.NODE_ENV === 'development';

const webpackConfig = {
  publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
	configureWebpack: {
    entry: {
      polyfill: '@babel/polyfill',
      main: helpers.root('src', 'main'),
    },
		resolve: {
			extensions: ['.js', '.vue', '.json'],
			alias: {
        'vue$': isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
        '@': helpers.root('src'),
        '@sgt': helpers.root('src/sagt'),
			}
    },
  },
  transpileDependencies: [
    'vuetify'
  ]
};

module.exports = webpackConfig;