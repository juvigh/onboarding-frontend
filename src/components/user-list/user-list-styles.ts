import { styled } from 'styled-components';
import { USER_LIST_BORDER, USER_LIST_BORDER_RADIUS } from '../../utils/constants';
import { colors } from '../../styles/colors';

interface UserItemContainerProps {
  hasBorderBottom: boolean;
}

const PADDING = '16px';
const GAP = '8px';
export const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: ${USER_LIST_BORDER};
  border-radius: ${USER_LIST_BORDER_RADIUS};
`;

export const Title = styled.div`
  background: ${colors.Blueviolet};
  border-radius: ${USER_LIST_BORDER_RADIUS} ${USER_LIST_BORDER_RADIUS} 0 0;
`;

export const UserItemContainer = styled.div<UserItemContainerProps>`
  display: flex;
  ${({ hasBorderBottom }) => hasBorderBottom && `border-bottom:${USER_LIST_BORDER};`}
  justify-content: space-between;
  padding: ${PADDING};
`;

export const UserItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${GAP};
`;
