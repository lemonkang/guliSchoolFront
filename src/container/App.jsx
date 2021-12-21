import React from 'react';

import Error from './Error/Error';
import Login from './login/Login';
import Main from './main/Main';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../redux/store';
 const App = () => {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <div style={{width:"100vw",height:"100vh"}}>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Main}></Route>
          <Route path="/404" component={Error}></Route>
          </div>
          </Switch>
        </Router>
        </Provider>
    )
}

export default App