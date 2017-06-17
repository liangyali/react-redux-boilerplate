import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router'

export default class Private extends Component {

  static contextTypes = {
    authed: PropTypes.object,
    authedActions: PropTypes.object,
    location:PropTypes.object
  }

  /**
 * 登陆跳转界面
 * @type {String}
 */
  static LOGIN_URL = '/login'

  render() {

    //如果用户没有登陆进行跳转
    if (!this.context.authed.isAuthenticated) {
      return (<Redirect to={Private.LOGIN_URL}/>)
    }

    return this.props.children
  }
}

Private.propTypes={
  router:PropTypes.object
}
