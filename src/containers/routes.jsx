import React from 'react'
import {Redirect} from 'react-router'
import Main from './Main'
import Accounts from './Accounts'
import Login from './Login'
import Dashboard from './Dashboard'
import Inbox from './Inbox'
import Profile from './Profile'
import Notfound from '../components/Notfound'

export default[
  {
    component : Main,
    authenticated:false,
    routes : [
      {
        path: '/',
        exact: true,
        authenticated:false,
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
        authenticated: false,
        component: Login
      },
      Accounts.createRoutes('/accounts'),
      {
        component:Notfound,
        authenticated: false
      }
    ]
  }
]
