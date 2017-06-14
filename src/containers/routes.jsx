import React from 'react'
import {Redirect} from 'react-router'
import Main from './Main'
import Accounts from './Accounts'
import Login from './Login'
import Dashboard from './Dashboard'
import Inbox from './Inbox'
import Profile from './Profile'

export default[
  {
    component : Main,
    routes : [
      {
        path: '/',
        exact: true,
        component: () => (<Redirect to='/dashboard'/>)
      }, {
        path: '/dashboard',
        breadcumbName: '系统面板',
        component: Dashboard
      }, {
        path: '/inbox',
        breadcumbName: '站内信',
        component: Inbox
      }, {
        path: '/profile',
        breadcumbName: '个人中心',
        component: Profile
      }, {
        path: '/login',
        component: Login
      },
      Accounts.createRoutes('/accounts')
    ]
  }
]
