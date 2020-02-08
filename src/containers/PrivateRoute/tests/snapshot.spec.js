import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import PrivateRoute from '../component';

const Test = () => {
  return (<div></div>);
};


describe('PrivateRoute', () => {
  it('renders PrivateRoute', () => {
    const tree = renderer
      .create(
        <Router>
          <PrivateRoute
            isAuthorized
            component={Test}
          />
        </Router>
      )
      .toJSON();


    expect(tree).toMatchSnapshot();
  });
});