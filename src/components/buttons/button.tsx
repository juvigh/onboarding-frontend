import React from 'react';
import { ButtonContainer } from './button-styles';
import { LoginUserData } from '../../api/mutation/login-user';

interface ButtonProps {
  title: string;
  onClick?: (e: React.FormEvent) => Promise<string | LoginUserData | null | undefined | void>;
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
