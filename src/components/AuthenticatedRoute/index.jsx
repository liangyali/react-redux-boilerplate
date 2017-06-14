import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router'
import {Spin} from 'antd'

export default class AuthenticatedRoute extends Component {

  static contextTypes = {
    authed: PropTypes.object,
    authedActions:PropTypes.object
  }

  /**
 * 主界面加载进行加载用户，如果没有token进行调整到登陆界面
 */
  componentDidMount() {
    this.context.authedActions.initAuthedUser()
  }

  render() {
    const {
      component: WarppedComponent,
      ...rest
    } = this.props

    // 用户信息没有加载完成，显示loading
    if (this.context.authed.fetUserRequesting === true) {
      return (
        <div className='mask'><Spin spinning={true} tip='加载数据中，请稍后...' size='large'/></div>
      )
    }

    if (!this.context.authed.isAuthenticated) {
      return (<Redirect to={'/login'}/>)
    }

    return (
      <Route render={props => (<WarppedComponent {...rest}/>)}/>
    )
  }
}
