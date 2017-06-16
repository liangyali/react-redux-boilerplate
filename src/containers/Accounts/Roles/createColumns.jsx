import React from 'react'
import {Tag, Popconfirm} from 'antd'
import styles from './style.less'

export default() => [
  {
    title: '编号',
    dataIndex: 'id',
    key: 'id',
    width:50,
  },
  {
    title: '角色名称',
    dataIndex: 'name',
    key: 'name',
    width:150,
  }, {
    title: '功能列表',
    dataIndex: 'permissions',
    key: 'permissions',
    width:500,
    render: (text, record) => {
      return (
        <div className={styles.permissions}>
          {record.permissions.map((item,idx) => (
            <Tag key={idx}>{item.title}</Tag>
          ))}
        </div>
      )
    }
  }, {
    title: '数据范围',
    dataIndex: 'area',
    key: 'area'
  }, {
    title: '操作',
    key: 'action',
    width:150,
    render: (text, record) => (
      <span>
        <a href='#'>编辑</a>
        <span className='ant-divider'/>
        <Popconfirm title='确认删除此条数据?' okText='确认' cancelText='取消'>
          <a href='#'>删除</a>
        </Popconfirm>
      </span>
    )
  }
]
