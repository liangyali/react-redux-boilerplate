import express from 'express'
import path from 'path'
import webpackDev from './lib/webpack-dev'

// create express app
const app = express()

// dev环境使用webpack-dev-middleware
if (app.settings.env === 'development') {
  webpackDev(app)
  app.use(express.static('public'))
}

app.use(express.static('dist'))

app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})

app.listen(9000)
