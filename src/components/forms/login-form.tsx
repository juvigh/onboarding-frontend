import React, { useState } from 'react';
import { Button } from '../buttons/button';
import { FormField } from './form-field';
import { FormContainer } from './form-styles';
import { useLoginMutation } from '../../api/fetch-login-user';
import { FetchResult } from '@apollo/client';
import { LoginUserData } from '../../api/mutation/login-user';
import { ErrorMessage } from './error-message';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const { loginUser, loading, error } = useLoginMutation();

  const isEmailEmpty = !email.trim() && isButtonClicked;
  const isPasswordEmpty = !password.trim() && isButtonClicked;
  const isAnyFieldEmpty = isEmailEmpty || isPasswordEmpty;

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsButtonClicked(true);

    if (isAnyFieldEmpty) {
      return;
    } else {
      try {
        const result: FetchResult<LoginUserData> = await loginUser({
          variables: { data: { email, password } },
        });

        if (result.data && result.data.login.token) {
          localStorage.setItem('authToken', result.data.login.token);
          console.log('Token armazenado:', result.data.login.token);
        }
      } catch (err) {
        console.error('Erro na mutação', err);
      }
    }
  };

  return (
    <FormContainer>
      <h1> Bem vindo(a) a Taqtile </h1>
      <FormField
        label="Email"
        value={email}
        email
        onChange={(value) => setEmail(value)}
        isButtonClicked={isButtonClicked}
      />
      <FormField
        label="Senha"
        password
        type="password"
        value={password}
        onChange={(value) => setPassword(value)}
        isButtonClicked={isButtonClicked}
      />
      {loading && <div>Carregando...</div>}
      {!isAnyFieldEmpty && error && <ErrorMessage message={error.message} />}
      <Button title="Entrar" onClick={handleFormSubmit} />
    </FormContainer>
  );
};
