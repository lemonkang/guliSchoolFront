import Error from "../Error/Error";
import Login from "../login/Login";
import Main from "../main/Main";

  const routerMap=[
      {path:"/",component:Main,auth:true},
      {path:"/login",component:Login},
      {path:"/404",component:Error}
  ]
export default routerMap