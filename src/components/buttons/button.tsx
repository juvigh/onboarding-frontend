import { ButtonContainer } from './button-styles';

interface ButtonProps {
  title: string;
}

export const Button = ({ title }: ButtonProps) => {
  return (
    <ButtonContainer>
      <button>{title}</button>
    </ButtonContainer>
  );
};
