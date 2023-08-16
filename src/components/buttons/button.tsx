import React from 'react';
import { ButtonContainer } from './button-styles';

interface ButtonProps {
  title: string;
  bgColor?: string;
  textColor?: string;
  expand?: boolean;
  onClick?: (e: React.FormEvent) => Promise<string | null | undefined> | void;
  disable?: boolean;
}

export const Button = ({ title, onClick, bgColor, textColor, expand, disable }: ButtonProps) => {
  return (
    <ButtonContainer bgColor={bgColor} textColor={textColor} expand={expand} onClick={onClick} disabled={disable}>
      {title}
    </ButtonContainer>
  );
};
