import React from 'react';
import { Separator } from '../separator/separator';
import { ErrorMessage } from './error-message';
import { FormFieldContainer, Input, InputSelect } from './form-field-styles';
import { Label } from '../../styles/text-styles';
import { typography } from '../../styles/typography';

interface FormFieldProps {
  label: string;
  onChange: (newValue: string) => void;
  isButtonClicked: boolean;
  value: string;
  type?: string;
  children?: React.ReactNode;
  required?: boolean;
}

export const FormField = ({ label, onChange, isButtonClicked, value, type, children, required }: FormFieldProps) => {
  const emptyField = !value.trim() && isButtonClicked;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <FormFieldContainer>
      <Label hasError={hasError}>{label}</Label>
      <Separator vertical size={typography.separatorSize.small} />
      {type === 'select' ? (
        <InputSelect onChange={handleSelectChange} value={value}>
          {children}
        </InputSelect>
      ) : (
        <Input onChange={handleInputChange} value={value} type={type || 'text'} />
      )}

      <div className="caption-message">
        {required && emptyField && <ErrorMessage message="O campo é obrigatório" />}
      </div>
    </FormFieldContainer>
  );
};
