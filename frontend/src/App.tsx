import React from 'react';
import { AuthProvider } from './context/AuthContext';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <AuthProvider>
        {/* <SignUp /> */}
        <SignIn />
      </AuthProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
