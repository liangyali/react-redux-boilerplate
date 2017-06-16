import React, {Component} from 'react'
import {Progress} from 'antd'

class Dashboard extends Component {
  render() {
    return (
      <div>
          <div className='white-box'>
            <Progress type='dashboard' percent={75}/>
          </div>
      </div>
    )
  }
}

export default Dashboard
