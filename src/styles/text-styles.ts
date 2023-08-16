import styled from 'styled-components';

const PADDING_PARAGRAPH = '16px 0';
interface ParagraphProps {
  hasPadding?: boolean;
}

export const H1 = styled.h1`
  text-align: center;
  margin: 0;
  color: white;
`;

export const H3 = styled.h3`
  margin: 0;
`;

export const Paragraph = styled.p<ParagraphProps>`
  margin: 0;
  ${({ hasPadding }) => hasPadding && `padding:${PADDING_PARAGRAPH};`}
`;
