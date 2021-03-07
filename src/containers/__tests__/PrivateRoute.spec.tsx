
import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';

import Component from '../PrivateRoute/component';


describe('PrivateRoute', () => {
  it('Should render (smoke test)', () => {
    const { asFragment } = render(
      // Requires to be wrapped in router because NotFoundPage uses react-router-doms Link element
      // Requires to be wrapped MuiThemeProvider because NotFoundPage is using Theme from material-ui
      // <Provider store={store}>
      <Router>
        <Component />
      </Router>,
      // </Provider>,
    );
    const firstRender = asFragment();
    expect(firstRender).toMatchSnapshot();
  });
});