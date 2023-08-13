import { styled } from 'styled-components';
import { USER_LIST_BORDER, USER_LIST_BORDER_RADIUS } from '../../utils/constants';

interface UserItemContainerProps {
  hasBorderBottom: boolean;
}

const PADDING = '12px';
const GAP = '8px';
export const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: ${USER_LIST_BORDER};
  border-radius: ${USER_LIST_BORDER_RADIUS};
  .title {
    background: blueviolet;
    padding: ${PADDING};
    border-radius: ${USER_LIST_BORDER_RADIUS} ${USER_LIST_BORDER_RADIUS} 0 0;
  }
  h1 {
    text-align: center;
    margin: 0;
    color: white;
  }
`;

export const UserItemContainer = styled.div<UserItemContainerProps>`
  display: flex;
  flex-direction: column;
  border-bottom: ${({ hasBorderBottom }) =>
    hasBorderBottom &&
    `${USER_LIST_BORDER};
  `};
  h3,
  p {
    margin: 0;
  }
  gap: ${GAP};
  padding: ${PADDING};
`;
