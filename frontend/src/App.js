import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './service/history';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Routes from './routes';
import { store, persistor } from './store';

// Cores
// f94d6a - rosa
// 191620 - escuro
// 25212e - roxo escuro
// 402744 - roxo claro
// 271d2d - input
// 4dbaf9 - botao primario (azul)
// d44059 - botao secundario (vermelho)

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
        </Router>
      </PersistGate>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </Provider>
  );
}

export default App;
