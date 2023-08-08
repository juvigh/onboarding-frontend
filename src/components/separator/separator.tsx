import React from 'react';

interface SeparatorProps {
  vertical?: boolean;
  horizontal?: boolean;
  size: number;
}

export const Separator = ({ vertical = false, horizontal = false, size }: SeparatorProps) => {
  const separatorStyle = {
    height: vertical ? `${size}px` : undefined,
    width: horizontal ? `${size}px` : undefined,
  };

  return <div style={separatorStyle}></div>;
};
