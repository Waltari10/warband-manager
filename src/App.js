import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { HashRouter as Router } from 'react-router-dom';

import configureStore from './store/configureStore';
import Routes from './containers/Routes';
import theme from './styles/theme';

const store = configureStore();

function App() {
  return (
    <Router>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Routes/>
        </MuiThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;
