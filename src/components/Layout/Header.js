import React from 'react'
import PropTypes from 'prop-types'
import {Menu, Icon} from 'antd'
import styles from './Header.less'

const Header = ({
  user,
  logout,
  switchSider,
  siderFold,
  isNavbar,
  menuPopoverVisible,
  location,
  switchMenuPopover,
  navOpenKeys,
  changeOpenKeys,
  menu
}) => {
  let handleClickMenu = e => e.key === 'logout' && logout()
  return (
    <div className={styles.header}>
      <div className={styles.rightWarpper}>
        <div className={styles.button}>
          <Icon type="mail"/>
        </div>
        <Menu mode="horizontal" onClick={handleClickMenu}></Menu>
      </div>
    </div>
  )
}

Header.propTypes = {
  menu: PropTypes.array,
  user: PropTypes.object,
  logout: PropTypes.func,
  switchSider: PropTypes.func,
  siderFold: PropTypes.bool,
  isNavbar: PropTypes.bool,
  menuPopoverVisible: PropTypes.bool,
  location: PropTypes.object,
  switchMenuPopover: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func
}

export default Header
