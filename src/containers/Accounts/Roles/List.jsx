import React, {Component} from 'react'
import {Table} from 'antd'
import createColumns from './createColumns'

const data = [
  {
    id: '1',
    name: '管理员',
    age: 32,
    permissions: [
      {
        title: '用户管理'
      }, {
        title: '用户管理'
      }, {
        title: '用户管理'
      }, {
        title: '用户管理'
      },{
        title: '用户管理'
      }, {
        title: '用户管理'
      }, {
        title: '用户管理'
      }, {
        title: '用户管理'
      },{
        title: '用户管理'
      }, {
        title: '用户管理'
      }, {
        title: '用户管理'
      }, {
        title: '用户管理'
      }
    ]
  }, {
    id: '2',
    name: '店员',
    permissions: [
      {
        title: '用户管理'
      }, {
        title: '用户管理'
      }, {
        title: '用户管理'
      }, {
        title: '用户管理'
      }
    ]
  }, {
    id: '3',
    name: '测试',
    age: 32,
    permissions:[]
  }
]

export default class List extends Component {
  render() {
    return (
      <div>
        <div className='white-box'><Table columns={createColumns()} pagination={false} dataSource={data}/></div>
      </div>
    )
  }
}
