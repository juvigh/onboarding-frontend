import styled from 'styled-components';

const LOADING_CONTAINER_WIDTH = '60px';
const LOADING_CONTAINER_HEIGHT = '100vh';

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${LOADING_CONTAINER_HEIGHT};
`;

export const ImageLoading = styled.img`
  width: ${LOADING_CONTAINER_WIDTH};
`;
