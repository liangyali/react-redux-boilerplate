import express from 'express'
import path from 'path'
import webpackDev from './lib/webpack-dev'

// create express app
const app = express()

// dev环境使用webpack-dev-middleware
if (app.settings.env === 'development') {
  webpackDev(app)
}

app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'))
})

app.listen(9000)
