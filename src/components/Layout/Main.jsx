import React, {Component} from 'react'
import styles from './style.less'
import PropTypes from 'prop-types'
import {Badge, Icon, Menu, Breadcrumb} from 'antd'
import {Link} from 'react-router-dom'
import {matchRoutes} from 'react-router-config'

export default class MainContainer extends Component {

  state={
    openMenu:false
  }

  toggleMenu(){
    this.setState({openMenu:!this.state.openMenu})
  }

  logout(){
    this.context.authedActions && this.context.authedActions.logout()
  }

  renderBreadcrumb() {
    const branchs = matchRoutes(this.context.routes || {}, this.context.router.route.location.pathname)
    return (
      <Breadcrumb>
        {branchs.map((branch, index) => (
          <Breadcrumb.Item key={index}>
            {branch.route.breadcumbName}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    )
  }

  renderMenus() {
    if(this.state.openMenu===false){
      return null
    }
    return (
      <div className={styles.profile} onMouseLeave={this.toggleMenu.bind(this)}>
      <Menu>
        <Menu.Item key='1'>
          <Link to='/profile'><Icon type='setting'/><span>修改个人信息</span></Link>
        </Menu.Item>
        <Menu.Item key='3' >
          <a onClick={this.logout.bind(this)}><Icon type='poweroff'/><span>退出系统</span></a>
        </Menu.Item>
      </Menu>
      </div>
    )
  }
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.navbar}>
          <ul className={styles.nav}>
            <li>
              <Link to='/inbox'>
                <Badge dot>
                  <Icon type='mail'/></Badge>
              </Link>
            </li>
            <li>
              <a onClick={this.toggleMenu.bind(this)}>
                <img className={styles.avatar} src='/images/profile.jpg' alt='' />
                <span className={styles.userName}>测试用户</span>
                {this.renderMenus()}
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.breadcrumb}>
          {this.renderBreadcrumb()}
        </div>
        <div className={styles.container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

MainContainer.contextTypes = {
  routes: PropTypes.array,
  router: PropTypes.object,
  authedActions:PropTypes.object
}
