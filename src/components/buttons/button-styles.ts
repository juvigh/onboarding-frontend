import { ACTION_BUTTON_PADDING } from './../../utils/constants';
import styled from 'styled-components';
import { BUTTON_BORDER_RADIUS, BUTTON_PADDING } from '../../utils/constants';

interface ButtonContainerProps {
  expand?: boolean;
  bgColor?: string;
  textColor?: string;
  sizeRadius?: number;
  actionButton?: boolean;
}
// quero que o padding seja diferente do botao de form, posso definir um padrao dentro de constants
// e adc uma prop pra saber se é botao do form ou nao e assim mudar o padding
export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: ${({ actionButton }) => (actionButton ? `${ACTION_BUTTON_PADDING}` : `${BUTTON_PADDING}`)};
  width: ${({ expand }) => (expand ? '100%' : 'auto')};
  background-color: ${({ bgColor, disabled }) => (disabled ? '#d3d3d3' : bgColor || 'blueviolet')};
  color: ${({ textColor, disabled }) => (disabled ? '#f5f5f5' : textColor || 'white')};
  border: none;
  border-radius: ${({ sizeRadius }) => (sizeRadius ? `${sizeRadius}px` : `${BUTTON_BORDER_RADIUS}`)};
  text-align: center;
`;
