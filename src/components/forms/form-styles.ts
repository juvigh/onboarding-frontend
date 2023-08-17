import styled from 'styled-components';

const GAP = 20;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${GAP}px;

  span {
    color: red;
  }
`;

export const ButtonsForm = styled.div`
  display: flex;
  gap: ${GAP}px;
`;
