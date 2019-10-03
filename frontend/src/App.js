import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Logo from './components/layout/Logo';

import store from './store';

// Cores
// f94d6a - rosa
// 191620 - escuro
// 25212e - roxo escuro
// 402744 - roxo claro

function App() {
  return (
    <Provider store={store}>
      <Logo>M</Logo>
      <GlobalStyle />
    </Provider>
  );
}

export default App;
