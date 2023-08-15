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
`;

export const Title = styled.div`
  background: blueviolet;
  padding: ${PADDING};
  border-radius: ${USER_LIST_BORDER_RADIUS} ${USER_LIST_BORDER_RADIUS} 0 0;
`;

export const UserItemContainer = styled.div<UserItemContainerProps>`
  display: flex;
  flex-direction: column;
  ${({ hasBorderBottom }) => hasBorderBottom && `border-bottom:${USER_LIST_BORDER};`}
  gap: ${GAP};
  padding: ${PADDING};
`;
