import styled, { css } from 'styled-components';
import { INPUT_BORDER, INPUT_BORDER_ERROR } from '../../utils/constants';
import { INPUT_BORDER_RADIUS, INPUT_PADDING } from '../../utils/constants';

interface InputProps {
  hasError?: boolean;
}

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BaseInput = css<InputProps>`
  padding: ${INPUT_PADDING};
  border-radius: ${INPUT_BORDER_RADIUS};
  border: ${({ hasError }) => (hasError ? `${INPUT_BORDER_ERROR}` : `${INPUT_BORDER}`)};
`;

export const Input = styled.input<InputProps>`
  ${BaseInput}
`;

export const InputSelect = styled.select<InputProps>`
  ${BaseInput}
`;
