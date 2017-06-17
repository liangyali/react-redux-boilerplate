import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {parseFormInitialValues} from '../../../utils'
import {Form, Input, Button,Checkbox} from 'antd'

const CheckboxGroup = Checkbox.Group
const FormItem = Form.Item

const options=['用户管理','角色管理','门店管理','设备管理','员工管理','巡店管理','管理']

class RoleForm extends Component {
  handleSubmit(evt) {
    evt.preventDefault()
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        return
      }
      this.props.submit(values)
    })
  }
  render() {
    const {form: {
        getFieldDecorator
      }} = this.props

    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormItem label='角色名'>
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入角色名'
              }
            ]
          })(<Input placeholder='请输入角色名'/>)}
        </FormItem>
        <FormItem label='授权功能'>
          {getFieldDecorator('permissions')(<CheckboxGroup options={options}/>)}
        </FormItem>
        <FormItem label='角色描述'>
          {getFieldDecorator('desc')(<Input type='textarea' placeholder='请输入角色描述' rows={4}/>)}
        </FormItem>
        <FormItem>
          <Button type='primary' htmlType='submit'  loading={this.props.saving}>创 建</Button>
        </FormItem>
      </Form>
    )
  }
}

RoleForm.propTypes = {
  submit: PropTypes.func,
  form: PropTypes.object,
  saving: PropTypes.bool
}

const mapPropsToFields=(props)=>{
  return parseFormInitialValues({
    ...props.initialValues
  })
}

const onValuesChange=(props,values)=>{
  console.log(values)
}

export default Form.create({mapPropsToFields,onValuesChange})(RoleForm)
