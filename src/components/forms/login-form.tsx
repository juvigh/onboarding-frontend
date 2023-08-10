import React, { useState } from 'react';
import { Button } from '../buttons/button';
import { FormField } from './form-field';
import { FormContainer } from './form-styles';
import { useLoginMutation } from '../../api/fetch-login-user';
import { ErrorMessage } from './error-message';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();

  const { loginUser, loading, error } = useLoginMutation();

  const isEmailEmpty = !email.trim() && isButtonClicked;
  const isPasswordEmpty = !password.trim() && isButtonClicked;
  const isAnyFieldEmpty = isEmailEmpty || isPasswordEmpty;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsButtonClicked(true);

<<<<<<< HEAD
    if (isAnyFieldEmpty) {
      return;
=======
    try {
      const result: FetchResult<LoginUserData> = await loginUser({
        variables: { data: { email, password } },
      });

      if (!isAnyFieldEmpty) {
        if (result.data && result.data.login.token) {
          localStorage.setItem('authToken', result.data.login.token);
          navigate('/');
        } else {
          console.error('Token não encontrado na resposta da mutação');
        }
      }
    } catch (err) {
      console.error('Erro na mutação', err);
>>>>>>> Add HomePage route and component
    }

    loginUser({
      variables: { data: { email, password } },
      onCompleted: (data) => {
        localStorage.setItem('authToken', data.login.token);
        navigate('/');
      },
      onError: (error) => {
        console.error('Erro na mutação', error);
      },
    });
  };

  return (
    <FormContainer>
      <h1> Bem vindo(a) a Taqtile </h1>
      <FormField label="Email" value={email} onChange={(value) => setEmail(value)} isButtonClicked={isButtonClicked} />
      <FormField
        label="Senha"
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
