import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Spin} from 'antd'
import * as authedActions from '../actions/authed'
import renderRoutes from '../utils/renderRoutes'

class Main extends Component {

  /**
 * 主界面加载进行加载用户，如果没有token进行调整到登陆界面
 */
  componentDidMount() {
    this.props.authedActions.initAuthedUser()
  }

  /**
   * 提供childContext,提供子组件进行访问节点进行访问，如用户和其他登录信息
   */
  getChildContext() {
    return {routes: this.props.route.routes, authed: this.props.authed}
  }

  /**
 * render 子界面和其他控件
 */
  render() {
    const {route} = this.props

    // 用户信息没有加载完成，显示loading
    if (this.props.authed.fetUserRequesting === true) {
      return (
        <div className='mask'><Spin spinning={true} tip='加载数据中，请稍后...' size='large'/></div>
      )
    }

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
  authed: PropTypes.object
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
