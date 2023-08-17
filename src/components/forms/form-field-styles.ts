import styled, { css } from 'styled-components';
import { INPUT_BORDER } from './../../utils/constants';
import { INPUT_BORDER_RADIUS, INPUT_PADDING } from '../../utils/constants';

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BaseInput = css`
  padding: ${INPUT_PADDING};
  border-radius: ${INPUT_BORDER_RADIUS};
  border: ${INPUT_BORDER};
`;

export const Input = styled.input`
  ${BaseInput}
`;

export const InputSelect = styled.select`
  ${BaseInput}
`;
