import React from 'react'
import styles from './style.less'

export default({match}) => (
  <div>
    <div className={styles.errorBox}>
      <div className={styles.errorBody}>
        <h1 >404</h1>
        <h3>404 没有找到相关页面</h3>
      </div>
    </div>
  </div>
)
