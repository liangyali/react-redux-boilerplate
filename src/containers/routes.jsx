import React from 'react'
import {Redirect} from 'react-router'
import Main from './Main'
import Accounts from './Accounts'
import Signin from './Signin'
import Dashboard from './Dashboard'

const NotFound = ({route}) => (
  <div>NotFound</div>
)

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
        path: '/signin',
        component: Signin
      },
      Accounts.createRoutes('/accounts'), {
        component: NotFound
      }
    ]
  }
]
