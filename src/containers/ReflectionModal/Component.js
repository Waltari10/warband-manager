import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = memo(({ component: Component, isAuthorized, ...rest }) => {


  if (!isAuthorized) {
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