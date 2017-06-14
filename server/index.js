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

// 模拟登陆token
app.post('/api/token', (req, res) => {
  setTimeout(() => {
    res.json({
      jwt: 'mock token'
    })
  }, 1000)
})

app.get('/api/users/current', (req, res) => {
  res.json({
    name: '',
    email: 'heloo@test.com',
    roles: ['admin'],
    permissions: ['users.manager', 'roles.manager']
  })
})

app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})


app.listen(8000)
