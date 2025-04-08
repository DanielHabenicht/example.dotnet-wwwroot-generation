const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outFolder = path.resolve(__dirname, '..', 'wwwroot');

module.exports = {
  entry: {
    shared: {
      import: './index.js',
    },
    discovery: {
      import: './discovery.js',
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: outFolder,
    clean: false,
    libraryTarget: 'var',
    library: 'FederationGateway',
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: 'postcss-loader', // Run postcss actions
            options: {
              postcssOptions: {
                plugins: function () {
                  // postcss plugins, can be exported to postcss.config.js
                  return [require('autoprefixer')];
                },
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
