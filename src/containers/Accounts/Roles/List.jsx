import React, {Component} from 'react'
import {Table,Button} from 'antd'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as rolesActions from '../../../actions/roles'
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

class List extends Component {
  render() {
    const {rolesActions,match}=this.props
    console.log(this.props)
    return (
      <div>
        <div className='white-box'>
          <div className='button-tools'>
            <Button type='primary' icon='plus-circle-o' onClick={rolesActions.redirectNew.bind(this,match.url)}>添加角色</Button>
          </div>
          <div><Table columns={createColumns()} dataSource={data}/></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {authed: state.authed}
}

const mapDispatchToProps = dispatch => {
  return {
    rolesActions: bindActionCreators(rolesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
