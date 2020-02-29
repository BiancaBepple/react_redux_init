import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';

import GlobalStyles from './styles/global';
import Header from './components/Header';

import store from './store'

function App() {
  return (
  <Provider store={store}>
  <Header/>
  <Routes />
  <GlobalStyles />
  </Provider>
  );
}

export default App;
