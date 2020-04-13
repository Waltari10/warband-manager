
import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Component from '../Modal';


const theme = createMuiTheme({});


describe('Modal', () => {
  it('Should render (smoke test)', () => {
    const { asFragment } = render(
      // Requires to be wrapped in router because NotFoundPage uses react-router-doms Link element
      // Requires to be wrapped MuiThemeProvider because NotFoundPage is using Theme from material-ui
      <Router>
        <MuiThemeProvider theme={theme}>
          <Component />
        </MuiThemeProvider>
      </Router>,
    );
    const firstRender = asFragment();
    expect(firstRender).toMatchSnapshot();
  });
});