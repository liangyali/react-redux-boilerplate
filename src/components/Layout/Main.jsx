import React, {Component} from 'react'
import styles from './style.less'
import PropTypes from 'prop-types'
import {Breadcrumb} from 'antd'
import {matchRoutes} from 'react-router-config'

export default class MainContainer extends Component {

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
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.navbar}></div>
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
  router: PropTypes.object
}

MainContainer.propTypes = {
  routes: PropTypes.object
}
