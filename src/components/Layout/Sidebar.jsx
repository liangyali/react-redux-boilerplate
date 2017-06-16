import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import styles from './style.less'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {matchRoutes} from 'react-router-config'
import settings from '../../settings'

const SubMenu = Menu.SubMenu
const MenuStore={
  defaultOpenKeys:null,
  selectedKeys:null
}

export default class Sidebar extends Component {

  /**
 * 根据当前路由匹配地址，返回匹配的url列表
 * @return {Array<string>}
 */
  getDefaultSelectKeys() {
    const branchs = matchRoutes(this.context.routes || {}, this.context.router.route.location.pathname)
    return branchs.map(item => item.match.url)
  }

  /**
 * 显示SubMenu title
 * @param  {string} title
 * @param  {string} icon
 * @return {React.Element}
 */
  renderSubMenuTitle(title, icon) {
    return (
      <span>
        <Icon type={icon}/>
        <span>
          {title}
        </span>
      </span>
    )
  }

  handleMenuClick = (e) => {
  MenuStore.selectedKeys=[e.key]
   this.setState({
     ...this.state,
     current: MenuStore.selectedKeys,
   })
 }

  /**
 * render Menus
 * @param  {array} menus
 * @return {React.Element}
 */
  renderMenus(menus) {

    if (!menus) {
      return null
    }

    return (menus).map(menu => {
      if (menu.subs && menu.subs.length > 0) {
        return (
          <SubMenu key={menu.path} title={this.renderSubMenuTitle(menu.title || '', menu.icon || '')}>
            {this.renderMenus(menu.subs)}
          </SubMenu>
        )
      }

      return (
        <Menu.Item key={menu.path}>
          <Link to={menu.path}>{menu.icon && <Icon type={menu.icon}/>}{menu.title}</Link>
        </Menu.Item>
      )
    })
  }

  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <img width='150' alt='' src='/images/logo.svg'/>
        </div>
        <div>
          <Menu mode='inline' onClick={this.handleMenuClick.bind(this)} defaultOpenKeys={this.getDefaultSelectKeys()}  selectedKeys={this.getDefaultSelectKeys()}>
            {this.renderMenus(settings.menus)}
          </Menu>
        </div>
      </div>
    )
  }
}

Sidebar.contextTypes = {
  routes: PropTypes.array,
  router: PropTypes.object
}
