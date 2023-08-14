import React from 'react';
import { ButtonContainer } from './button-styles';

interface ButtonProps {
  title: string;
  onClick?: (e: React.FormEvent) => Promise<string | null | undefined> | void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
};
