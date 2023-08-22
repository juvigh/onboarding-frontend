import React, { useState } from 'react';
import { Button } from '../../atomic/buttons/button.component';
import { FormField } from '../../atomic/form-field/form-field.component';
import { ButtonsForm, FormContainer } from './form.styles';
import { ErrorMessage } from '../../atomic/form-field/error-message.component';
import { useCreateUserMutation } from '../../domain/create-user.hook';
import { useNavigate } from 'react-router-dom';
import { LoadingIndicator } from '../../atomic/loading/loading-indicador';
import { H1 } from '../../atomic/styles/text-styles';

interface RegisterFormProps {
  token: string;
}

export const RegisterForm = ({ token }: RegisterFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthdayDate, setBirthdayDate] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState('');
  const [emailHasError, setEmailHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);
  const [nameHasError, setNameHasError] = useState(false);
  const [birthdayDateHasError, setBirthdayDateHasError] = useState(false);
  const [phoneHasError, setPhoneHasError] = useState(false);
  const [userTypeHasError, setUserTypeHasError] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();
  const { registerUser, loading, error } = useCreateUserMutation({ token });

  const isEmailEmpty = !email.trim() && isButtonClicked;
  const isPasswordEmpty = !password.trim() && isButtonClicked;
  const isNameEmpty = !name.trim() && isButtonClicked;
  const isPhoneEmpty = !phone.trim() && isButtonClicked;
  const isBirthdayDateEmpty = !birthdayDate.trim() && isButtonClicked;
  const isUserTypeEmpty = !userType.trim() && isButtonClicked;
  const isAnyFieldEmpty =
    isEmailEmpty || isPasswordEmpty || isNameEmpty || isPhoneEmpty || isBirthdayDateEmpty || isUserTypeEmpty;

  const currentDate = new Date();
  const minimumDate = new Date('1900-01-01');
  const isValidDate = birthdayDate
    ? new Date(birthdayDate) <= currentDate && new Date(birthdayDate) >= minimumDate
    : true;
  if (error && error.message === 'Operação não autenticada.') {
    navigate('/login');
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsButtonClicked(true);

    if (isAnyFieldEmpty) {
      setEmailHasError(isEmailEmpty);
      setPasswordHasError(isPasswordEmpty);
      setBirthdayDateHasError(isBirthdayDateEmpty);
      setPhoneHasError(isPhoneEmpty);
      setUserTypeHasError(isUserTypeEmpty);
      return;
    }

    registerUser({
      variables: {
        data: {
          email: email,
          name: name,
          phone: phone,
          birthDate: birthdayDate,
          role: userType,
          password: password,
        },
      },
      onCompleted: () => {
        navigate('/');
      },
      onError: (error) => {
        console.error('Erro na mutação', error);
        setEmailHasError(true);
        setPasswordHasError(true);
        setBirthdayDateHasError(true);
        setPhoneHasError(true);
        setUserTypeHasError(true);
        setNameHasError(true);
      },
    });
  };
  return loading ? (
    <LoadingIndicator />
  ) : (
    <FormContainer>
      <H1> Adicionar um usuário </H1>
      <FormField
        label="Nome"
        value={name}
        onChange={(value) => setName(value)}
        isButtonClicked={isButtonClicked}
        required
        hasError={nameHasError}
      />
      <FormField
        label="Email"
        value={email}
        onChange={(value) => setEmail(value)}
        isButtonClicked={isButtonClicked}
        required
        hasError={emailHasError}
      />
      <FormField
        label="Data de nascimento"
        value={birthdayDate}
        type="Date"
        onChange={(value) => setBirthdayDate(value)}
        isButtonClicked={isButtonClicked}
        required
        hasError={birthdayDateHasError}
      />
      <FormField
        label="Telefone"
        value={phone}
        onChange={(value) => setPhone(value)}
        isButtonClicked={isButtonClicked}
        required
        hasError={phoneHasError}
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

      <FormField
        label="Tipo de Usuário"
        value={userType}
        onChange={(value) => setUserType(value)}
        type="select"
        isButtonClicked={isButtonClicked}
        required
        hasError={userTypeHasError}
      >
        <option value="">Selecione o tipo</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </FormField>

      {!error && !isAnyFieldEmpty && !isValidDate && isButtonClicked && <ErrorMessage message="Data Inválida" />}
      {!isAnyFieldEmpty && isValidDate && error && isButtonClicked && <ErrorMessage message={error.message} />}
      <ButtonsForm>
        <Button
          expand
          title="Voltar a página usuários"
          bgColor="white"
          textColor="black"
          border
          onClick={() => navigate('/')}
        />
        <Button expand title="Adicionar Usuário" onClick={handleFormSubmit} />
      </ButtonsForm>
    </FormContainer>
  );
};
