import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { HashRouter as Router } from 'react-router-dom';

import bg from './assets/dark_bg.jpg';
import configureStore from './store/configureStore';
import Routes from './containers/Routes';
import theme from './styles/theme';


// if (process.env.NODE_ENV === 'development') {
//   const whyDidYouRender = require('@welldone-software/why-did-you-render');
//   const ReactRedux = require('react-redux');
//   whyDidYouRender(React, {
//     // trackAllPureComponents: true,
//     // trackExtraHooks: [
//     //   [ReactRedux, 'useSelector'],
//     // ],
//   });
// }


const store = configureStore();

function App() {

  return (
    <>
      <div
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: 'absolute',
          overflow: 'hidden',
          zIndex: -1,
        }}
      >
        <img
          src={bg}
          style={{
            objectFit: 'cover',
            width: '100%',
            minHeight: '100%',
            minWidth: '100%',
          }}
        />
      </div>
      <Router>
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <Routes/>
          </MuiThemeProvider>
        </Provider>
      </Router>
    </>
  );
}

export default App;
