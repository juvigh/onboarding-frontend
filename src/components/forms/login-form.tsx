import { useState } from 'react';
import { Button } from '../buttons/button';
import { FormField } from './form-field';
import { FormContainer } from './form-styles';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleFormSubmit = () => {
    setIsButtonClicked(true);
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
        value={password}
        onChange={(value) => setPassword(value)}
        isButtonClicked={isButtonClicked}
      />
      <Button title="Entrar" onClick={handleFormSubmit} />
    </FormContainer>
  );
};
