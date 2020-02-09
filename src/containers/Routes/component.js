import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';
import PrivateRoute from '../../containers/PrivateRoute';
import Tabs from '../../components/Tabs';

import { config as firebaseConfig } from '../../utils/firebase';

// let sessionRead = false;

const Routes = ({ addUserToState }) => {

  function readSession() {
    const user = window.sessionStorage.getItem(
      `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
    );

    if (user) {
      addUserToState(JSON.parse(user));
    }

    // sessionRead = true;
  }
  useEffect(() => {
    readSession();
  }, []);


  // TODO: This is a hack. Refactor for sessionRead to come from Redux
  // if (!sessionRead) {
  //   return null;
  // }

  return (
    <Switch>
      <Route exact component={Login} path="/login"/>
      <Route exact component={Signup} path="/signup"/>
      <PrivateRoute component={Tabs} path="/" />
    </Switch>
  );
};
 
export default Routes;