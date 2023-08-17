import React, { useState } from 'react';
import { Button } from '../buttons/button';
import { FormField } from './form-field';
import { FormContainer } from './form-styles';
import { useLoginMutation } from '../../api/fetch-login-user';
import { ErrorMessage } from './error-message';
import { useNavigate } from 'react-router-dom';
import { LoadingIndicator } from '../loading/loading-indicador';
import { H1 } from '../../styles/text-styles';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailHasError, setEmailHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();

  const { loginUser, loading, error } = useLoginMutation();

  const isEmailEmpty = !email.trim() && isButtonClicked;
  const isPasswordEmpty = !password.trim() && isButtonClicked;
  const isAnyFieldEmpty = isEmailEmpty || isPasswordEmpty;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsButtonClicked(true);

    if (isAnyFieldEmpty) {
      setEmailHasError(isEmailEmpty);
      setPasswordHasError(isPasswordEmpty);
      return;
    }

    loginUser({
      variables: { data: { email, password } },
      onCompleted: (data) => {
        localStorage.setItem('authToken', data.login.token);
        navigate('/');
      },
      onError: (error) => {
        console.error('Erro na mutação', error);
        setEmailHasError(true);
        setPasswordHasError(true);
      },
    });
  };

  return loading ? (
    <LoadingIndicator />
  ) : (
    <FormContainer>
      <H1> Bem vindo(a) a Taqtile </H1>
      <FormField
        label="Email"
        value={email}
        onChange={(value) => setEmail(value)}
        isButtonClicked={isButtonClicked}
        required
        hasError={emailHasError}
      />
      <FormField
        label="Senha"
        value={password}
        onChange={(value) => setPassword(value)}
        type="password"
        isButtonClicked={isButtonClicked}
        required
        hasError={passwordHasError}
      />
      {loading && <div>Carregando...</div>}
      {!isAnyFieldEmpty && error && <ErrorMessage message={error.message} />}
      <Button expand title="Entrar" onClick={handleFormSubmit} />
    </FormContainer>
  );
};
