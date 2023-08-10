import styled from 'styled-components';
import { BUTTON_BORDER_RADIUS, BUTTON_PADDING } from '../../utils/constants';

export const ButtonContainer = styled.button`
  padding: ${BUTTON_PADDING};
  width: 100%;
  background-color: blueviolet;
  border: none;
  color: white;
  border-radius: ${BUTTON_BORDER_RADIUS};
  text-align: center;
`;
