import { Separator } from '../separator/separator';
import { FormFieldContainer } from './form-field-styles';

interface FormFieldProps {
  label: string;
}

export const FormField = ({ label }: FormFieldProps) => {
  return (
    <FormFieldContainer>
      <label>{label}</label>
      <Separator vertical size={4} />
      <input />
    </FormFieldContainer>
  );
};
