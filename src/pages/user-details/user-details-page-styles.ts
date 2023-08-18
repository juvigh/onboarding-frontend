import { styled } from 'styled-components';
import { device } from '../../styles/breakpoints';
import { MARGIN_SIDE, MARGIN_SIDE_DESKTOP, MARGIN_SIDE_DEVICE_LARGE, MARGIN_VERTICAL } from '../../utils/constants';

export const Container = styled.div`
  margin: ${MARGIN_VERTICAL} ${MARGIN_SIDE};
  @media ${device.deviceDesktop} {
    margin: ${MARGIN_VERTICAL} ${MARGIN_SIDE_DESKTOP};
  }
  @media ${device.deviceLarge} {
    margin: ${MARGIN_VERTICAL} ${MARGIN_SIDE_DEVICE_LARGE};
  }
`;
