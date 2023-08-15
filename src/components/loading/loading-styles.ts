import styled from 'styled-components';

const LOADING_CONTAINER_WIDTH = '60px';
const LOADING_CONTAINER_HEIGHT = '100vh';
const LOADING_CONTAINER_HEIGHT_LIST = '44vh';

interface LoadingContainerProps {
  isLoadingList?: boolean;
}

export const LoadingContainer = styled.div<LoadingContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ isLoadingList }) =>
    isLoadingList ? `${LOADING_CONTAINER_HEIGHT_LIST}` : `${LOADING_CONTAINER_HEIGHT}`};
`;

export const ImageLoading = styled.img`
  width: ${LOADING_CONTAINER_WIDTH};
`;
