import {
  ACTION_BUTTON_PADDING,
  BUTTON_BORDER,
  ACTION_BUTTON_RADIUS,
  BUTTON_HEIGHT,
  BUTTON_LARGE_RAIDUS_HEIGHT,
} from './../../utils/constants';
import styled from 'styled-components';
import { BUTTON_BORDER_RADIUS, BUTTON_PADDING } from '../../utils/constants';
import { textSize, textWeight } from '../../styles/constants-size';
import { colors } from '../../styles/colors';
import { device } from '../../styles/breakpoints';

interface ButtonContainerProps {
  expand?: boolean;
  bgColor?: string;
  textColor?: string;
  largeRadius?: boolean;
  actionButton?: boolean;
  border?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: ${({ actionButton }) => (actionButton ? `${ACTION_BUTTON_PADDING}` : `${BUTTON_PADDING}`)};
  width: ${({ expand }) => (expand ? '100%' : 'auto')};
  background-color: ${({ bgColor, disabled }) =>
    disabled ? `${colors.DisableGray}` : bgColor || `${colors.Blueviolet}`};
  color: ${({ textColor, disabled }) => (disabled ? `${colors.DisableLightGray}` : textColor || `${colors.White}`)};
  border: ${({ border, textColor }) => (border ? `${BUTTON_BORDER}${textColor}` : 'none')};
  border-radius: ${({ largeRadius }) => (largeRadius ? `${ACTION_BUTTON_RADIUS}` : `${BUTTON_BORDER_RADIUS}`)};
  text-align: center;
  font-size: ${textSize.medium};
  font-weight: ${textWeight.regular};
  height: ${({ largeRadius }) => (largeRadius ? `${BUTTON_LARGE_RAIDUS_HEIGHT}` : `${BUTTON_HEIGHT}`)};
  @media ${device.deviceSmall} {
    font-size: ${textSize.medium};
  }
`;
