import styled from 'styled-components';
import { BUTTON_BORDER_RADIUS, BUTTON_PADDING } from '../../utils/constants';

interface ButtonContainerProps {
  expand?: boolean;
  bgColor?: string;
  textColor?: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: ${BUTTON_PADDING};
  width: ${({ expand }) => (expand ? '100%' : 'auto')};
  background-color: ${({ bgColor, disabled }) => (disabled ? '#d3d3d3' : bgColor || 'blueviolet')};
  color: ${({ textColor, disabled }) => (disabled ? '#f5f5f5' : textColor || 'white')};
  border: none;
  border-radius: ${BUTTON_BORDER_RADIUS};
  text-align: center;
`;
