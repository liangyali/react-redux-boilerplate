const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false',
      'webpack/hot/only-dev-server',
      './src/index.jsx'
    ],
    vender: [
      'react',
      'react-dom',
      'axios'
    ]
  },
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    path: path.resolve(__dirname, 'dist/'),
    pathinfo: true,
    publicPath: '/'
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts'],
  },
  module: {
    strictExportPresence: true,
    rules: [{
      test: /\.(js|jsx)$/,
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: true,
          presets: [require.resolve('babel-preset-react-app')],
          cacheDirectory: true
        }
      }],
      include: [
        path.resolve(__dirname, 'src')
      ]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader?modules']
    }, {
      test: /\.less$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]__[hash:base64:5]'
          }
        }, {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
            plugins: () => [
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
              }),
            ],
          },
        },
        "less-loader"
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    // 开启全局的模块热替换(HMR)
    new webpack.HotModuleReplacementPlugin(),
    // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vender',
      filename: 'js/vender.[hash:8].js'
    }),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/templates/index.html',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin()
  ],

  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
}
