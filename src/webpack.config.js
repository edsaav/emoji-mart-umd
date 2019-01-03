var path = require('path')
var pack = require('../package.json')
var webpack = require('webpack')

module.exports = {
  entry: path.resolve('src/index.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    library: 'EmojiMartUMD',
    libraryTarget: 'umd',
  },

  optimization: {
    minimize: false
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve('src'),
          path.resolve('data'),
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline?removeSVGTagAttrs=false',
        include: [
          path.resolve('src/svgs'),
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js'],
  },

  plugins: [
    new webpack.DefinePlugin({
      EMOJI_DATASOURCE_VERSION: `'${pack.devDependencies['emoji-datasource']}'`,
    }),
  ],

  bail: true,
}
