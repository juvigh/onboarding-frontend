import React from 'react';
import { ImageLoading, LoadingContainer } from './loading-styles';

export const LoadingIndicator = () => (
  <LoadingContainer>
    <ImageLoading src="https://media.tenor.com/YtAOA9y7VG0AAAAM/loading.gif" alt="Carregando..." />
  </LoadingContainer>
);
