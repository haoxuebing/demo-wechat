// This is the webpack config used for unit tests.

var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')
var path = require('path');

var webpackConfig = merge(baseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    rules: utils.styleLoaders()
  },
  devtool: '#inline-source-map',
  resolve: {
    alias: Object.assign({}, baseConfig.resolve.alias, {
      unit: path.resolve('.', 'test/unit')
    })
  },
  resolveLoader: {
    alias: {
      // necessary to to make lang="scss" work in test when using vue-loader's ?inject option 
      // see discussion at https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader'
    }
  },
  plugins: baseConfig.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env')
    })
  ])
})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
