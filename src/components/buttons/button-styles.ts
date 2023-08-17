import { ACTION_BUTTON_PADDING, BUTTON_BORDER } from './../../utils/constants';
import styled from 'styled-components';
import { BUTTON_BORDER_RADIUS, BUTTON_PADDING } from '../../utils/constants';

interface ButtonContainerProps {
  expand?: boolean;
  bgColor?: string;
  textColor?: string;
  sizeRadius?: number;
  actionButton?: boolean;
  border?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: ${({ actionButton }) => (actionButton ? `${ACTION_BUTTON_PADDING}` : `${BUTTON_PADDING}`)};
  width: ${({ expand }) => (expand ? '100%' : 'auto')};
  background-color: ${({ bgColor, disabled }) => (disabled ? '#d3d3d3' : bgColor || 'blueviolet')};
  color: ${({ textColor, disabled }) => (disabled ? '#f5f5f5' : textColor || 'white')};
  border: ${({ border, textColor }) => (border ? `${BUTTON_BORDER}${textColor}` : 'none')};
  border-radius: ${({ sizeRadius }) => (sizeRadius ? `${sizeRadius}px` : `${BUTTON_BORDER_RADIUS}`)};
  text-align: center;
`;
