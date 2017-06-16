import React, {Component} from 'react'
import {Table} from 'antd'
import createColumns from './createColumns'

const data = [
  {
    id: '1',
    name: 'John Brown',
    age: 32,
    email: 'me@liangali.com',
    address: 'New York No. 1 Lake Park',
    created_at: new Date()
  }, {
    id: '2',
    name: 'Jim Green',
    age: 42,
    email: 'me@liangali.com',
    address: 'London No. 1 Lake Park',
    created_at: new Date()
  }, {
    id: '3',
    name: 'Joe Black',
    age: 32,
    email: 'me@liangali.com',
    address: 'Sidney No. 1 Lake Park',
    created_at: new Date()
  }
]

export default class List extends Component {
  render() {
    return (
      <div>
        <div className='white-box'><Table columns={createColumns()} dataSource={data}/></div>
      </div>
    )
  }
}
