import React from 'react';
import { ImageLoading, LoadingContainer } from './loading-styles';

interface LoadingIndicatorProps {
  isLoadingList?: boolean;
}

export const LoadingIndicator = ({ isLoadingList }: LoadingIndicatorProps) => (
  <LoadingContainer isLoadingList={isLoadingList}>
    <ImageLoading src="https://media.tenor.com/YtAOA9y7VG0AAAAM/loading.gif" alt="Carregando..." />
  </LoadingContainer>
);
