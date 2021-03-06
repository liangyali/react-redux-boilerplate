const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const ManifestPlugin = require('webpack-manifest-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const extractCSS = new ExtractTextPlugin('css/styles.[hash:8].css')

const webpackConfig = {
  entry: {
    app: [
      './src/index.jsx'
    ],
    vender: [
      'react',
      'react-dom',
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
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    strictExportPresence: true,
    rules: [{
      test: /\.(js|jsx)$/,
      use: [{
        loader: 'babel-loader'
      }],
      include: [
        path.resolve(__dirname, 'src')
      ]
    }, {
      loader: 'file-loader',
      exclude: [
        /\.html$/,
        /\.(js|jsx)$/,
        /\.css$/,
        /\.less$/,
        /\.json$/,
        /\.bmp$/,
        /\.gif$/,
        /\.jpe?g$/,
        /\.png$/,
      ],
      options: {
        name: 'media/[name].[hash:8].[ext]'
      }
    }, {
      loader: 'url-loader',
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      options: {
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]',
      }
    }, {
      test: /\.(css|less)$/,
      loader: extractCSS.extract({
        fallback: 'style-loader',
        use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              minimize: true,
              localIdentName: '[name]__[hash:base64:5]'
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss', //
              plugins: () => [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                }),
              ],
            },
          },
          'less-loader'
        ],
      })
      // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
    }, ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // 开启全局的模块热替换(HMR)
    new webpack.HotModuleReplacementPlugin(),
    // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vender',
      filename: 'js/vender.[hash:8].js'
    }),
    // Minify the code.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    }),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/templates/index.html',
      alwaysWriteToDisk: true,
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
      }
    }),
    extractCSS,
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],

  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
}

webpackConfig.plugins.push(new BundleAnalyzerPlugin())
// enable Analyzer
if (process.env.Analyzer && process.env.Analyzer === true) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
