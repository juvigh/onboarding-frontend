import React from 'react';
import { ButtonContainer } from './button.styles';

interface ButtonProps {
  title: string;
  bgColor?: string;
  textColor?: string;
  expand?: boolean;
  onClick?: (e: React.FormEvent) => Promise<string | null | undefined> | void;
  disabled?: boolean;
  disable?: boolean;
  largeRadius?: boolean;
  actionButton?: boolean;
  border?: boolean;
}

export const Button = ({
  title,
  onClick,
  bgColor,
  textColor,
  expand,
  disabled,
  border,
  largeRadius,
  actionButton,
}: ButtonProps) => {
  return (
    <ButtonContainer
      actionButton={actionButton}
      bgColor={bgColor}
      largeRadius={largeRadius}
      textColor={textColor}
      expand={expand}
      onClick={onClick}
      disabled={disabled}
      border={border}
    >
      {title}
    </ButtonContainer>
  );
};
