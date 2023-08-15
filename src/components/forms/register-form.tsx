import { useState } from 'react';
import { Button } from '../../components/buttons/button';
import { FormField } from '../../components/forms/form-field';
import { FormContainer } from '../../components/forms/form-styles';
import { ErrorMessage } from './error-message';

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthdayDate, setBirthdayDate] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const isEmailEmpty = !email.trim() && isButtonClicked;
  const isPasswordEmpty = !password.trim() && isButtonClicked;
  const isNameEmpty = !name.trim() && isButtonClicked;
  const isPhoneEmpty = !phone.trim() && isButtonClicked;
  const isBirthdayDateEmpty = !birthdayDate.trim() && isButtonClicked;
  const isAnyFieldEmpty = isEmailEmpty || isPasswordEmpty || isNameEmpty || isPhoneEmpty || isBirthdayDateEmpty;

  const currentDate = new Date();
  const minimumDate = new Date('1900-01-01');
  const isValidDate = birthdayDate
    ? new Date(birthdayDate) <= currentDate && new Date(birthdayDate) >= minimumDate
    : true;

  const handleFormSubmit = () => {
    setIsButtonClicked(true);
  };
  return (
    <FormContainer>
      <h1> Adicionar um usuário </h1>
      <FormField label="Nome" value={name} onChange={(value) => setName(value)} isButtonClicked={isButtonClicked} />
      <FormField label="Email" value={email} onChange={(value) => setEmail(value)} isButtonClicked={isButtonClicked} />
      <FormField
        label="Data de nascimento"
        value={birthdayDate}
        type="Date"
        onChange={(value) => setBirthdayDate(value)}
        isButtonClicked={isButtonClicked}
      />
      <FormField
        label="Telefone"
        value={phone}
        onChange={(value) => setPhone(value)}
        isButtonClicked={isButtonClicked}
      />
      <FormField
        label="Senha"
        value={password}
        onChange={(value) => setPassword(value)}
        type="password"
        isButtonClicked={isButtonClicked}
      />

      <FormField
        label="Tipo de Usuário"
        value={userType}
        onChange={(value) => setUserType(value)}
        type="select"
        isButtonClicked={isButtonClicked}
      >
        <option value="">Selecione o tipo</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </FormField>

      {!isAnyFieldEmpty && !isValidDate && isButtonClicked && <ErrorMessage message="Data Inválida" />}
      <Button expand title="Adicionar Usuário" onClick={handleFormSubmit} />
    </FormContainer>
  );
};
