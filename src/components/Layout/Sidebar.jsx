import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import styles from './style.less'

const SubMenu = Menu.SubMenu

export default class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <img height='21' width='108' alt='' src='https://wrappixel.com/demos/admin-templates/agile-admin/plugins/images/agileadmin-text-dark.png'/>
        </div>
        <div>
          <Menu mode="inline">
            <SubMenu key="sub1" title={< span > <Icon type="setting"/> < span > 账号管理 < /span></span >}>
              <Menu.Item key="1">用户管理</Menu.Item>
              <Menu.Item key="2">角色管理</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={< span > <Icon type="appstore"/> < span > 店铺管理 < /span></span >}>
              <Menu.Item key="5">测试地址</Menu.Item>
              <Menu.Item key="6">测试地址</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={< span > <Icon type="setting"/> < span > 数据报表 < /span></span >}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    )
  }
}
