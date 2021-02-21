import React, { memo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StateProps } from './container';

interface Props {
  component?: any;
  location?: any;
  render?: any;
  path?: any;
}


const PrivateRoute = memo(
  (
    {
      component,
      isLoading,
      isAuthorized,
      ...rest
    }: StateProps & Props
  ) => {

    const Component = component;

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
          render={props => (<Component {...props} />)}
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

    return null;


  });

export default PrivateRoute;