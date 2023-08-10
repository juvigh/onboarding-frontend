import styled from 'styled-components';

const BUTTON_PADDING_VERTICAL = 12;
const BUTTON_PADDING_HORIZONTAL = 4;
const BUTTON_BORDER_RADIUS = 8;

export const ButtonContainer = styled.button`
  padding: ${BUTTON_PADDING_VERTICAL}px ${BUTTON_PADDING_HORIZONTAL}px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  color: white;
  border-radius: ${BUTTON_BORDER_RADIUS}px;
  text-align: center;
`;
