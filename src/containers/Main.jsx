import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as authedActions from '../actions/authed'
import {matchRoutes} from 'react-router-config'
import {AppLayout} from '../components/Layout'
import renderRoutes from '../utils/renderRoutes'

class Main extends Component {

  /**
   * 提供childContext,提供子组件进行访问节点进行访问，如用户和其他登录信息
   */
  getChildContext() {
    return {routes: this.props.route.routes, authed: this.props.authed,authedActions:this.props.authedActions}
  }

  /**
 * render 子界面和其他控件
 */
  render() {
    const {route} = this.props

    const branchs = matchRoutes(route.routes || {}, this.context.router.route.location.pathname)||[]
    const branch=branchs[0]

    console.log(branch)

    // 设置不需要登陆的界面
    if(branch && branch.route.authenticated!==undefined && branch.route.authenticated===false){
      console.log('Hello')
      return (
        <div>
            {renderRoutes(route.routes)}
        </div>
      )
    }

    // 登陆界面使用统一的MasterPage
    return (
      <AppLayout>
          {renderRoutes(route.routes)}
      </AppLayout>
    )
  }
}

Main.childContextTypes = {
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

Main.contextTypes={
  router:PropTypes.object.isRequied
}

const mapStateToProps = (state, ownProps) => {
  return {authed: state.authed}
}

const mapDispatchToProps = dispatch => {
  return {
    authedActions: bindActionCreators(authedActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
