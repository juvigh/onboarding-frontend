import styled from 'styled-components';

const INPUT_PADDING_VERTICAL = 12;
const INPUT_PADDING_HORIZONTAL = 4;
const INPUT_BORDER_RADIUS = 8;
const INPUT_BORDER_WIDTH = 1;
const INPUT_BORDER_COLOR = '#c5c5c5';

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: ${INPUT_PADDING_VERTICAL}px ${INPUT_PADDING_HORIZONTAL}px;
    border-radius: ${INPUT_BORDER_RADIUS}px;
    border: ${INPUT_BORDER_WIDTH}px solid ${INPUT_BORDER_COLOR};
  }
`;
