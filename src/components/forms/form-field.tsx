import { Separator } from '../separator/separator';
import './form-field.css';

interface FormFieldProps {
  label: string;
}

export const FormField = ({ label }: FormFieldProps) => {
  return (
    <div className="form-field-container">
      <label>{label}</label>
      <Separator vertical size={4} />
      <input />
    </div>
  );
};