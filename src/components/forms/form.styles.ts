import styled from 'styled-components';
import { device } from '../../atomic/styles/breakpoints';

const GAP = 20;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${GAP}px;
`;

export const ButtonsForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${GAP}px;
  @media ${device.deviceSmall} {
    flex-direction: row;
  }
`;
