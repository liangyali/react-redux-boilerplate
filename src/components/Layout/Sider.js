import React from 'react'
import PropTypes from 'prop-types'
import styles from './Layout.less'

const Sider = ({
  siderFold,
  darkTheme,
  location,
  changeTheme,
  navOpenKeys,
  changeOpenKeys,
  menu
}) => {

  return (
    <div>
      <div className={styles.logo}>
        <img alt={'logo'} src={'config.logo'}/> {siderFold
          ? ''
          : <span>{'Hello1'}</span>}
      </div>

    </div>
  )
}

Sider.propTypes = {
  menu: PropTypes.array,
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool,
  location: PropTypes.object,
  changeTheme: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func
}

export default Sider
