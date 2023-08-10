import { ButtonContainer } from './button-styles';

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
};
