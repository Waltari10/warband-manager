import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';
import PrivateRoute from '../../containers/PrivateRoute';
import HomePage from '../HomePage';
import WarbandModal from '../WarbandModal';
import ForgotPassword from '../ForgotPassword';
import OfflineBar from '../../components/OfflineBar';

const Routes = ({ readSession }) => {

  useEffect(() => {
    readSession();
  }, []);

  return (
    <>
      <OfflineBar />
      <Switch>
        <Route exact component={Login} path="/login" />
        <Route exact component={Signup} path="/signup" />
        <Route exact component={ForgotPassword} path="/forgot-password" />
        <Route component={HomePage} path="/" />
        <PrivateRoute component={WarbandModal} path="/warband/:id" />
      </Switch>
    </>
  );
};

export default Routes;