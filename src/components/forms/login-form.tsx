import { Button } from '../buttons/button';
import { FormField } from './form-field';
import './form.css';

export const LoginForm = () => {
  return (
    <div className="form-container">
      <h1> Bem vindo(a) a Taqtile </h1>
      <FormField label="Email" />
      <FormField label="Senha" />
      <Button title="Entrar" />
    </div>
  );
};
