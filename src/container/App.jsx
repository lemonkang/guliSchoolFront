import React from 'react';

import Error from './Error/Error';
import Login from './login/Login';
import Main from './main/Main';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

 const App = () => {
    return (
        <Router>
          <Switch>
            <div style={{width:"100vw",height:"100vh"}}>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Main}></Route>
          <Route path="/404" component={Error}></Route>
          </div>
          </Switch>
        </Router>
    )
}

export default App