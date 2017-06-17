import React, {Component} from 'react'
import {Table, Button} from 'antd'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as usersAction from '../../../actions/users'
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

class List extends Component {
  render() {
    const {usersActions, match} = this.props
    return (
      <div className='white-box'>
        <div className='button-tools'>
          <Button type='primary' icon='plus-circle-o' onClick={usersActions.redirectNew.bind(this, match.path)}>添加用户</Button>
        </div>
        <div><Table rowKey='id' columns={createColumns()} dataSource={data}/></div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {users: state.users}
}

const mapDispatchToProps = dispatch => {
  return {
    usersActions: bindActionCreators(usersAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
