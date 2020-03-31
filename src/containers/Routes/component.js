import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';
import PrivateRoute from '../../containers/PrivateRoute';
import HomePage from '../HomePage.js';
import ReflectionModal from '../ReflectionModal';
import ForgotPassword from '../ForgotPassword';

const Routes = ({ readSession }) => {

  useEffect(() => {
    readSession();
  }, []);

  return (
    <Switch>
      <Route exact component={Login} path="/login"/>
      <Route exact component={Signup} path="/signup"/>
      <Route exact component={ForgotPassword} path="/forgot-password"/>
      <Route component={HomePage} path="/" />
      <PrivateRoute component={ReflectionModal} path="/reflection/:id" />
    </Switch>
  );
};
 
export default Routes;