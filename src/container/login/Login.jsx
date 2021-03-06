import React, { useEffect } from 'react'
import loginStyle from "./login.module.scss"
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
 const Login = (props) => { 
   const {history}=props
     useEffect(() => {
console.log(history);
    
     }, [])
     const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
      // 登录
      const login=()=>{
        localStorage.setItem("islogin","adsgsadfg") 
        history.push("/")
      }
    return (
        <div  className={loginStyle.while}>
        <div className={loginStyle.body}>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
  

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={login}>
          Log in
        </Button>
    
      </Form.Item>
    </Form>
        </div>
        </div>
    )
}
export default Login