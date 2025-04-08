const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  output: {
    sourceMapFilename: '[name].bundle.map[query][id][fullhash][chunkhash]',
  },
});
