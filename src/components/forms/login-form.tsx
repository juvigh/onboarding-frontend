import { Button } from '../buttons/button';
import { FormField } from './form-field';
import { FormContainer } from './form-styles';

export const LoginForm = () => {
  return (
    <FormContainer>
      <h1> Bem vindo(a) a Taqtile </h1>
      <FormField label="Email" />
      <FormField label="Senha" />
      <Button title="Entrar" />
    </FormContainer>
  );
};
