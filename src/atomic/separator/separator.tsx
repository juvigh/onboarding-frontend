import React from 'react';
import { SeparatorStyle } from './separator-styles';

interface SeparatorProps {
  vertical?: boolean;
  horizontal?: boolean;
  size: number;
}

export const Separator = ({ vertical = false, horizontal = false, size }: SeparatorProps) => {
  return <SeparatorStyle vertical={vertical} horizontal={horizontal} size={size} />;
};
