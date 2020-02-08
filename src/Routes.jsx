import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './containers/Login';
import Signup from './containers/Signup';

const Routes = () => {
  return (
    <Switch>
      <Route exact component={Login} path="/"/>
      <Route exact component={Signup} path="/signup"/>
    </Switch>
  );
};
 
export default Routes;