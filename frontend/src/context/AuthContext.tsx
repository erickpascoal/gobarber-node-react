import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
}

interface AuthContextProps {
  user: object;
  signIn(credential: SignInCredentials): Promise<void>;
  signOut(): void;
  signUp(credential: SignUpCredentials): Promise<void>;
}

interface DataAuthState {
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {

  const [dataAuth, setDataAuth] = useState<DataAuthState>(() => {
    const token = localStorage.getItem('@Gobarber:token');
    const user = localStorage.getItem('@Gobarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as DataAuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('/sessions', {
      email, password
    });

    const { token, user } = response.data;

    localStorage.setItem('@Gobarber:token', token);
    localStorage.setItem('@Gobarber:user', JSON.stringify(user));

    setDataAuth({ token, user });

  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Gobarber:token');
    localStorage.removeItem('@Gobarber:user');

    setDataAuth({} as DataAuthState);
  }, []);

  const signUp = useCallback(async ({ name, email, password }: SignUpCredentials) => {
    const response = await api.post('/user', {
      name,
      email,
      password
    });

  }, []);

  return (
    <AuthContext.Provider value={{ user: dataAuth.user, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };