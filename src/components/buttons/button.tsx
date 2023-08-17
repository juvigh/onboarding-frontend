import React from 'react';
import { ButtonContainer } from './button-styles';

interface ButtonProps {
  title: string;
  bgColor?: string;
  textColor?: string;
  expand?: boolean;
  onClick?: (e: React.FormEvent) => Promise<string | null | undefined> | void;
  disabled?: boolean;
  sizeRadius?: number;
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
  sizeRadius,
  actionButton,
}: ButtonProps) => {
  return (
    <ButtonContainer
      actionButton={actionButton}
      bgColor={bgColor}
      sizeRadius={sizeRadius}
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
