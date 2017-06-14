import React, {Component} from 'react'
import {Progress} from 'antd'
import {AppLayout} from '../../components/Layout'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <AppLayout>
          <div className='white-box'>
            <Progress type='dashboard' percent={75}/>
          </div>
        </AppLayout>
      </div>
    )
  }
}

export default Dashboard
