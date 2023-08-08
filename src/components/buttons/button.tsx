import { ButtonContainer } from './button-styles';

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
<<<<<<< HEAD
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
=======
  return (
    <ButtonContainer>
      <button onClick={onClick}>{title}</button>
    </ButtonContainer>
  );
>>>>>>> Update button.tsx
};
