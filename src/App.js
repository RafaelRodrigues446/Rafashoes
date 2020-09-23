import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/globalStyles';

import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes/>
      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;
