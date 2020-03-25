import React, { memo } from 'react';
import PropTypes from 'prop-types';
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

PrivateRoute.propTypes = {
  component: PropTypes.Node,
  isAuthorized: PropTypes.bool,
};

export default PrivateRoute;