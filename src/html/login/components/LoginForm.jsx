import React from 'react';
import { Form, Icon, Input, Button, Checkbox, message} from 'antd';
import axios from 'axios';

import loginFormStyle from '../css/loginFormStyle.css'

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {

  checkLogin = (data) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: '/login',
            baseURL: 'http://localhost:8081',
            data: data,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
        }).then(function(res){
            resolve(res.data.statu)
        }).catch(function(err){
            reject(err)
        })
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.checkLogin(values).then((statu)=>{
          window.location.href="./home.html"
        }).catch((err)=>{
          message.error(err.toString());
        })
      }else{
          message.error('err');
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(NormalLoginForm);