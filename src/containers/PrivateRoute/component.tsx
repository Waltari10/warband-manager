import React, { memo } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StateProps } from './container';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Compoenent = React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Render = (props: RouteComponentProps<any>) => React.ReactNode;
interface Props {
  component?: Compoenent;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location?: any;
  render?: Render;
  path?: string | string[];
}


const PrivateRoute: React.FunctionComponent<StateProps & Props> = memo(
  (
    {
      component,
      isLoading,
      isAuthorized,
      ...rest
    },
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