import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Button, Form, Input} from 'antd'
import * as authedActions from '../../actions/authed'
import styles from './style.less'

const FormItem = Form.Item

class Signin extends Component {

  /**
   * 提交用户信息进行登陆验证，并返回token
   */
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.authedActions.login(values)
      }
    })
  }

  /**
   * render view
   */
  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <div>
        <div className={styles.content}>
          <div className={styles.container}></div>
        </div>
        <div className={styles.view}>
          <div className={styles.loginBox}>
            <div className={styles.header}>
              <img src='/images/logo.svg' width='200' alt='logo'/>
            </div>
            <div className={styles.body}>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                  {getFieldDecorator('email', {
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
                  <Button type='primary' loading={this.props.authed.loginRequesting} htmlType='submit' size='large' className={styles.loginButton}>
                    登 陆
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
