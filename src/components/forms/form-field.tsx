import React from 'react';
import { validateEmail } from '../../utils/regex-email';
import { Separator } from '../separator/separator';
import { ErrorMessage } from './error-message';
import { FormFieldContainer } from './form-field-styles';
import { validatePassword } from '../../utils/regex-password';

interface FormFieldProps {
  label: string;
  email?: boolean;
  onChange: (newValue: string) => void;
  isButtonClicked: boolean;
  value: string;
  password?: boolean;
}

export const FormField = ({ label, onChange, isButtonClicked, value, email, password }: FormFieldProps) => {
  const emptyField = !value.trim() && isButtonClicked;
  const hasErrorEmail = email && !validateEmail(value) && isButtonClicked;
  const hasErrorPassword = password && !validatePassword(value) && isButtonClicked;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <FormFieldContainer>
      <label>{label}</label>
      <Separator vertical size={4} />
      <input onChange={handleInputChange} value={value} />
      <div className="caption-message">
        {emptyField && <ErrorMessage message="O campo é obrigatório" />}
        {!emptyField && value && hasErrorEmail && <ErrorMessage message="Este email é inválido" />}
        {!emptyField && value && hasErrorPassword && (
          <ErrorMessage message="A senha deve ter no mínimo 7 caracteres e conter pelo menos um dígito e uma letra." />
        )}
      </div>
    </FormFieldContainer>
  );
};
