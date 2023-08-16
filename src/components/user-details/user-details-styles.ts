import styled from 'styled-components';
import { USER_LIST_BORDER, USER_LIST_BORDER_RADIUS } from '../../utils/constants';

const PADDING_USER_INFO = '8px 12px';

export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: ${USER_LIST_BORDER};
  border-radius: ${USER_LIST_BORDER_RADIUS};
`;

export const UserInfo = styled.div`
  display: flex;
  padding: ${PADDING_USER_INFO};
  flex-direction: column;
`;

export const StrongText = styled.strong`
  color: #555;
`;
