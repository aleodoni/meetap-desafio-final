import React from 'react';
import { Router } from 'react-router-dom';
import history from './service/history';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Routes from './routes';
// import store from './store';

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
    <>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
