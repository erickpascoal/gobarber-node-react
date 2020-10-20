import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
