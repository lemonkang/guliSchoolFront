import React,{useEffect, useState} from 'react'
import { Layout, Menu, Upload } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import "./main.scss"
import Teacher from '../teacher/Teacher';

import { Route, Switch,Redirect } from "react-router-dom";
import UploadCompon from '../upload/UploadCompon';


const { Header, Sider, Content } = Layout;

const Main = (props) => {
// 初始化数据
const [collapsed, setcollapsed] = useState(false)
const {history}=props
const islogin=localStorage.getItem("islogin")
// 验证登录
useEffect(() => {
  if (!islogin) {
    dlick()
  }
}, [])
 const toggle = () => {
    setcollapsed(!collapsed)
  };
  // 前往教师模块
  const goTeacher=()=>{
  
    history.push('/teacher')
  }
  // 前往登录模块
  const dlick=()=>{
    history.replace("/login")
  }
  // 前往文件上传模块
  const goUpload=()=>{
    history.push('/upload')
  }
    return (
       <div>
       
           <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />} onClick={goTeacher}>
              教师模块
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={goUpload}>
              文件上传
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className=" mainbody">
          <Header className="mainheader" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="maincontent"
          >
            <Switch>
              <Route path="/teacher" component={Teacher}></Route>
              <Route path="/upload" component={UploadCompon}></Route>
            </Switch>
        
         
          
          </Content>
        </Layout>
      </Layout>
       </div>
    )
}
export default Main