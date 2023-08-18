import styled from 'styled-components';
import { colors } from './colors';
import { textSize, textWeight } from './constants-size';

const PADDING_PARAGRAPH = '16px 0';
const H1_MARGIN_VERTICAL = '24px 0';
const LABEL_MARGIN_BOTTOM = '8px';
const CAPTION_MARGIN_TOP = '8px';
interface ParagraphProps {
  hasPadding?: boolean;
}

interface H1Props {
  color?: keyof typeof colors;
  centred?: boolean;
}

interface LabelProps {
  hasError?: boolean;
}

export const H1 = styled.h1<H1Props>`
  ${({ centred }) => centred && `text-align: center;`}
  margin: ${H1_MARGIN_VERTICAL};
  color: ${({ color }) => (color ? `${colors[color]}` : `${colors.Black}`)};
  font-weight: ${textWeight.bold};
  font-size: ${textSize.high};
`;

export const H3 = styled.h3`
  margin: 0;
  font-size: ${textSize.medium};
  font-weight: ${textWeight.bold};
`;

export const Paragraph = styled.p<ParagraphProps>`
  margin: 0;
  ${({ hasPadding }) => hasPadding && `padding:${PADDING_PARAGRAPH};`}
  font-weight: ${textWeight.regular};
  font-size: ${textSize.medium};
`;

export const Caption = styled.span`
  color: ${colors.Red};
  font-weight: ${textWeight.regular};
  font-size: ${textSize.small};
  margin-top: ${CAPTION_MARGIN_TOP};
`;

export const Label = styled.label<LabelProps>`
  font-size: ${textSize.small};
  font-weight: ${textWeight.regular};
  color: ${({ hasError }) => (hasError ? `${colors.Red}` : `${colors.DarkGray}`)};
  margin-bottom: ${LABEL_MARGIN_BOTTOM};
`;
