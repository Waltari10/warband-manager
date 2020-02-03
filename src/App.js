import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';

import configureStore from './store/configureStore';
import Routes from './Routes';
import theme from './styles/theme';


const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Routes/>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
