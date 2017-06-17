import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {matchRoutes} from 'react-router-config'
import * as authedActions from '../actions/authed'
import {renderRoutes} from '../utils'
import {AppLayout} from '../components/Layout'
import routes from './routes'

class Root extends Component {

  /**
   * 提供childContext,提供子组件进行访问节点进行访问，如用户和其他登录信息
   */
  getChildContext() {
    return {routes: routes, authed: this.props.authed,authedActions:this.props.authedActions}
  }

  /**
 * render 子界面和其他控件
 */
  render() {
    const branchs = matchRoutes(routes || {}, this.context.router.route.location.pathname) || []
    const branch = branchs[0]

    // 设置不需要登陆的界面
    if (branch && branch.route.authenticated === false) {
      console.log('render pulbic view')
      return (
        <div>
          {renderRoutes(routes)}
        </div>
      )
    }

      console.log('render private view')
    // 登陆界面使用统一的MasterPage
    return (
      <AppLayout>
        {renderRoutes(routes)}
      </AppLayout>
    )
  }
}

Root.childContextTypes = {
  /**
 * 系统routes
 * @type {array}
 */
  routes: PropTypes.array,

  /**
 * 当前授权信息
 * @type {array}
 */
  authed: PropTypes.object,

  /**
   * 退出系统
   * @type {function}
   */
  authedActions:PropTypes.object
}

Root.contextTypes={
  router:PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  return {authed: state.authed}
}

const mapDispatchToProps = dispatch => {
  return {
    authedActions: bindActionCreators(authedActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
