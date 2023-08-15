import styled from 'styled-components';
import { INPUT_BORDER } from './../../utils/constants';
import { INPUT_BORDER_RADIUS, INPUT_PADDING } from '../../utils/constants';

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: ${INPUT_PADDING};
  border-radius: ${INPUT_BORDER_RADIUS};
  border: ${INPUT_BORDER};
`;

export const InputSelect = styled.select`
  padding: ${INPUT_PADDING};
  border-radius: ${INPUT_BORDER_RADIUS};
  border: ${INPUT_BORDER};
`;
