
import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Component from '../Warband/Component';


jest.mock('@material-ui/lab/Autocomplete', () => () => 'autocomplete');

const theme = createMuiTheme({});


describe('Warband', () => {
  it('Should render (smoke test)', () => {
    const { asFragment } = render(
      <Router>
        <MuiThemeProvider theme={theme}>
          <Component
            addWarbandReset={() => {}}
            getWarbands={() => {}}
          />
        </MuiThemeProvider>
      </Router>
    );
    const firstRender = asFragment();
    expect(firstRender).toMatchSnapshot();
  });
});