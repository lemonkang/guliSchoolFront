import React from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Error from '../container/Error/Error'
import Login from '../container/login/Login'
import Main from '../container/main/Main'

const FrontAuth = (props) => {

    const {routerMap,location }=props
    // 当前的路径
    const pathname =location.pathname
    // 本地islogin
    const islogin=localStorage.getItem("islogin")
    // 判断当前路径和组件   有 或者undifine
  const currentcomponent=routerMap.find((item)=>item.path===pathname)
//   合法路径  没有登录 不要验证
  if (currentcomponent&& !islogin && !currentcomponent.auth) { 
    return <Route path={pathname} component={currentcomponent.component}></Route>
  }
  if (islogin) {
    // 登录了判断路径是否合法   不合法404
    if (currentcomponent) {
      if (currentcomponent.component) {
        return  <Route path={currentcomponent.path} component={currentcomponent.component}></Route>
      }
      if (!currentcomponent.component) {
          return  <Route path={currentcomponent.path} component={Main}></Route>
      } 
      
    }
    
  
        return <Redirect to="/404"></Redirect>
    
  }
  else{
      if (currentcomponent&&currentcomponent.auth) {
       return   <Redirect to="/login" />;
      }
      else{
          return  <Redirect to="/404" />;
      }
  }
 
}
export default FrontAuth