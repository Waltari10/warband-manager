import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';
import Homepage from '../../components/Homepage';
import PrivateRoute from '../../containers/PrivateRoute';

import { config as firebaseConfig } from '../../utils/firebase';

const Routes = ({ addUserToState }) => {

  function readSession() {
    const user = window.sessionStorage.getItem(
      `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
    );

    if (user) {
      addUserToState(JSON.parse(user));
    }
  }
  useEffect(() => {
    readSession();
  }, []);

  return (
    <Switch>
      <Route exact component={Login} path="/"/>
      <Route exact component={Signup} path="/signup"/>
      <PrivateRoute exact component={Homepage} path="/homepage" />
    </Switch>
  );
};
 
export default Routes;