import React, { memo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';


const PrivateRoute = memo(({ component: Component, isLoading, isAuthorized, ...rest }) => {

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!isAuthorized && !isLoading) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: rest.location },
        }}
      />
    );
  }

  if (Component) {
    return (
      <Route
        {...rest}
        render={props =>(<Component {...props} />)}
      />
    );
  }

  if (rest.render) {
    return (
      <Route
        {...rest}
        render={rest.render}
      />
    );
  }


});

export default PrivateRoute;