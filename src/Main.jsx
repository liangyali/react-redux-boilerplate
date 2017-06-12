import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {renderRoutes} from 'react-router-config'

export default class Main extends Component {

  getChildContext() {
    return {routes: this.props.route.routes}
  }

  render() {
    const {route} = this.props
    return (
      <div>
        {renderRoutes(route.routes)}
      </div>
    )
  }
}

Main.childContextTypes = {
  routes: PropTypes.object
}
