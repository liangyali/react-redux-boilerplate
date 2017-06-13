import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Button, Form, Icon, Input, Checkbox} from 'antd'
import * as authedActions from '../../actions/authed'
import styles from './style.less'

const FormItem = Form.Item

class Signin extends Component {
  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <div>
        <div className={styles.content}>
          <div className={styles.container}>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p><br/>
            <br/>
            <Button type='primary' size='large'>了解更多</Button>
          </div>
        </div>
        <div className={styles.view}>
          <div className={styles.loginBox}>
            <div className={styles.header}>
              系统登录
            </div>
            <div className={styles.body}>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [
                      {
                        required: true,
                        message: '请输入邮箱账号!'
                      }
                    ]
                  })(<Input placeholder='邮箱账号'/>)}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [
                      {
                        required: true,
                        message: '请输入密码!'
                      }
                    ]
                  })(<Input type="password" placeholder="请输入密码"/>)}
                </FormItem>
                <FormItem>
                  <Button type='primary' htmlType='submit' size='large' className='login-form-button'>
                    登陆系统
                  </Button>
                </FormItem>
              </Form>
            </div>
            <div className={styles.footer}></div>
          </div>
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
    authedActions: bindActionCreators(authedActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Signin))
