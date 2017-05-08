import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpack from 'webpack'
import _debug from 'debug'

module.exports = (app) => {

  const webpackConfig = require(process.env.WEBPACK_CONFIG ? `../../../${process.env.WEBPACK_CONFIG}` : '../../../webpack.config.js')
  const compiler = webpack(webpackConfig)

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: false,
    compress: true,
    clientLogLevel: 'none',
    overlay: false,
    stats: {
      colors: true,
      hash: true,
      cached: true,
      chunkModules: false,
      cachedAssets: true
    }
  }))
  app.use(webpackHotMiddleware(compiler, {
    log: false,
    hot: true,
    path: "/__what",
    heartbeat: 2000
  }))
}
