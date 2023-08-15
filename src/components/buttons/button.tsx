import React from 'react';
import { ButtonContainer } from './button-styles';

interface ButtonProps {
  title: string;
  bgColor?: string;
  textColor?: string;
  expand?: boolean;
  onClick?: (e: React.FormEvent) => Promise<string | null | undefined> | void;
  disable?: boolean;
  sizeRadius?: number;
  actionButton?: boolean;
}

export const Button = ({
  title,
  onClick,
  bgColor,
  textColor,
  expand,
  disable,
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
      disabled={disable}
    >
      {title}
    </ButtonContainer>
  );
};
