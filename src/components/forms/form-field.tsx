import React from 'react';
import { Separator } from '../separator/separator';
import { ErrorMessage } from './error-message';
import { FormFieldContainer } from './form-field-styles';

interface FormFieldProps {
  label: string;
  onChange: (newValue: string) => void;
  isButtonClicked: boolean;
  value: string;
  type?: string;
}

export const FormField = ({ label, onChange, isButtonClicked, value, type }: FormFieldProps) => {
  const emptyField = !value.trim() && isButtonClicked;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <FormFieldContainer>
      <label>{label}</label>
      <Separator vertical size={4} />
      <input onChange={handleInputChange} value={value} type={type || 'text'} />
      <div className="caption-message">{emptyField && <ErrorMessage message="O campo é obrigatório" />}</div>
    </FormFieldContainer>
  );
};
