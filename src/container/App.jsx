import React from 'react';

import Error from './Error/Error';
import Login from './login/Login';
import Main from './main/Main';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import FrontAuth from './router/FrontAuth';
import routerMap from './router/routerMap';
 const App = () => {
    return (
        <Router>
        <div style={{width:"100vw",height:"100vh"}}>
          <Switch>
         <FrontAuth routerMap={routerMap}></FrontAuth>
          </Switch>
        </div>
      </Router>
    )
}

export default App