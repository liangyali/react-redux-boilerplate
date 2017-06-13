import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router'

export default class AuthenticatedRoute extends Component {

  static contextTypes = {
    currentUser: PropTypes.object,
    authed: PropTypes.object
  }

  render() {
    const {
      component: WarppedComponent,
      ...rest
    } = this.props

    if (!this.context.authed.authed) {
      return (<Redirect to={'/signin'}/>)
    }

    return (
      <Route render={props => (<WarppedComponent {...rest}/>)}/>
    )
  }
}
