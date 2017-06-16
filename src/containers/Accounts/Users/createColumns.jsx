import React from 'react'
import {Popconfirm} from 'antd'
const moment=require('moment')

export default() => [
  {
    title: '编号',
    dataIndex: 'id',
    key: 'id',
    width: 50
  }, {
    title: '用户名称',
    dataIndex: 'name',
    key: 'name',
    width: 200
  }, {
    title: '登陆邮箱',
    dataIndex: 'email',
    key: 'email',

  }, {
    title: '创建时间',
    width: 150,
    dataIndex: 'created_at',
    key: 'created_at',
    render:(text)=>moment(text).format('YYYY-MM-DD hh:mm:ss')
  }, {
    title: '创建时间',
      width: 150,
    dataIndex: 'updated_at',
    key: 'updated_at',
      render:(text)=>moment(text).format('YYYY-MM-DD hh:mm:ss')
  }, {
    title: '操作',
    key: 'action',
    width: 150,
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
