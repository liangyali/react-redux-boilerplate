import React from 'react'
import Main from './Main'
import Accounts from './containers/Accounts'

const About = ({route}) => (
  <div>Abou1t{route.path}</div>
)

const Home = ({route}) => (
  <div>Home{route.path}</div>
)

const NotFound = ({route}) => (
  <div>NotFound{route.path}</div>
)

console.log(Main)

export default[
  {
    component : Main,
    routes : [
      {
        path: '/',
        exact: true,
        breadcumbName: '首页',
        component: Home
      }, {
        path: '/about',
        breadcumbName: '关于我们',
        component: About
      },
      Accounts.createRoutes('/accounts'), {
        component: NotFound
      }
    ]
  }
]
