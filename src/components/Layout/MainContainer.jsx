import React, {Component} from 'react'
import styles from './style.less'
import {Breadcrumb} from 'antd'

export default class MainContainer extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.navbar}></div>
        <div className={styles.breadcrumb}>
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">设置管理</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">管理</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
