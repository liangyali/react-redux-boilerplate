import React from 'react'
import {Route, Switch} from 'react-router'
import AuthenticatedRoute from '../components/AuthenticatedRoute'

const renderRoute = (route, key) => {

  if (route.authenticated && route.authenticated === true) {
    return (<AuthenticatedRoute key={key} component={route.component} route={route} roles={route.roles || []} permission={route.permissions || []}/>)
  }

  return (
    <Route key={key} path={route.path} exact={route.exact} strict={route.strict} render={(props) => (<route.component {...props} route={route}/>)}/>
  )
}

const renderRoutes = (routes) => {
  console.log('hello')
  return (
    <Switch>
      {routes.map((route, i) => renderRoute(route, i))}
    </Switch>
  )
}

export default renderRoutes
