import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as authedActions from '../actions/authed'
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



    return (
      <div>
        {renderRoutes(route.routes)}
      </div>
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

const mapStateToProps = (state, ownProps) => {
  return {authed: state.authed}
}

const mapDispatchToProps = dispatch => {
  return {
    authedActions: bindActionCreators(authedActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
