import React from 'react'
import {Route, Switch} from 'react-router'
import Private from '../components/Private'

const renderView = (route, props) => {

  if (route.authenticated === false) {
    return (<route.component {...props} route={route}/>)
  }

  return (
    <Private><route.component {...props} route={route}/></Private>
  )
}

const renderRoutes = (routes) => {
  return (
    <Switch>
      {routes.map((route, key) => (<Route key={key} path={route.path} exact={route.exact} strict={route.strict} render={props => renderView(route, props)}/>))}
    </Switch>
  )
}

export default renderRoutes
