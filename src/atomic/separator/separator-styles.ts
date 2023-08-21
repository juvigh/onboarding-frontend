import styled from 'styled-components';

interface SeparatorStyleProps {
  vertical?: boolean;
  horizontal?: boolean;
  size: number;
}

export const SeparatorStyle = styled.div<SeparatorStyleProps>`
  height: ${({ vertical, size }) => vertical && `${size}px`};
  width: ${({ horizontal, size }) => horizontal && `${size}px`};
`;
