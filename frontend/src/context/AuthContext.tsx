import React, { createContext, useCallback } from 'react';
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
  name: string;
  signIn(credential: SignInCredentials): Promise<void>;
  signUp(credential: SignUpCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('/sessions', {
      email, password
    });
    console.log(response.data);
  }, []);

  const signUp = useCallback(async ({ name, email, password }: SignUpCredentials) => {
    const response = await api.post('/user', {
      name,
      email,
      password
    });

    console.log(response.data);

  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Erick', signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};