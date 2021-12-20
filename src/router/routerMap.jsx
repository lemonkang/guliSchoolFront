import Error from "../container/Error/Error";
import Login from "../container/login/Login";
import Main from "../container/main/Main";
import Teacher from "../container/teacher/Teacher";

  const routerMap=[
      {path:"/",component:Main,auth:true  },
      {path:"/login",component:Login},
      {path:"/404",component:Error},
      {path:"/teacher"},
    
  ]
export default routerMap